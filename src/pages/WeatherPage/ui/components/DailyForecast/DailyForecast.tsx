interface RootProps {
  title: string;
  children: React.ReactNode;
}

interface GridProps {
  children: React.ReactNode;
}

interface ItemProps {
  weekday: string;
  icon: string;
  dayTemperature: number;
  nightTemperature: number;
}

const Root = ({ title, children }: RootProps) => {
  return (
    <section className="daily-forecast">
      <h2 className="daily-forecast__title">{title}</h2>

      {children}
    </section>
  );
};

const Grid = ({ children }: GridProps) => {
  return <div className="daily-forecast__grid">{children}</div>;
};

const Item = ({ weekday, icon, dayTemperature, nightTemperature }: ItemProps) => {
  return (
    <div className="daily-forecast__item">
      <div className="daily-forecast__weekday">{weekday}</div>

      <div className="daily-forecast__icon">
        <img src={icon} alt={weekday + ' temperature'} />
      </div>

      <div className="daily-forecast__temperature">
        <div className="daily-forecast__temperature-day">{dayTemperature}&deg;</div>
        <div className="daily-forecast__temperature-night">{nightTemperature}&deg;</div>
      </div>
    </div>
  );
};

const DailyForecast = {
  Root,
  Grid,
  Item,
};

export default DailyForecast;
