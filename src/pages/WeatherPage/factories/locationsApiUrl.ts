export const buildLocationsApiUrl = (
  query: string,
  params: Record<string, number | string> = {
    count: 5,
    language: 'auto',
    format: 'json',
  },
) => {
  const root = 'https://geocoding-api.open-meteo.com/v1/search';
  const qs = new URLSearchParams({
    ...params,
    name: query,
  });
  return root + '?' + qs.toString();
};
