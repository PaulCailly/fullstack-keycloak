import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { keycloak } = useKeycloak();

  console.log(keycloak);

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
