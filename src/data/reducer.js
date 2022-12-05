const reducer = (state, action) => {

    switch (action.type) {

        case "loadingState":
            return {
                ...state
            }

        case "getData":
            return {
                ...state,
                isLoading: false,
                // videoTitle: action.payload.items[0].videoTitle,
                // channelTitle: action.payload.items[0].channelTitle,
                // publishedAt: action.payload.items[0].publishedAt,
                // thumbnail: action.payload.items[0].thumbnail
                items: action.payload.items
            }

        case "searchFunction":
            return {
                ...state,
                query: action.payload
            }
        
        case "GET_VID_ID":
            return {
                ...state,
                vidID: action.payload
            }
        
        case "RAPID_API_DATA":
            return {
                ...state,
                link: action.payload.link,
                duration: action.payload.duration
            }
        
        case "error":
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }

        case "error2":
            return {
                ...state,
                error2: action.payload.error
            }

        default:
            return { ...state }
    }

    // return state;
}

export default reducer