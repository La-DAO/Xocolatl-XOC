import { TransferContent } from "../actions";
import { isAddress } from "viem";

export class ValidateContext {
    static transferAction(
        content: TransferContent
    ): content is TransferContent {
        const { tokenAddress, recipient, amount } = content;

        // Validate types
        const areTypesValid =
            typeof tokenAddress === "string" &&
            typeof recipient === "string" &&
            (typeof amount === "string" || typeof amount === "number");

        if (!areTypesValid) {
            return false;
        }

        // Validate addresses
        return [tokenAddress, recipient].every((address) =>
            isAddress(address, { strict: false })
        );
    }
}
