// hooks/useAccountAddress.ts
import { useEffect } from "react";
import { useAccount } from "wagmi";

const useAccountAddress = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    if (address) {
      console.log("Address:", address);
    }
  }, [address]);

  return { address, isConnecting, isDisconnected };
};

export default useAccountAddress;
