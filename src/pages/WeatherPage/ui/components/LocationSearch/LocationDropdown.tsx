import type { Location } from '../../../../../types';
import { LocationDropdownItem } from './LocationDropdownItem';
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
            <LocationDropdownItem
              city={location.city.name}
              country={location.country.name}
              key={location.city.id}
            />
          ))}

        <LocationLoading enabled={loading && !hasLocations} />
        <LocationEmpty enabled={!hasLocations && !loading} />
      </ul>
    </div>
  );
};
