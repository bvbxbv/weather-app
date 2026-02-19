const List = ({ children }: { children: React.ReactNode }) => {
  return <section className="today-more-info">{children}</section>;
};

interface TodayWeatherListItemProps {
  title: string;
  children: React.ReactNode;
}

const Item = ({ title, children }: TodayWeatherListItemProps) => {
  return (
    <div className="today-more-info__card">
      <div className="today-more-info__card--title">{title}</div>

      <div className="today-more-info__card--value">{children}</div>
    </div>
  );
};

const TodayWeatherList = {
  Root: List,
  Item: Item,
};

export default TodayWeatherList;
