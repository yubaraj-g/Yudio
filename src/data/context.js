// create a context (context api)
// create a provider
// useContext hook

import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './reducer';

const AppContext = createContext();


let API = "https://www.boredapi.com/api/activity?";
let data = null;

const initialState = {
    isLoading: true,
    activity: 'Loading...',
    type: 'Loading...',
    key: 'Loading...'
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchApiData = async (url) => {

        dispatch({
            type: "loadingState"
        })

        try {
            const result = await fetch(url);
            data = await result.json();

            console.log(data);

            dispatch({
                type: "getData",
                payload: {
                    isLoading: false,
                    activity: data.activity,
                    type: data.type,
                    key: data.key
                }
            })

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchApiData(API);
    }, []);


    return (

        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>

    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };