import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // seconds

      // if token expired
      if (decoded.exp && decoded.exp < currentTime) {
        localStorage.removeItem("token");
        setUser(null);
      } else {
        setUser(decoded); // store decoded payload as user
      }
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
