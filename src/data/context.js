// create a context (context api)
// create a provider
// useContext hook

import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './reducer';

const AppContext = createContext();       // context created


// let key = "AIzaSyAGhaiUoCJ2lH2ZagnY1Momqflrt7CLQ0A";
// let query = "codewithharry"

// let API = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&videoEmbeddable=any&maxResults=10&order=relevance&part=snippet&q=`;
let API = `https://api.publicapis.org/`;

let data = null;

const initialState = {
    isLoading: true,
    // query: "",
    query: "entries",
    items: [],
    error: false
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
                    items: data.entries
                }
            })

        } catch (error) {
            console.log(error);
            dispatch({
                type: "error",
                payload: {
                    isLoading: false,
                    error: true
                }
            })
        }
    }

    const searchFunc = (typed) => {
        dispatch({
            type: "searchFunction",
            payload: typed
        })
        // fetchApiData(API + state.query);
    }

    // const fetchMusic = () => {

    // }


    useEffect(() => {
        // fetchApiData(`${API}${state.pin}`);
        fetchApiData(API + state.query);
        console.log(API + state.query);
    }, []);

    const searchFunc2 = (typed) => {
        fetchApiData(API + typed);
        console.log("typed: " + typed);
    }

    return (

        <AppContext.Provider value={{ ...state, searchFunc, searchFunc2 }}>
            {children}
        </AppContext.Provider>

    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };