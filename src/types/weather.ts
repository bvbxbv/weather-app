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
