import { useEffect, useState } from 'react';
import { getLocation } from '../../../services/locationService';
import type { Location } from '../../../types';

export const useLocations = (query: string) => {
  const [data, setData] = useState<Location[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const runService = async () => {
      setLoading(true);
      try {
        const res = await getLocation(query);
        setData(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    runService();
  }, [query]);

  return { data, loading, error };
};
