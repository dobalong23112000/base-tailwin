import { Navigate } from "react-router";
import { ReactNode } from 'react';
import UserHelper from '../../helpers/UserHelper';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = UserHelper.checkAccessTokenValid() ?? false;
// Nếu chưa xác thực, chuyển hướng sang trang đăng nhập
  if (!isAuth) {
    return <Navigate to="/sign-in" replace />;
  }

  // Nếu đã xác thực, hiển thị children
  return children;
};

export default PrivateRoute;
