import { ISignIn } from "../../types/user.interface";
import axiosClient from "../axiosClient";

const authApi = {
  // dang nhap
  signIn: (params: ISignIn) => {
    const url = '/auth/login';
    return axiosClient.post(url, params);
  },
  // dang xuat
  signOut: (params: unknown) => {
    const url = '/auth/logout';
    return axiosClient.post(url, params);
  },
  // lay thong tin user
  getCurrentUserInfo: (params: unknown) => {  
    const url = '/auth/current-user';
    return axiosClient.get(url, { params });
  },
};

export default authApi;
