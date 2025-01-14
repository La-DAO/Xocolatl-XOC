import { elizaLogger } from "@elizaos/core";
import {
    Action,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    Plugin,
    State,
} from "@elizaos/core";
import { fal } from "@fal-ai/client";
import { FAL_CONSTANTS, VOICE_MAP, getRandomVoice } from "./constants";

import * as fs from "fs";
import { Buffer } from "buffer";
import * as path from "path";
import * as process from "process";
import { detect } from 'langdetect'; 

const generateTTS = async (prompt: string, voice: string, runtime: IAgentRuntime) => {
    process.env["FAL_KEY"] =
        FAL_CONSTANTS.API_KEY_SETTING || runtime.getSetting("FAL_API_KEY");

    try {
        elizaLogger.log("Starting TTS generation with prompt:", prompt);

        const response = await fal.subscribe(FAL_CONSTANTS.API_TTS_ENDPOINT, {
            input: {
                input: prompt,
                voice: voice
              },
            logs: true,
            onQueueUpdate: (update) => {
                if (update.status === "IN_PROGRESS") {
                    update.logs
                        .map((log) => log.message)
                        .forEach(elizaLogger.log);
                }
            },
        });

        elizaLogger.log(
            "Generation request successful, received response:",
            response
        );

        return {success: true, 
                data: response.data};
    } 
    catch (error) {
        elizaLogger.error("TTS generation error:", error);
        return {
            success: false,
            error: error.message || "Unknown error occurred",
        };
    }
};

const TTSGeneration: Action = {
    name: "GENERATE_TTS",
    similes: [
        "TTS_GENERATION",
        "CREATE_TTS",
        "TEXT2SPEECH",
        "T2S",
        "TEXT_TO_SPEECH",
        "AUDIO_CREATE",
    ],
    description: "Generate a tts audio based on a text prompt",
    validate: async (runtime: IAgentRuntime, _message: Memory) => {
        elizaLogger.log("Validating TTS action");
        const FalApiKey = runtime.getSetting("FAL_API_KEY");
        elizaLogger.log("FAL_API_KEY present:", !!FalApiKey);
        return !!FalApiKey;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        _state: State,
        _options: any,
        callback: HandlerCallback
    ) => {
        elizaLogger.log("TTS request:", message);

        // Clean up the prompt by removing mentions and commands
        const TTSPrompt = message.content.text
            .replace(/<@\d+>/g, "") // Remove mentions
            .replace(/generate TTS|create TTS|make TTS|render TTS/gi, "") // Remove commands
            .trim();

        if (!TTSPrompt || TTSPrompt.length < 3) {
            callback({
                text: "Please input a word at least of length 3",
            });
            return;
        }

        elizaLogger.log("TTS prompt:", TTSPrompt);

        callback({
            text: `I'll generate a audio based on your prompt: "${TTSPrompt}". This might take a few seconds...`,
        });

        const language = detect(TTSPrompt);
        const voice_subject = VOICE_MAP[language[0].lang];
        const target_voice = getRandomVoice(voice_subject).fullName;

        elizaLogger.log("Starting TTS generation with prompt:", prompt, "and voice:", target_voice);

        try {
            const result = await generateTTS(TTSPrompt, target_voice, runtime);

            if (result.success && result.data.audio.url) {
                // Download the Audio file
                const response = await fetch(result.data.audio.url);
                const arrayBuffer = await response.arrayBuffer();
                const TTSFileName = `content_cache/tts_${result.data.audio.file_name}`;

                // ensure the directory is existed
                const directoryPath = path.dirname(TTSFileName);
                if (!fs.existsSync(directoryPath)) {
                    fs.mkdirSync(directoryPath, { recursive: true });
                }

                // Save Audio file
                fs.writeFileSync(TTSFileName, Buffer.from(arrayBuffer));

                elizaLogger.log("Audio Duration:", result.data.audio.duration);
                callback(
                    {
                        text: "TTS Success! Here's your generated audio!",
                        attachments: [
                            {
                                id: crypto.randomUUID(),
                                url: result.data.audio.url,
                                title: "TTS Generation",
                                source: "TTSGeneration",
                                description: TTSPrompt,
                                text: TTSPrompt,
                            },
                        ],
                    },
                    [TTSFileName]
                ); // Add the audio file to the attachments
            } else {
                callback({
                    text: `TTS generation failed: ${result.error}`,
                    error: true,
                });
            }
        } catch (error) {
            elizaLogger.error(`Failed to generate TTS. Error: ${error}`);
            callback({
                text: `TTS generation failed: ${error.message}`,
                error: true,
            });
        }
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Generate a TTS of prompt: Hello world!",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "I'll call a TTS to generate an audio based on your input prompt",
                    action: "CREATE_TTS",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Please do TTS to a prompt: Sam is busy now",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Ok, please wait for the tts generation~",
                    action: "AUDIO_CREATE",
                },
            },
        ],
    ],
} as Action;

export const TTSGenerationPlugin: Plugin = {
    name: "TTSGeneration",
    description: "Generate TTS using PlayAI tts (v3)",
    actions: [TTSGeneration],
    evaluators: [],
    providers: [],
};
