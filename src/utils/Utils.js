import moment from 'moment';
import 'moment-timezone';
import {Colors} from './Colors';

const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone;
export const getFormattedDateTimeWithTZ = date => {
  return moment(date).tz(timeZoneString).format('ddd, MMM DD YYYY, h:mm A zz');
};

export const getHealthStatusFromAQI = indexValue => {
  switch (true) {
    case indexValue <= 50:
      return {
        status: 'Good',
        color: Colors.success,
      };
    case indexValue >= 51 && indexValue <= 100:
      return {
        status: 'Satisfactory',
        color: Colors.success,
      };
    case indexValue >= 101 && indexValue <= 200:
      return {
        status: 'Moderate',
        color: Colors.info,
      };
    case indexValue >= 201 && indexValue <= 300:
      return {
        status: 'Poor',
        color: Colors.warning,
      };
    case indexValue >= 301 && indexValue <= 400:
      return {
        status: 'Very Poor',
        color: Colors.error,
      };
    case indexValue >= 401 && indexValue <= 600:
      return {
        status: 'Severe',
        color: Colors.error,
      };
  }
};
