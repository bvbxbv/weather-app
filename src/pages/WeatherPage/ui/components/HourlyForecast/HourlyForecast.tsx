import Select from '../Select/components/Select';

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

      <Select.Root text={selectedDay} className="dropdown--day">
        <Select.Option title="Monday" />
        <Select.Option title="Tuesday" />
        <Select.Option title="Wednesday" />
        <Select.Option title="Thursday" />
        <Select.Option title="Friday" />
        <Select.Option title="Saturday" />
        <Select.Option title="Sunday" />
      </Select.Root>
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
