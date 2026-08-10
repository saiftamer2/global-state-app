import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("globalStateUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function login() {
    const demoUser = {
      name: "Saif Tamer",
      email: "saif@example.com"
    };

    localStorage.setItem(
      "globalStateUser",
      JSON.stringify(demoUser)
    );

    setUser(demoUser);
  }

  function logout() {
    localStorage.removeItem("globalStateUser");
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: user !== null,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}