const fetchWeather = async (apiUrl: string) => {
  const res = await fetch(apiUrl);

  if (!res.ok) {
    // FIXME: вынести в отдельное исключение
    throw new Error('api error');
  }

  return await res.json();
};

export interface Weather {
  current: {
    temperature: {
      feelsLike: number;
      real: number;
    };
    interval: number;
    precipitation: number;
    humidity: number;
    time: string;
    windSpeed: number;
  };
  units: {
    temperature: {
      feelsLike: string;
      real: string;
    };
    interval: string;
    precipitation: string;
    humidity: string;
    time: string;
    windSpeed: string;
  };
  meta: {
    coords: {
      lat: number;
      lon: number;
    };
    elevation: number;
    time: {
      zone: string;
      abbr: string;
    };
    utcOffset: number;
  };
}

export const getWeather = async (apiUrl: string): Promise<Weather> => {
  const raw = await fetchWeather(apiUrl);
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
