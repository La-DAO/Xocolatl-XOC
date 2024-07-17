import { useEffect } from "react";
import { useAccount } from "wagmi";

/**
 * Custom hook to retrieve and log the user's account address.
 * It also returns the account's connection status.
 */
const useAccountAddress = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  // Effect hook to log the account address whenever it changes
  useEffect(() => {
    if (address) {
      console.log("Address:", address);
    }
  }, [address]);

  // Return the account address and connection status
  return { address, isConnecting, isDisconnected };
};

export default useAccountAddress;
