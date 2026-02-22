import type { Location } from '../../../../../types';
import { LocationEmpty } from './LocationEmpty';
import { LocationLoading } from './LocationLoading';

interface LocationDropdownProps {
  opened: boolean;
  data: Location[] | null;
  loading: boolean;
}

export const LocationDropdown = ({ opened, data, loading }: LocationDropdownProps) => {
  return (
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

        <LocationLoading enabled={loading && data?.length === 0} />
        <LocationEmpty enabled={!data || (data?.length === 0 && !loading)} />
      </ul>
    </div>
  );
};
