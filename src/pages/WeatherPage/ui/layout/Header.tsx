import { ChevronDown, Settings, SunSnow } from 'lucide-react';

export const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__item page-header__item--logo">
        <div className="page-header__item-icon">
          <SunSnow size={36} />
        </div>
        <div className="page-header__item-text">Weather now</div>
      </div>

      <div className="page-header__item page-header__item--dropdown hoverable">
        <div className="page-header__item-icon">
          <Settings size={16} />
        </div>

        <div className="page-header__item-text">Units</div>

        <div className="page-header__item-icon">
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};
