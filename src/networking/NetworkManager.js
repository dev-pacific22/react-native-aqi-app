import axios from 'axios';
import {Config} from '../config/config';
import {API_TIME_OUT} from '../utils/Constant';

const configHeader = async (token = '') => {
  // Can get the token from async storage.
  return {
    headers: {
      'Content-Type': 'application/json',
      access_token: token,
    },
    timeout: API_TIME_OUT,
  };
};

const addTokenParam = URL => {
  //TODO: Add token to separate config file with envs, add config to gitignore.
  return `${URL}?token=${Config.API_TOKEN}`;
};
export const getRequestApi = async (
  URL,
  dispatch,
  actionSuccess,
  actionFail,
  actionLoading,
  isLoadingRequired = false,
) => {
  if (isLoadingRequired) {
    dispatch({type: actionLoading});
  }
  let headers = await configHeader();

  const requestPromise = new Promise(async (resolve, reject) => {
    axios
      .get(addTokenParam(URL), headers)
      .then(response => {
        dispatch({type: actionSuccess, payload: response.data});
        resolve(response);
      })
      .catch(error => {
        dispatch({type: actionFail, payload: error.message});
        reject(error);
      });
  });
  return requestPromise;
};
