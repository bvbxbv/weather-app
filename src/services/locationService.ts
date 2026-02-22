import { buildLocationsApiUrl } from '../pages/WeatherPage/factories/locationsApiUrl';
import type { Location } from '../types';

interface RawLocation {
  admin1: string;
  admin1_id: string;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  timezone: string;
}

const fetchLocations = async (query: string) => {
  const res = await fetch(buildLocationsApiUrl(query));

  if (!res.ok) {
    // FIXME: вынести в отдельное исключение
    throw new Error('api error');
  }

  return await res.json();
};

export const getLocation = async (query: string): Promise<Location[]> => {
  const raw = await fetchLocations(query);
  const rawLocations: RawLocation[] = raw.results ?? [];
  const locations: Location[] = rawLocations.map((i) => ({
    country: {
      name: i.country,
      code: i.country_code,
      id: i.country_id,
    },
    city: {
      name: i.name,
      id: i.id,
    },
    meta: {
      timezone: i.timezone,
      coords: {
        lat: i.latitude,
        lon: i.longitude,
      },
    },
  }));

  return locations;
};
