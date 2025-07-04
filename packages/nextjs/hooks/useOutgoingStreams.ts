import { useEffect, useState } from "react";
import { StreamsQueryDocument, StreamsQueryQuery, execute } from "../.graphclient";
import { useLendingStore } from "../stores/lending-store";

export function useOutgoingStreams(sender: string | undefined) {
  const [data, setData] = useState<StreamsQueryQuery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const refreshKey = useLendingStore(state => state.refreshKey);

  useEffect(() => {
    if (!sender) return;

    setLoading(true);

    execute(StreamsQueryDocument, { sender: sender.toLowerCase() })
      .then(result => {
        setData(result?.data ?? null);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [sender, refreshKey]); // Include `refreshKey` in the dependency array

  return { data, loading, error };
}
