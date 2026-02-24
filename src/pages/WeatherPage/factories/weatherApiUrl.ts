type CurrentWeatherParam =
  | 'temperature_2m'
  | 'apparent_temperature'
  | 'relative_humidity_2m'
  | 'precipitation'
  | 'wind_speed_10m';
interface WeatherApiParams {
  current?: CurrentWeatherParam[];
  timezone?: string;
}
export const buildWeatherApiUrl = (
  coords: { lat: number; lon: number },
  params: WeatherApiParams = {
    current: [
      'temperature_2m',
      'apparent_temperature',
      'relative_humidity_2m',
      'precipitation',
      'wind_speed_10m',
    ],
    timezone: 'auto',
  },
) => {
  const root = 'https://api.open-meteo.com/v1/forecast';
  const qs = new URLSearchParams({
    latitude: coords.lat.toString(),
    longitude: coords.lon.toString(),
    ...(params.timezone ? { timezone: params.timezone } : {}),
    ...(params.current ? { current: params.current.join(',') } : {}),
  });
  return `${root}?${qs.toString()}`;
};
