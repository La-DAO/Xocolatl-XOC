import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

export function usePriceHistory(timePeriod: "1month" | "6months" | "1year") {
  return useQuery({
    queryKey: ["priceHistory", timePeriod],
    queryFn: async () => {
      const now = dayjs();
      const dateFrom = {
        "1month": now.subtract(1, "month"),
        "6months": now.subtract(6, "month"),
        "1year": now.subtract(1, "year"),
      }[timePeriod];

      const response = await axios.get(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/price_history`, {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
        params: {
          select: "fetch_spot, timestamp",
          timestamp: `gte.${dateFrom?.toISOString()}`,
          order: "timestamp.asc",
        },
      });

      return response.data;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
}
