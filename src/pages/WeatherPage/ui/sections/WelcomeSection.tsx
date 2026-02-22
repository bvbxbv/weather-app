import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useLocations } from '../../hooks/useLocations';
import { LocationDropdown } from '../components/LocationSearch/LocationDropdown';
import { LocationSearch } from '../components/LocationSearch/LocationSearch';

export const WelcomeSection = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const debounceValue = useDebounce(query);
  const { data, loading, error } = useLocations(debounceValue);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(e.target as Node)) {
        setOpened(false);
      }
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, []);

  const onInputChange = (v: string) => {
    setQuery(v);
    setOpened(true);
  };

  const onInputClick = () => {
    if (query.length !== 0) setOpened(true);
  };

  return (
    <section className="welcome">
      <h1 className="welcome__title">How's the sky looking today?</h1>

      <div className="input-wrapper" ref={ref}>
        <LocationSearch
          value={query}
          onInputChange={(v) => onInputChange(v)}
          onInputClick={onInputClick}
        />

        <LocationDropdown opened={opened} data={data} loading={loading} />
      </div>
    </section>
  );
};
