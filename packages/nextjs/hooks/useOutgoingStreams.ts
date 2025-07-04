import { useEffect, useState } from "react";
import { StreamsQueryDocument, StreamsQueryQuery, execute } from "../.graphclient";
import { useStreamingStore } from "../stores/streaming-store";

export function useOutgoingStreams(sender: string | undefined) {
  const [data, setData] = useState<StreamsQueryQuery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const refreshKey = useStreamingStore(state => state.refreshKey);

  useEffect(() => {
    if (!sender) return;

    setLoading(true);

    // Convert address to lowercase for GraphQL query
    const senderLower = sender.toLowerCase();

    execute(StreamsQueryDocument, { sender: senderLower })
      .then(result => {
        setData(result?.data ?? null);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [sender, refreshKey]);

  return { data, loading, error };
}
