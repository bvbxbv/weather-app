import { CircleX, SearchIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocations } from '../../hooks/useLocations';
import { Input } from '../components/Input/Input';
import { useDebounce } from '../../hooks/useDebounce';

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
              value={query}
            />

            <div
              className="welcome__close-icon"
              onClick={() => {
                setQuery('');
              }}
            >
              <CircleX size={20} />
            </div>
          </div>
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

            {/* spinner taken from https://cssloaders.github.io/ */}
            {/* FIXME: добавить ссылку на спиннер в readme */}
            {loading && data?.length === 0 && (
              <li className="dropdown__location--spinner">
                <div className="loader"></div>
              </li>
            )}

            {(!data || (data?.length === 0 && !loading)) && (
              <li className="dropdown__location--empty">Ничего нет :/</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
