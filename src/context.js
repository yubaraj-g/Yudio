// create a context (context api)
// create a provider
// useContext hook

import React, { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return (

        <AppContext.Provider value={" --dummy data-- "}>
            {children}
        </AppContext.Provider>

    )
}

const useGlobalContext = ()=> {
    return useContext(AppContext);
} 

export { AppContext, AppProvider, useGlobalContext };