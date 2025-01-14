import {
    Action,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    elizaLogger,
    composeContext,
    generateObject,
    ModelClass
} from "@elizaos/core";
import { fileSchema, isValidFile } from "../types";
import { getObsidian } from "../helper";
import { fileTemplate } from "../templates/file";

export const saveFileAction: Action = {
    name: "SAVE_FILE",
    similes: [
        "WRITE_FILE",
        "CREATE_FILE",
        "SAVE",
        "STORE_FILE",
        "PUT_FILE",
        "WRITE_TO_FILE",
        "CREATE_NEW_FILE"
    ],
    description:
        "Create or update a file in the Obsidian vault. Use format: 'Save FOLDER/SUBFOLDER/filename with content: your_content'",
    validate: async (runtime: IAgentRuntime) => {
        try {
            elizaLogger.debug("Validating Obsidian connection");
            const obsidian = await getObsidian(runtime);
            await obsidian.connect();
            elizaLogger.debug("Obsidian connection validated successfully");
            return true;
        } catch (error) {
            elizaLogger.error("Failed to validate Obsidian connection:", error);
            return false;
        }
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        options: any,
        callback?: HandlerCallback
    ) => {
        elizaLogger.info("Starting save file handler");
        const obsidian = await getObsidian(runtime);

        try {
            // Initialize or update state for context generation
            if (!state) {
                state = (await runtime.composeState(message)) as State;
            } else {
                state = await runtime.updateRecentMessageState(state);
            }

            const context = composeContext({
                state,
                template: fileTemplate(message.content.text),
            });

            const fileContext = await generateObject({
                runtime,
                context,
                modelClass: ModelClass.MEDIUM,
                schema: fileSchema,
                stop: ["\n"]
            }) as any;

            if (!isValidFile(fileContext.object)) {
                elizaLogger.error(
                    "Invalid file information. Required: path and content. Format: 'Save FOLDER/SUBFOLDER/filename with content: your_content' - ",
                    fileContext.object
                );

                if (callback) {
                    callback({
                        text: `Invalid file information. Required: path and content. Format: 'Save FOLDER/SUBFOLDER/filename with content: your_content' - ${fileContext.object}`,
                        error: true,
                    });
                }
                return false;
            }

            const { path, content } = fileContext.object;

            if (!content) {
                elizaLogger.error("File content is required for saving");
                if (callback) {
                    callback({
                        text: "File content is required for saving",
                        error: true,
                    });
                }
                return false;
            }

            elizaLogger.info(`Saving file at path: ${path}`);
            // Note: Obsidian will create a new document at the path you have specified if such a document did not already exis
            await obsidian.saveFile(path, content, true);
            elizaLogger.info(`Successfully saved file: ${path}`);

            if (callback) {
                callback({
                    text: `Successfully saved file: ${path}`,
                    metadata: {
                        path: path,
                        operation: "SAVE",
                        success: true
                    },
                });
            }
            return true;
        } catch (error) {
            elizaLogger.error("Error saving file:", error);
            if (callback) {
                callback({
                    text: `Error saving file: ${error.message}`,
                    error: true,
                });
            }
            return false;
        }
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Save DOCUMENTS/report.txt with content: This is a test report",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "{{responseData}}",
                    action: "SAVE_FILE",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Create PROJECTS/src/config.json with content: { \"version\": \"1.0.0\" }",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "{{responseData}}",
                    action: "SAVE_FILE",
                },
            },
        ],
    ],
};
