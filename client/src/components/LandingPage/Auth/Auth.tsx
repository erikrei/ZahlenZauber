import { NavLink, Outlet } from "react-router";

import "./Auth.css";

export default function Auth() {
  return (
      <div className="auth-container">
        <header>
          <h1>Authentifizierung</h1>
          <nav>
            <NavLink to="login" className="login">
              Login
            </NavLink>
            <NavLink to="register" className="register">
              Registrieren
            </NavLink>
          </nav>
        </header>
        <main className="auth-content">
          <Outlet />
        </main>
      </div>
  );
}
