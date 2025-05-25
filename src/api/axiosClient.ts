import axios from 'axios';
import _ from 'lodash';
import { stringify } from 'query-string';
import PreferenceKeys from '../general/constants/PreferenceKeys';

const axiosClient = axios.create({
  baseURL: import.meta.env.QLBH_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => stringify(params),
});

axiosClient.interceptors.request.use((request) => {
  const token = localStorage.getItem(PreferenceKeys.accessToken);
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response.headers['session-token']) {
      axiosClient.defaults.headers.common['session-token'] = response.headers['session-token'];
    }
    if (response?.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    let errMessage = '';
    if (axios.isCancel(error)) return;
    if (axios.isAxiosError(error)) {
      const { data, status, statusText } = error.response ?? {};
      if (status === 403 || status === 401) {
        // Token expired
        // QlbhHelper.signOut();
        location.href = '/sign-in';
        return;
      }
      if (data?.result === 'failed') {
        errMessage = data?.message ?? data?.reason ?? data?.detail ?? statusText;
      } else {
        errMessage = error.message;
      }
    }
    if (!_.isEmpty(errMessage)) {
      // ToastHelper.showError(errMessage);
    }
    return Promise.reject(error);
  }
);
// Update access token
const updateAxiosAccessToken = (accessToken: unknown) => {
  axiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
export {  updateAxiosAccessToken };
export default axiosClient;
