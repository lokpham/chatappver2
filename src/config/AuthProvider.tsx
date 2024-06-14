import React, { ReactNode, createContext, useState } from "react";

type User = {
  id: string;
  name: string;
  avatar: string;
};
export type contextType = {
  user: User | null;
  login: () => void;
};
export const Context = createContext<contextType | null>(null);
type pros = {
  children: ReactNode;
};
const AuthProvider = ({ children }: pros) => {
  const [user, setUser] = useState<User | null>(null);
  const login = () => {
    console.log("aaa");
  };
  return (
    <Context.Provider value={{ user, login }}>{children}</Context.Provider>
  );
};

export default AuthProvider;
