// FIXME: вынести в глобал
export type Coords = {
  lat: number;
  lon: number;
};

interface LocationDropdownItemProps {
  // flag: string;
  city: string;
  country: string;
  coords: Coords;
  onClick: (city: string, country: string, coords: Coords) => void;
}

export const LocationDropdownItem = ({
  city,
  country,
  coords,
  onClick,
}: LocationDropdownItemProps) => {
  return (
    <li className="dropdown__location" onClick={() => onClick(city, country, coords)}>
      <div className="dropdown__location--flag" />
      <div className="dropdown__location--name">
        {city}, {country}
      </div>
    </li>
  );
};
