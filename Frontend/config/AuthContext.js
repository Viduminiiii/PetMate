// AuthContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (userData) => {
    // Perform login logic
    console.log("----login user:"+ JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic
    setUser();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
