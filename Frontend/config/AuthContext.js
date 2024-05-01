// AuthContext.js

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userID, setUserID] = useState();
  const [userType, setUserType] = useState();

  const login = (userData) => {
    // Perform login logic
    console.log("----login user:" + userData);

    const parsedData = JSON.parse(userData);
    // const userId = parsedData.userLevel;
    // console.log("userLevel:  "+userId);
    setUser(userData);
    setUserID(parsedData.userID);
    setUserType(parsedData.userLevel);
  };

  const logout = () => {
    // Perform logout logic
    setUser('');
    setUserID('');
    setUserType('');
  };

  return (
    <AuthContext.Provider value={{ user, userID, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);