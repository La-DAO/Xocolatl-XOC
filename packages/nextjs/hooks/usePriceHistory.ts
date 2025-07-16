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

      console.log("Fetching price history for period:", timePeriod);
      console.log("Date from:", dateFrom?.toISOString());

      const response = await axios.get(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/price_history`, {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
        params: {
          select: "fetch_spot, timestamp",
          // timestamp: `gte.${dateFrom?.toISOString()}`, // Temporarily removed for debugging
          order: "timestamp.asc",
        },
      });

      console.log("Raw response data:", response.data);
      console.log("Number of data points:", response.data?.length || 0);
      console.log("Response status:", response.status);
      console.log("Full response:", response);

      if (!response.data || response.data.length === 0) {
        console.log("No data returned from Supabase");
        // Try without any filters to see if table exists
        const testResponse = await axios.get(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/price_history`, {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          },
          params: {
            select: "*",
            limit: 5,
          },
        });
        console.log("Test response (all data):", testResponse.data);
      }

      return response.data;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
}
