import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const auth = true;
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;