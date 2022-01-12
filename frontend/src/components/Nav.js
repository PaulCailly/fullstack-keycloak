import { useKeycloak } from "@react-keycloak/web";

function Nav() {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/protected">Protected</a>
        </li>
      </ul>

      {!keycloak.authenticated && (
        <button onClick={() => keycloak.login()}>Login</button>
      )}

      {!!keycloak.authenticated && (
        <button onClick={() => keycloak.logout()}>Logout</button>
      )}
    </div>
  );
}

export default Nav;
