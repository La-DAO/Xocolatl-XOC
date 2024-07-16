import { useEffect, useState } from "react";
import { useBalance } from "wagmi";

/**
 * Custom hook to fetch and manage the balance of an Ethereum address.
 * This hook uses the `useBalance` hook from `wagmi` to fetch the balance and manages
 * the address and balance state internally.
 */
const useBalanceOf = () => {
  // State to store the Ethereum address.
  const [address, setAddress] = useState<`0x${string}` | null>(null);

  // Fetch the balance using the address. If address is null, it is not passed.
  const { data, isLoading, isError } = useBalance({ address: address ?? undefined });

  // State to store the formatted balance.
  const [balance, setBalance] = useState<string | null>(null);

  // Effect to update the balance state whenever new data is fetched.
  useEffect(() => {
    if (data) {
      // Set the balance state with the formatted balance.
      setBalance(data.formatted);
    }
  }, [data]);

  /**
   * Function to set the Ethereum address and trigger balance fetch.
   * @param addr - The Ethereum address to fetch balance for.
   */
  const fetchBalance = (addr: `0x${string}`) => {
    // Set the address state with the provided address.
    setAddress(addr);
  };

  // Return the balance, loading state, error state, and the function to fetch balance.
  return { balance, isLoading, isError, fetchBalance };
};

export default useBalanceOf;
