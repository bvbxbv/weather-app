import type { Location } from '../../../../../types';
import { LocationEmpty } from './LocationEmpty';
import { LocationLoading } from './LocationLoading';

interface LocationDropdownProps {
  opened: boolean;
  data: Location[] | null;
  loading: boolean;
}

export const LocationDropdown = ({ opened, data, loading }: LocationDropdownProps) => {
  const hasLocations = data && data.length > 0;
  const isScrollable = hasLocations && data.length > 5;

  return (
    <div className={`input__dropdown ${opened ? 'visible' : 'hidden'}`}>
      <ul className={isScrollable ? 'scrollable' : ''}>
        {hasLocations &&
          data.map((location) => (
            <li className="dropdown__location" key={location.city.id}>
              <div className="dropdown__location--flag" />
              <div className="dropdown__location--name">
                {location.city.name}, {location.country.name}
              </div>
            </li>
          ))}

        <LocationLoading enabled={loading && !hasLocations} />

        <LocationEmpty enabled={!hasLocations && !loading} />
      </ul>
    </div>
  );
};
