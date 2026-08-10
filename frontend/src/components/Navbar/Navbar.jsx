import { useAuth } from "../../context/AuthContext";

import "./Navbar.css";

function Navbar() {
  const {
    user,
    isAuthenticated,
    login,
    logout
  } = useAuth();

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        Task Manager
      </div>

      <div className="navbar-right">

        {isAuthenticated ? (
          <>
            <span className="welcome">
              Welcome, {user.name}
            </span>

            <button
              className="logout-button"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="login-button"
            onClick={login}
          >
            Demo Login
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;