import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export const AuthContext = createContext<Auth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<UserPayload | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/refresh-token", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setIsLogged(true);
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          setUser(data);
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
