import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const isLogin = useSelector(isAuth);

  if (isLogin) {
    return <Navigate to="/all-shops" />;
  }
  return <Outlet />;
};

export default PublicRoute;
