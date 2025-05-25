import axiosClient from "../axiosClient";


const authApi = {
  // dang nhap
  signIn: (params: unknown) => {
    const url = '/account/login';
    return axiosClient.post(url, params);
  },
  // dang xuat
  signOut: (params: unknown) => {
    const url = '/account/logout';
    return axiosClient.post(url, params);
  },
  // lay thong tin user
  getCurrentUserInfo: (params: unknown) => {  
    const url = '/account/current-user';
    return axiosClient.get(url, { params });
  },
};

export default authApi;
