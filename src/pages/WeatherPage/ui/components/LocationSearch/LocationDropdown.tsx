import { useLocationStore } from '../../../../../stores/locationStore';
import type { Location } from '../../../../../types';
import { Spinner } from '../Spinner';
import { LocationDropdownItem, type Coords } from './LocationDropdownItem';
import { LocationEmpty } from './LocationEmpty';

interface LocationDropdownProps {
  opened: boolean;
  data: Location[] | null;
  loading: boolean;
  onItemClick: () => void;
}

export const LocationDropdown = ({ opened, data, loading, onItemClick }: LocationDropdownProps) => {
  const hasLocations = data && data.length > 0;
  const isScrollable = hasLocations && data.length > 5;

  const onLocationClick = (city: string, country: string, coords: Coords): void => {
    useLocationStore.getState().setLocation({
      city,
      country,
      lat: coords.lat,
      lon: coords.lon,
    });

    onItemClick();
  };

  return (
    <div className={`input__dropdown ${opened ? 'visible' : 'hidden'}`}>
      <ul className={isScrollable ? 'scrollable' : ''}>
        {hasLocations &&
          data.map((location) => (
            <LocationDropdownItem
              city={location.city.name}
              country={location.country.name}
              coords={location.meta.coords}
              onClick={onLocationClick}
              key={location.city.id}
            />
          ))}

        <Spinner enabled={loading && !hasLocations} variant="big" />
        <LocationEmpty enabled={!hasLocations && !loading} />
      </ul>
    </div>
  );
};
