import { useEffect } from 'react';
import { useElementHeight } from './hooks/useElementHeight';
import { useLocations } from './hooks/useLocations';
import { useWeather } from './hooks/useWeather';
import {
  DailyForecast,
  Header,
  HourlyForecast,
  TodayWeather,
  TodayWeatherList,
  WelcomeSection,
} from './ui';

export const WeatherPage = () => {
  const { ref, height } = useElementHeight();
  const weatherUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m&timezone=auto';
  const locationsUrl =
    'https://geocoding-api.open-meteo.com/v1/search?name=Москва&count=10&language=auto&format=json';

  const {
    data: weather,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather({ apiUrl: weatherUrl });
  const {
    data: locations,
    loading: locationsLoading,
    error: locationsError,
  } = useLocations({ apiUrl: locationsUrl });

  useEffect(() => {
    if (weatherLoading) {
      console.log('Weather loading...');
    } else {
      if (weatherError) {
        console.error(weatherError);
      } else {
        console.log('Weather loaded');
        console.log(weather);
      }
    }

    if (locationsLoading) {
      console.log('Locations loading...');
    } else {
      if (locationsError) {
        console.error(locationsError);
      } else {
        console.log('Locations loaded');
        console.log(locations);
      }
    }
  }, [weather, weatherLoading, weatherError, locations, locationsLoading, locationsError]);

  return (
    <div className="page">
      <div className="page__root">
        <Header />
        <WelcomeSection />

        <div className="weather-dashboard">
          <main className="weather-dashboard__main">
            <div className="weather-dashboard__root" ref={ref}>
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

          <HourlyForecast.Root>
            <HourlyForecast.Header title="Hourly forecast" selectedDay="Monday" />

            <HourlyForecast.List maxHeight={height}>
              {Array.from({ length: 24 }).map((_, index) => {
                return (
                  <HourlyForecast.Item
                    icon="/icons/rain_day.png"
                    time={((index + 1) % 12 || 12) + ' ' + (index < 12 ? 'AM' : 'PM')}
                    temperature={12}
                    key={index}
                  />
                );
              })}
            </HourlyForecast.List>
          </HourlyForecast.Root>
        </div>
      </div>
    </div>
  );
};
