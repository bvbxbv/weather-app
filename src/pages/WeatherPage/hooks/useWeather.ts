import { useEffect, useState } from 'react';

interface useWeatherProps {
  apiUrl: string;
}

export const useWeather = ({ apiUrl }: useWeatherProps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { data, loading, error };
};
