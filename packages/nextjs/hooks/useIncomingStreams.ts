import { useEffect, useState } from "react";
import { IncomingStreamsQueryDocument, IncomingStreamsQueryQuery, execute } from "../.graphclient";
import { useStreamingStore } from "../stores/streaming-store";

export function useIncomingStreams(receiver: string | undefined) {
  const [data, setData] = useState<IncomingStreamsQueryQuery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const refreshKey = useStreamingStore(state => state.refreshKey);

  useEffect(() => {
    if (!receiver) return;

    setLoading(true);

    // Convert address to lowercase for GraphQL query
    const receiverLower = receiver.toLowerCase();

    execute(IncomingStreamsQueryDocument, { receiver: receiverLower })
      .then(result => {
        setData(result?.data ?? null);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [receiver, refreshKey]);

  return { data, loading, error };
}
