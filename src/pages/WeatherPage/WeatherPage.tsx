import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { DailyForecast, Header, TodayWeather, TodayWeatherList, WelcomeSection } from './ui';

export const WeatherPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [mainHeight, setMainHeight] = useState(0);

  useEffect(() => {
    if (!mainRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMainHeight(entry.contentRect.height);
      }
    });

    observer.observe(mainRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="page__root">
        <Header />
        <WelcomeSection />

        <div className="weather-dashboard">
          <main className="weather-dashboard__main">
            <div className="weather-dashboard__root" ref={mainRef}>
              <TodayWeather
                location="Berlin, Germany"
                timestamp="Tuesday, Aug 5, 2025"
                temperature="20"
              />

              <TodayWeatherList.Root>
                <TodayWeatherList.Item title="Feels like">18&deg;</TodayWeatherList.Item>
                <TodayWeatherList.Item title="Humidity">46%</TodayWeatherList.Item>
                <TodayWeatherList.Item title="Wind">14 km/h</TodayWeatherList.Item>
                <TodayWeatherList.Item title="Precipitation">0 mm</TodayWeatherList.Item>
              </TodayWeatherList.Root>

              <DailyForecast.Root title="Daily Forecast">
                <DailyForecast.Grid>
                  <DailyForecast.Item
                    weekday="Mon"
                    icon="/icons/rain_day.png"
                    dayTemperature={20}
                    nightTemperature={15}
                  />
                  <DailyForecast.Item
                    weekday="Tue"
                    icon="/icons/rain_day.png"
                    dayTemperature={20}
                    nightTemperature={15}
                  />
                  <DailyForecast.Item
                    weekday="Wed"
                    icon="/icons/rain_day.png"
                    dayTemperature={20}
                    nightTemperature={15}
                  />
                  <DailyForecast.Item
                    weekday="Thu"
                    icon="/icons/rain_day.png"
                    dayTemperature={20}
                    nightTemperature={15}
                  />
                  <DailyForecast.Item
                    weekday="Fri"
                    icon="/icons/rain_day.png"
                    dayTemperature={20}
                    nightTemperature={15}
                  />
                  <DailyForecast.Item
                    weekday="Sat"
                    icon="/icons/rain_day.png"
                    dayTemperature={20}
                    nightTemperature={15}
                  />
                  <DailyForecast.Item
                    weekday="Sun"
                    icon="/icons/rain_day.png"
                    dayTemperature={20}
                    nightTemperature={15}
                  />
                </DailyForecast.Grid>
              </DailyForecast.Root>
            </div>
          </main>

          <aside className="weather-dashboard__sidebar">
            <div className="weather-dashboard__header">
              <div className="weather-dashboard__header-title">Hourly forecast</div>

              <div className="weather-dashboard__dropdown">
                <div className="weather-dashboard__dropdown-title">Tuesday</div>
                <ChevronDown size={16} />
              </div>
            </div>

            <div
              className="weather-dashboard__list"
              style={{ height: mainHeight ? `${mainHeight - 60.78}px` : 'auto' }}
            >
              {Array.from({ length: 24 }).map((_, index) => (
                <div className="weather-dashboard__list-item" key={index}>
                  <div className="weather-dashboard__list-icon">
                    <img src="/icons/rain_day.png" alt="" />
                  </div>

                  <div className="weather-dashboard__list-time">{index + 1} PM</div>

                  <div className="weather-dashboard__list-temperature">20 &deg;</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
