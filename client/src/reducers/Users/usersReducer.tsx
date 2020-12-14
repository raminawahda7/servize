import * as actionTypes from '../../actions/actionTypes';
import {store} from '../../actions/Users/usersActions';
export interface State {
    user: [],
    // prov: {name:string, description:string, img: string}
}


let initState : {
    user: State

}

// const initState = {
//     user: null,

//     prov: [
//         { name: "tech", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/0/200/300" },
//         { name: "plumb", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/1015/200/300" }
//     ]
    
// }
type A = ReturnType<typeof store>; 
const userReducer = (state:{} = initState, action:A) => {
    // console.log("action", action);
    console.log("action", action);
    
    // console.log("userstore", state);
    if (actionTypes.STORE_USER === 'STORE_USER') {
        // try {
        //     const serializedState = JSON.stringify({
        //         ...state,
        //         user: action.payload
        //         // user: [ ...state.user, action.user]
        //     });
        //     localStorage.setItem("state", serializedState)
        // }
        // catch (e) {
        //     console.log(e)
        // }
        return {
            ...state,
            user: action.payload,
            // image: action.payload.catImage
            // user: [...state.user, action.user]
        }
    }
    return state;
}

export default userReducer;