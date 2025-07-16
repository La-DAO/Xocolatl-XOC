import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function usePriceHistory() {
  return useQuery({
    queryKey: ["priceHistory"],
    queryFn: async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/price_history`, {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
        params: {
          select: "fetch_spot,timestamp",
          order: "timestamp.asc",
          limit: 1000,
        },
      });
      return response.data as { fetch_spot: string; timestamp: string }[];
    },
    refetchInterval: false, // Disable automatic refetching
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    refetchOnMount: false, // Don't refetch when component mounts if data exists
    refetchOnReconnect: false, // Don't refetch when reconnecting
    staleTime: Infinity, // Data never becomes stale (manual refresh only)
    gcTime: 3600000, // Cache data for 1 hour
  });
}
