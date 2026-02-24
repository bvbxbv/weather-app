interface LocationDropdownItemProps {
  // flag: string;
  city: string;
  country: string;
}

export const LocationDropdownItem = ({ city, country }: LocationDropdownItemProps) => {
  return (
    <li className="dropdown__location">
      <div className="dropdown__location--flag" />
      <div className="dropdown__location--name">
        {city}, {country}
      </div>
    </li>
  );
};
