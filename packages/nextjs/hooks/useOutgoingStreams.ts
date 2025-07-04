import { useEffect, useState } from "react";
import { StreamsQueryDocument, StreamsQueryQuery, execute } from "../.graphclient";

export function useOutgoingStreams(sender: string | undefined) {
  const [data, setData] = useState<StreamsQueryQuery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!sender) return;

    setLoading(true);

    execute(StreamsQueryDocument, { sender: sender.toLowerCase() })
      .then(result => {
        setData(result?.data ?? null);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [sender]);

  return { data, loading, error };
}
