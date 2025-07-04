import { useEffect, useState } from "react";
import { IncomingStreamsQueryDocument, IncomingStreamsQueryQuery, execute } from "../.graphclient";

export function useIncomingStreams(receiver: string | undefined) {
  const [data, setData] = useState<IncomingStreamsQueryQuery | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!receiver) return;

    setLoading(true);

    execute(IncomingStreamsQueryDocument, { receiver: receiver.toLowerCase() })
      .then(result => {
        setData(result?.data ?? null);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [receiver]);

  return { data, loading, error };
}
