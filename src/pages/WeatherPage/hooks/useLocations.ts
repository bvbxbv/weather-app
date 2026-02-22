import { useEffect, useState } from 'react';
import { getLocation } from '../../../services/locationService';
import type { Location } from '../../../types';

interface useLocationsProps {
  apiUrl: string;
}

export const useLocations = ({ apiUrl }: useLocationsProps) => {
  const [data, setData] = useState<Location[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const runService = async () => {
      setLoading(true);
      try {
        const res = await getLocation(apiUrl);
        setData(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    runService();
  }, [apiUrl]);

  return { data, loading, error };
};
