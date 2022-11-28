const reducer = (state, action) => {

    switch (action.type) {

        case "loadingState":
            return {
                ...state
            }

        case "getData":
            return {
                // ...state,
                isLoading: false,
                activity: action.payload.activity,
                type: action.payload.type,
                key: action.payload.key
            }

        default:
            return { ...state }
    }

    // return state;
}

export default reducer