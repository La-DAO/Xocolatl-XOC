import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

export function useApyHistory(tokenAddress: string, timePeriod: string) {
  return useQuery({
    queryKey: ["apyHistory", tokenAddress, timePeriod],
    queryFn: async () => {
      const now = dayjs();
      const dateFrom = {
        "1month": now.subtract(1, "month"),
        "6months": now.subtract(6, "month"),
        "1year": now.subtract(1, "year"),
      }[timePeriod];

      const response = await axios.get(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/apy_history`, {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
        params: {
          select: "supply_apy, borrow_apr, timestamp",
          token_address: `eq.${tokenAddress}`,
          timestamp: `gte.${dateFrom?.toISOString()}`,
          order: "timestamp.asc",
        },
      });

      return response.data;
    },
  });
}
