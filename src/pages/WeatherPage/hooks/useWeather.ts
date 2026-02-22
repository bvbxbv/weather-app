import { useEffect, useState } from 'react';
import { getWeather, type Weather } from '../../../services/weatherService';

interface useWeatherProps {
  apiUrl: string;
}

export const useWeather = ({ apiUrl }: useWeatherProps) => {
  const [data, setData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const runService = async () => {
      try {
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
