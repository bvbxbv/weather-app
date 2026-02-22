import { useEffect, useState } from 'react';

export const useDebounce = (input: string, delay: number = 500) => {
  const [debounceValue, setDebounceValue] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(input);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [input, delay]);

  return debounceValue;
};
