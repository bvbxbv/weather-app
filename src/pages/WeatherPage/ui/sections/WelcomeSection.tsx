import { SearchIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocations } from '../../hooks/useLocations';
import { Input } from '../components/Input/Input';

export const WelcomeSection = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [apiUrl, setApiUrl] = useState<string>(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query ?? ''}&count=10&language=auto&format=json`,
  );
  const { data, loading, error } = useLocations({ apiUrl });

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setApiUrl(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=auto&format=json`,
    );
  }, [query]);

  // FIXME: ошибки null в консоли (это че за ужасы)
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

  return (
    <section className="welcome">
      <h1 className="welcome__title">How's the sky looking today?</h1>

      <div className="input-wrapper" ref={ref}>
        <form action="#" method="GET" className="welcome__search">
          <div className="welcome__search-wrapper">
            <SearchIcon size={20} className="welcome__search-icon" />

            <Input
              name="city"
              placeholder="Search for a place..."
              onChange={(v) => {
                setQuery(v);
                setOpened(true);
              }}
              onClick={() => {
                if (query.length !== 0) {
                  setOpened(true);
                }
              }}
            />
          </div>

          <button className="welcome__search-submit">Search</button>
        </form>

        <div className={'input__dropdown ' + (opened ? 'visible' : 'hidden')}>
          <ul className={data && data?.length > 5 ? 'scrollable' : ''}>
            {data &&
              data?.length > 0 &&
              data?.map((location) => (
                <li className="dropdown__location" key={location.city.id}>
                  <div className="dropdown__location--flag"></div>
                  <div className="dropdown__location--name">
                    {location.city.name}, {location.country.name}
                  </div>
                </li>
              ))}

            {/* TODO: спиннер */}
            {loading && <li className="dropdown__location--empty">Loading...</li>}

            {/* TODO: можно эмодзи добавить или что-то ещё (выглядит грустно пока что) */}
            {(!data || (data?.length === 0 && !loading)) && (
              <li className="dropdown__location--empty">Ничего нет :/</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
