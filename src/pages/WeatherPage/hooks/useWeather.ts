import { useEffect, useState } from 'react';
import { getWeather } from '../../../services/weatherService';
import { type Weather } from '../../../types';

export const useWeather = (coords: { lat: number; lon: number } | undefined) => {
  const [data, setData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!coords) return;

    const runService = async () => {
      setLoading(true);
      try {
        const res = await getWeather(coords);
        setData(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    runService();
  }, [coords?.lat, coords?.lon, coords]);

  return { data, loading, error };
};
