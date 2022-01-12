import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

import Home from "./pages/Home";
import Protected from "./pages/Protected";

import Nav from "./components/Nav";

import ProtectedRoute from "./helpers/ProtectedRoute";

function App() {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <div>loading...</div>;
  }

  return (
    <div>
      hello world
      <div>
        <Nav />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/protected"
              element={
                <ProtectedRoute>
                  <Protected />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
