import { IAgentRuntime } from "@elizaos/core";
import type { PrivateKeyAccount } from "viem/accounts";
import { privateKeyToAccount } from "viem/accounts";

export const useGetAccount = (runtime: IAgentRuntime): PrivateKeyAccount => {
    const PRIVATE_KEY = runtime.getSetting("CRONOSZKEVM_PRIVATE_KEY")!;
    return privateKeyToAccount(`0x${PRIVATE_KEY}`);
};
