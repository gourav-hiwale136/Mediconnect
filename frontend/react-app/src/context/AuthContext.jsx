import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login (you can replace with real API later)
  const login = (email, password) => {
    if (email && password) {
      let role = "patient";

      // Simple role logic (you can customize or fetch from backend)
      if (email.includes("admin")) role = "admin";
      else if (email.includes("doctor")) role = "doctor";

      setUser({ email, role });
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    let role = "patient";
    setUser({ email, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
