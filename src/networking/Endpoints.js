/**
 * Contains all the API Endpoints
 */
export const BASE_URL = 'https://api.waqi.info';
export const FETCH_AQI_WITH_CITY_NAME = cityName =>
  `${BASE_URL}/feed/${cityName}/`;
export const FETCH_AQI_WITH_LOCATION = (latitude, longitude) =>
  `${BASE_URL}/feed/geo:${latitude};${longitude}/`;
