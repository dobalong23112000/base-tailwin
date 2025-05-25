import { ReactNode } from 'react';
import { Navigate } from 'react-router';
import UserHelper from '../../helpers/UserHelper';

interface PrivateRouteProps {
  children: ReactNode;
}
// Route danh cho tai khoan chua dang nhap (Guest)
// Neu da dang nhap thi nhay ve man hinh root '/'
function GuestRoute({ children }: PrivateRouteProps) {
  // MARK: --- Params ---
  const isAuth = UserHelper.checkAccessTokenValid() ?? false;

  return !isAuth ? children : <Navigate to="/" />;
}

export default GuestRoute;
