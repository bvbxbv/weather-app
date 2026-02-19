import { ChevronDown } from 'lucide-react';

interface RootProps {
  children: React.ReactNode;
}

interface HeaderProps {
  title: string;
  selectedDay: string;
}

interface ListProps {
  maxHeight: number;
  children: React.ReactNode;
}

interface ItemProps {
  icon: string;
  time: string;
  temperature: number;
}

const Root = ({ children }: RootProps) => {
  return <aside className="weather-dashboard__sidebar">{children}</aside>;
};

const Header = ({ title, selectedDay }: HeaderProps) => {
  return (
    <div className="weather-dashboard__header">
      <div className="weather-dashboard__header-title">{title}</div>

      <div className="weather-dashboard__dropdown">
        <div className="weather-dashboard__dropdown-title">{selectedDay}</div>
        <ChevronDown size={16} />
      </div>
    </div>
  );
};

const List = ({ maxHeight, children }: ListProps) => {
  return (
    <div
      className="weather-dashboard__list"
      style={{ height: maxHeight ? `${maxHeight - 60.78}px` : 'auto' }}
    >
      {children}
    </div>
  );
};

const Item = ({ icon, time, temperature }: ItemProps) => {
  return (
    <div className="weather-dashboard__list-item">
      <div className="weather-dashboard__list-icon">
        <img src={icon} alt="" />
      </div>

      <div className="weather-dashboard__list-time">{time}</div>

      <div className="weather-dashboard__list-temperature">{temperature} &deg;</div>
    </div>
  );
};

const HourlyForecast = {
  Root,
  Header,
  List,
  Item,
};

export default HourlyForecast;
