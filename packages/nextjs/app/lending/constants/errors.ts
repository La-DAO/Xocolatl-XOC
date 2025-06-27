/**
 * Smart Contract Error Codes and Messages
 * Based on Aave V3 Errors library
 */

export const SMART_CONTRACT_ERRORS: Record<string, string> = {
  "1": "The caller of the function is not a pool admin",
  "2": "The caller of the function is not an emergency admin",
  "3": "The caller of the function is not a pool or emergency admin",
  "4": "The caller of the function is not a risk or pool admin",
  "5": "The caller of the function is not an asset listing or pool admin",
  "6": "The caller of the function is not a bridge",
  "7": "Pool addresses provider is not registered",
  "8": "Invalid id for the pool addresses provider",
  "9": "Address is not a contract",
  "10": "The caller of the function is not the pool configurator",
  "11": "The caller of the function is not an AToken",
  "12": "The address of the pool addresses provider is invalid",
  "13": "Invalid return value of the flashloan executor function",
  "14": "Reserve has already been added to reserve list",
  "15": "Maximum amount of reserves in the pool reached",
  "16": "Zero eMode category is reserved for volatile heterogeneous assets",
  "17": "Invalid eMode category assignment to asset",
  "18": "The liquidity of the reserve needs to be 0",
  "19": "Invalid flashloan premium",
  "20": "Invalid risk parameters for the reserve",
  "21": "Invalid risk parameters for the eMode category",
  "22": "Invalid bridge protocol fee",
  "23": "The caller of this function must be a pool",
  "24": "Invalid amount to mint",
  "25": "Invalid amount to burn",
  "26": "Amount must be greater than 0",
  "27": "Action requires an active reserve",
  "28": "Action cannot be performed because the reserve is frozen",
  "29": "Action cannot be performed because the reserve is paused",
  "30": "Borrowing is not enabled",
  "31": "Stable borrowing is not enabled",
  "32": "User cannot withdraw more than the available balance",
  "33": "Invalid interest rate mode selected",
  "34": "The collateral balance is 0",
  "35": "Health factor is lesser than the liquidation threshold",
  "36": "There is not enough collateral to cover a new borrow",
  "37": "Collateral is (mostly) the same currency that is being borrowed",
  "38": "The requested amount is greater than the max loan size in stable rate mode",
  "39": "For repayment of a specific type of debt, the user needs to have debt that type",
  "40": "To repay on behalf of a user an explicit amount to repay is needed",
  "41": "User does not have outstanding stable rate debt on this reserve",
  "42": "User does not have outstanding variable rate debt on this reserve",
  "43": "The underlying balance needs to be greater than 0",
  "44": "Interest rate rebalance conditions were not met",
  "45": "Health factor is not below the threshold",
  "46": "The collateral chosen cannot be liquidated",
  "47": "User did not borrow the specified currency",
  "49": "Inconsistent flashloan parameters",
  "50": "Borrow cap is exceeded",
  "51": "Supply cap is exceeded",
  "52": "Unbacked mint cap is exceeded",
  "53": "Debt ceiling is exceeded",
  "54": "Claimable rights over underlying not zero (aToken supply or accruedToTreasury)",
  "55": "Stable debt supply is not zero",
  "56": "Variable debt supply is not zero",
  "57": "Ltv validation failed",
  "58": "Inconsistent eMode category",
  "59": "Price oracle sentinel validation failed",
  "60": "Asset is not borrowable in isolation mode",
  "61": "Reserve has already been initialized",
  "62": "User is in isolation mode or ltv is zero",
  "63": "Invalid ltv parameter for the reserve",
  "64": "Invalid liquidity threshold parameter for the reserve",
  "65": "Invalid liquidity bonus parameter for the reserve",
  "66": "Invalid decimals parameter of the underlying asset of the reserve",
  "67": "Invalid reserve factor parameter for the reserve",
  "68": "Invalid borrow cap for the reserve",
  "69": "Invalid supply cap for the reserve",
  "70": "Invalid liquidation protocol fee for the reserve",
  "71": "Invalid eMode category for the reserve",
  "72": "Invalid unbacked mint cap for the reserve",
  "73": "Invalid debt ceiling for the reserve",
  "74": "Invalid reserve index",
  "75": "ACL admin cannot be set to the zero address",
  "76": "Array parameters that should be equal length are not",
  "77": "Zero address not valid",
  "78": "Invalid expiration",
  "79": "Invalid signature",
  "80": "Operation not supported",
  "81": "Debt ceiling is not zero",
  "82": "Asset is not listed",
  "83": "Invalid optimal usage ratio",
  "84": "Invalid optimal stable to total debt ratio",
  "85": "The underlying asset cannot be rescued",
  "86": "Reserve has already been added to reserve list",
  "87": "The token implementation pool address and the pool address provided by the initializing pool do not match",
  "88": "Stable borrowing is enabled",
  "89": "User is trying to borrow multiple assets including a siloed one",
  "90": "The total debt of the reserve needs to be 0",
  "91": "FlashLoaning for this asset is disabled",
};

/**
 * Helper function to extract error code from error message
 * @param errorMessage - The error message from the smart contract
 * @returns The error code if found, null otherwise
 */
export const extractErrorCode = (errorMessage: string): string | null => {
  // Look for error codes in the format '36' or similar
  const errorCodeMatch = errorMessage.match(/'(\d+)'/);
  if (errorCodeMatch) return errorCodeMatch[1];

  // Look for error codes in the format "reverted with the following reason: 36"
  const revertMatch = errorMessage.match(/reason:\s*(\d+)/);
  if (revertMatch) return revertMatch[1];

  return null;
};

/**
 * Helper function to get user-friendly error message
 * @param errorMessage - The error message from the smart contract
 * @returns User-friendly error message
 */
export const getErrorMessage = (errorMessage: string): string => {
  const errorCode = extractErrorCode(errorMessage);

  if (errorCode && SMART_CONTRACT_ERRORS[errorCode]) {
    return SMART_CONTRACT_ERRORS[errorCode];
  }

  // Fallback to original error message if no code found
  return errorMessage;
};

/**
 * Common error patterns and their user-friendly messages
 */
export const COMMON_ERROR_PATTERNS: Array<{ pattern: RegExp; message: string }> = [
  {
    pattern: /insufficient collateral/i,
    message: "There is not enough collateral to cover a new borrow",
  },
  {
    pattern: /liquidity|available|supply/i,
    message: "Amount exceeds available liquidity",
  },
  {
    pattern: /borrow cap/i,
    message: "Amount exceeds the borrow cap",
  },
  {
    pattern: /supply cap/i,
    message: "Amount exceeds the supply cap",
  },
  {
    pattern: /health factor/i,
    message: "Health factor is too low for this operation",
  },
  {
    pattern: /ltv|loan.*value/i,
    message: "Loan-to-value ratio exceeds the maximum allowed",
  },
  {
    pattern: /reserve.*inactive/i,
    message: "This reserve is currently inactive",
  },
  {
    pattern: /reserve.*frozen/i,
    message: "This reserve is currently frozen",
  },
  {
    pattern: /reserve.*paused/i,
    message: "This reserve is currently paused",
  },
  {
    pattern: /borrowing.*not.*enabled/i,
    message: "Borrowing is not enabled for this asset",
  },
  {
    pattern: /supply.*not.*enabled/i,
    message: "Supply is not enabled for this asset",
  },
];

/**
 * Enhanced error message resolver that checks both error codes and common patterns
 * @param errorMessage - The error message from the smart contract
 * @returns User-friendly error message
 */
export const resolveErrorMessage = (errorMessage: string): string => {
  // First try to extract error code
  const errorCode = extractErrorCode(errorMessage);
  if (errorCode && SMART_CONTRACT_ERRORS[errorCode]) {
    return SMART_CONTRACT_ERRORS[errorCode];
  }

  // Then check common patterns
  for (const { pattern, message } of COMMON_ERROR_PATTERNS) {
    if (pattern.test(errorMessage)) {
      return message;
    }
  }

  // Fallback: only show the original error if it's short, otherwise show a generic message
  if (errorMessage && errorMessage.length < 100) {
    return errorMessage;
  }
  return "Transaction failed. Please check your inputs.";
};
