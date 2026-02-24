import { buildWeatherApiUrl } from '../pages/WeatherPage/factories/weatherApiUrl';
import type { Weather } from '../types';

const fetchWeather = async (coords: { lat: number; lon: number }) => {
  const res = await fetch(buildWeatherApiUrl(coords));

  if (!res.ok) {
    // FIXME: вынести в отдельное исключение
    throw new Error('api error');
  }

  return await res.json();
};

export const getWeather = async (coords: { lat: number; lon: number }): Promise<Weather> => {
  const raw = await fetchWeather(coords);
  return {
    current: {
      temperature: {
        feelsLike: raw.current.apparent_temperature,
        real: raw.current.temperature_2m,
      },
      interval: raw.current.interval,
      precipitation: raw.current.precipitation, // осадки
      humidity: raw.current.relative_humidity_2m,
      time: raw.current.time,
      windSpeed: raw.current.wind_speed_10m,
    },
    units: {
      temperature: {
        feelsLike: raw.current_units.apparent_temperature,
        real: raw.current_units.temperature_2m,
      },
      interval: raw.current_units.interval,
      precipitation: raw.current_units.precipitation, // осадки
      humidity: raw.current_units.relative_humidity_2m,
      time: raw.current_units.time,
      windSpeed: raw.current_units.wind_speed_10m,
    },
    meta: {
      elevation: raw.elevation, // высота над уровнем моря
      coords: {
        lat: raw.latitude,
        lon: raw.longitude,
      },
      time: {
        zone: raw.timezone,
        abbr: raw.timezone_abbreviation,
      },
      utcOffset: raw.utc_offset_seconds,
    },
  };
};
