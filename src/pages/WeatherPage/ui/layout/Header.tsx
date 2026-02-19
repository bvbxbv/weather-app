import { Settings, SunSnow } from 'lucide-react';
import { Select } from '../components/Select';

export const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__item page-header__item--logo">
        <div className="page-header__item-icon">
          <SunSnow size={36} />
        </div>

        <div className="page-header__item-text">Weather now</div>
      </div>

      <Select icon={Settings} text="Units"></Select>
    </header>
  );
};
