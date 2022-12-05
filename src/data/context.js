// create a context (context api)
// create a provider
// useContext hook

import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './reducer';

const AppContext = createContext();       // context created


let key = "AIzaSyAGhaiUoCJ2lH2ZagnY1Momqflrt7CLQ0A";
// let query = "codewithharry"

let API = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&videoEmbeddable=any&maxResults=10&order=relevance&part=snippet&q=`;
// let API = `https://api.publicapis.org/`;

let API2 = `https://youtube-mp36.p.rapidapi.com/dl?`;
let key2 = `69f5cb7645msh691471cdb002ff6p122dfcjsne1b8a26b6d54`;

let data = null;
let data2 = null;

const initialState = {
    isLoading: true,
    query: "",
    // query: "entries",
    items: [],
    error: false,
    link: '',
    duration: 0
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

            // console.log(data);

            dispatch({
                type: "getData",
                payload: {
                    isLoading: false,
                    items: data.items
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


    useEffect(() => {
        // fetchApiData(`${API}${state.pin}`);
        fetchApiData(API + state.query);
        // console.log(API + state.query);
    }, []);

    const searchFunc2 = (typed) => {
        fetchApiData(API + typed);
        console.log("typed: " + typed);
    }

    const getVideoID = (vid) => {
        dispatch({
            type: "GET_VID_ID",
            payload: vid
        })
    }

    const callRapidAPI = async (url2) => {
        try {
            const result = await fetch(url2);
            data2 = await result.json();

            // console.log(data2);

            dispatch({
                type: "RAPID_API_DATA",
                payload: {
                    link: data2.link,
                    duration: data2.duration
                }
            })

        } catch (error) {
            console.log("error in rapidAPI: " + error);
            dispatch({
                type: "error2",
                payload: {
                    error: true
                }
            })
        }
    }

    const convertVideo = (vid2) => {

        callRapidAPI(API2 + 'rapidapi-key=' + key2 + '&id=' + vid2);
        // console.log(API2 + 'rapidapi-key=' + key2 + '&id=' + vid2);

    }

    return (

        <AppContext.Provider value={{ ...state, searchFunc, searchFunc2, getVideoID, convertVideo }}>
            {children}
        </AppContext.Provider>

    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };