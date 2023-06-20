import { Outlet,Navigate } from "react-router-dom";
import Navigation from './Navigation';

const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet/>;
  };

  export default ProtectedRoute;