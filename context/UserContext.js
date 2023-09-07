import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(""); // Inicializa con una cadena vacía

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
