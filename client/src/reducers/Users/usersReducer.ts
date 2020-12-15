import { STORE_USER, DispatchUserTypes } from '../../actions/actionTypes';
// import {store} from '../../actions/Users/usersActions';

export interface State {
    user: any[] | any,
    // prov: {name:string, description:string, img: string}
}
export const initState: State = { user: [] }
// const initState = {
//     user: null,

//     prov: [
//         { name: "tech", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/0/200/300" },
//         { name: "plumb", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://picsum.photos/id/1015/200/300" }
//     ]
// }   
// type A = ReturnType<typeof store>; 
const usersReducer = (state: State = initState, action: DispatchUserTypes): State => {
    switch (action.type) {
        case STORE_USER:
            return { ...state, user: action.payload }
        default:
            return state
    }

    // console.log("action", action);
    // console.log("userstore", state);
    // if (actionTypes.STORE_USER === 'STORE_USER') {
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
    // return {
    //     ...state,
    //     user: action.payload,
    // image: action.payload.catImage
    // user: [...state.user, action.user]
    //     }
    // }
    // return state;
}

export default usersReducer;