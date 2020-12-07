// Creates the Redux Store
const initState = {
    user: null
}

// Edits the Redux variables
const rootReducer = (state = initState, action:any) => {
    // console.log("action", action)
    if (action.type === "STORE-USER") {
        try {
            const serializedState = JSON.stringify({
                ...state,
                user: action.user
            });
            localStorage.setItem("state", serializedState)
        }
        catch (e) {
            console.log(e)
        }
        return {
            ...state,
            user: action.user
        }
    }
    return state;
}

export default rootReducer;