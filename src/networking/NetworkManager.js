import axios from 'axios';
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
  return `${URL}?token=0a61ddb7c37a489429cf59499d92aa983b2f8cc2`;
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
  return axios
    .get(addTokenParam(URL), headers)
    .then(response => {
      dispatch({type: actionSuccess, payload: response});
    })
    .catch(error => {
      dispatch({type: actionFail, payload: error.message});
    });
};
