const initState = {user: {}}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOG_IN":
            return {user: action.payload}
        default:
            return state
    }
}

export default rootReducer