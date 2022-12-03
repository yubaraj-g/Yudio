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

        default:
            return { ...state }
    }

    // return state;
}

export default reducer