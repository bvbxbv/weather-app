interface TodayWeatherProps {
  // можно будет обернуть location в объект типа
  // location = {
  //   city: string,
  //   country: string,
  //   coords: {
  //     long: number,
  //     lat: number
  //   }
  // }
  // FIXME: подумай об этом, стоит ли вообще
  location?: string; // Berlin, Germany
  timestamp: string; // Tuesday, Aug 5, 2025
  temperature: string; // 20*
}

export const TodayWeather = ({ location, timestamp, temperature }: TodayWeatherProps) => {
  return (
    <section className="today-weather">
      <div className="today-weather__overlay">
        <div className="today-weather__text">
          <div className="today-weather__text-location">
            {location ?? 'Please pick your location'}
          </div>

          <div className="today-weather__text-timestamp">{timestamp}</div>
        </div>

        <div className="today-weather__temperature">{temperature}&deg;</div>
      </div>
    </section>
  );
};
