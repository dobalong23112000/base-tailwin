export interface ISignIn {
  username: string,
  password: string
}
export interface ISignInResponse {
  result: 'success' | 'failed';
  user?: {
    username?: string;
  };
  token?: string;
  message?: string;
}