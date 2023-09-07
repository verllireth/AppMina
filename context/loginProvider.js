import React, { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

export function useLoginContext() {
    return useContext(LoginContext);
}

export const LoginProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const loginUser = (user) => {
        setAuthenticatedUser(user);
    };

    const registerUser = (user) => {
        setUsers(prevUsers => [...prevUsers, user]);
    };

    const logoutUser = () => {
        setAuthenticatedUser(null);
    };

    const contextValue = {
        users,
        authenticatedUser,
        loginUser,
        registerUser,
        logoutUser,
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
};
