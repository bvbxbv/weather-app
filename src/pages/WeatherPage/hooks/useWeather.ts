import { useEffect, useState } from 'react';
import { getWeather } from '../../../services/weatherService';
import { type Weather } from '../../../types';

interface useWeatherProps {
  apiUrl: string;
}

export const useWeather = ({ apiUrl }: useWeatherProps) => {
  const [data, setData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const runService = async () => {
      setLoading(true);
      try {
        // FIXME: не передавать всю ссылку а только то что меняется (lat, lon)
        if (!apiUrl.trim()) {
          setData(null);
          setLoading(false);
          return;
        }

        const res = await getWeather(apiUrl);
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
