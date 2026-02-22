export interface Location {
  country: {
    name: string;
    code: string;
    id: number;
  };
  city: {
    name: string;
    id: number;
  };
  meta: {
    timezone: string;
    coords: {
      lat: number;
      lon: number;
    };
  };
}
