import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("netflix_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const signUp = (fname, lname, email, password) => {
    const users = JSON.parse(localStorage.getItem("netflix_users") || "[]");
    const exists = users.find((u) => u.email === email);
    if (exists) {
      throw new Error("User already exists with this email");
    }
    const newUser = { fname, lname, email, password };
    users.push(newUser);
    localStorage.setItem("netflix_users", JSON.stringify(users));
    const session = { fname, lname, email };
    localStorage.setItem("netflix_user", JSON.stringify(session));
    setUser(session);
  };

  const signIn = (email, password) => {
    const users = JSON.parse(localStorage.getItem("netflix_users") || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      throw new Error("Invalid email or password");
    }
    const session = { fname: found.fname, lname: found.lname, email };
    localStorage.setItem("netflix_user", JSON.stringify(session));
    setUser(session);
  };

  const signOut = () => {
    localStorage.removeItem("netflix_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
