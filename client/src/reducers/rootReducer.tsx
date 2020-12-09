// Creates the Redux Store
const initState = {
    user: [
        { name: "adam", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/0/200/300" },
        { name: "eva", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/1015/200/300" }]
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