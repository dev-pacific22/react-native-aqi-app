/**
 * Contains all the API Endpoints
 */
export const BASE_URL = 'https://api.waqi.info';
export const FETCH_AQI_WITH_LOCATION = cityName =>
  `${BASE_URL}/feed/${cityName}/`;
