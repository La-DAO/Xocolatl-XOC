export const transferTemplate = `Given the recent messages and wallet information below:

{{recentMessages}}

{{walletInfo}}

Extract the following information about the requested transfer:
- Chain to execute on: Must be one of ["arthera", "base", ...] (like in viem/chains)
- Amount to transfer: Must be a string representing the amount in AA (only number without coin symbol, e.g., "0.1")
- Recipient address: Must be a valid Arthera address starting with "0x"
- Token symbol or address (if not native token): Optional, leave as null for AA transfers

Respond with a JSON markdown block containing only the extracted values. All fields except 'token' are required:

\`\`\`json
{
    "fromChain": SUPPORTED_CHAINS,
    "amount": string,
    "toAddress": string,
    "token": string | null
}
\`\`\`
`;
