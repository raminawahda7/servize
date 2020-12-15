import { STORE_USER, DispatchUserTypes } from '../actionTypes';
import {Dispatch} from "redux"

export const store = (z: any[]|any) => async(dispatch: Dispatch<DispatchUserTypes>) =>{
    dispatch({ type: STORE_USER, payload: z })
}
// export const store = (z:any) => {
//     return {
//         type: actionTypes.STORE_USER,
//         payload: z
//     }
// }
