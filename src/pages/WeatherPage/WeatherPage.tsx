import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Header, TodayWeather, WelcomeSection } from './ui';

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

              <section className="today-more-info">
                <div className="today-more-info__card">
                  <div className="today-more-info__card--title">Feels like</div>

                  <div className="today-more-info__card--value">18 &deg;</div>
                </div>

                <div className="today-more-info__card">
                  <div className="today-more-info__card--title">Humidity</div>

                  <div className="today-more-info__card--value">46%</div>
                </div>

                <div className="today-more-info__card">
                  <div className="today-more-info__card--title">Wind</div>

                  <div className="today-more-info__card--value">14 km/h</div>
                </div>

                <div className="today-more-info__card">
                  <div className="today-more-info__card--title">Precipitation</div>

                  <div className="today-more-info__card--value">0 mm</div>
                </div>
              </section>

              <section className="daily-forecast">
                <h2 className="daily-forecast__title">Daily forecast</h2>

                <div className="daily-forecast__grid">
                  <div className="daily-forecast__item">
                    <div className="daily-forecast__weekday">Tue</div>

                    <div className="daily-forecast__icon">
                      <img src="/icons/rain_day.png" />
                    </div>

                    <div className="daily-forecast__temperature">
                      <div className="daily-forecast__temperature-day">25°</div>
                      <div className="daily-forecast__temperature-night">13°</div>
                    </div>
                  </div>

                  <div className="daily-forecast__item">
                    <div className="daily-forecast__weekday">Wed</div>

                    <div className="daily-forecast__icon">
                      <img src="/icons/rain_day.png" />
                    </div>

                    <div className="daily-forecast__temperature">
                      <div className="daily-forecast__temperature-day">25°</div>
                      <div className="daily-forecast__temperature-night">13°</div>
                    </div>
                  </div>

                  <div className="daily-forecast__item">
                    <div className="daily-forecast__weekday">Thu</div>

                    <div className="daily-forecast__icon">
                      <img src="/icons/rain_day.png" />
                    </div>

                    <div className="daily-forecast__temperature">
                      <div className="daily-forecast__temperature-day">25°</div>
                      <div className="daily-forecast__temperature-night">13°</div>
                    </div>
                  </div>

                  <div className="daily-forecast__item">
                    <div className="daily-forecast__weekday">Fri</div>

                    <div className="daily-forecast__icon">
                      <img src="/icons/rain_day.png" />
                    </div>

                    <div className="daily-forecast__temperature">
                      <div className="daily-forecast__temperature-day">25°</div>
                      <div className="daily-forecast__temperature-night">13°</div>
                    </div>
                  </div>

                  <div className="daily-forecast__item">
                    <div className="daily-forecast__weekday">Sat</div>

                    <div className="daily-forecast__icon">
                      <img src="/icons/rain_day.png" />
                    </div>

                    <div className="daily-forecast__temperature">
                      <div className="daily-forecast__temperature-day">25°</div>
                      <div className="daily-forecast__temperature-night">13°</div>
                    </div>
                  </div>

                  <div className="daily-forecast__item">
                    <div className="daily-forecast__weekday">Sun</div>

                    <div className="daily-forecast__icon">
                      <img src="/icons/rain_day.png" />
                    </div>

                    <div className="daily-forecast__temperature">
                      <div className="daily-forecast__temperature-day">25°</div>
                      <div className="daily-forecast__temperature-night">13°</div>
                    </div>
                  </div>

                  <div className="daily-forecast__item">
                    <div className="daily-forecast__weekday">Mon</div>

                    <div className="daily-forecast__icon">
                      <img src="/icons/rain_day.png" />
                    </div>

                    <div className="daily-forecast__temperature">
                      <div className="daily-forecast__temperature-day">25°</div>
                      <div className="daily-forecast__temperature-night">13°</div>
                    </div>
                  </div>
                </div>
              </section>
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
