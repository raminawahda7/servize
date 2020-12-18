import { STORE_USER, DispatchUserTypes } from '../actionTypes';
import { Dispatch } from "redux";
import axios from "axios";

export const store = (username: string, email: string, password: string) => async (dispatch: Dispatch<DispatchUserTypes>) => {
    // console.log(username, email, password )
    try {
        await axios.post(`http://localhost:8000/auth/users/`, { name: username, password: password, email: email })

            .then((result: any) => {
                console.log("axios",result)
                dispatch({ type: STORE_USER, payload: { username: result.data.name, email: result.data.email } })

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }
    catch(e){
        console.log("action error",e)
    }
}
// export const store = (z:any) => {
//     return {
//         type: actionTypes.STORE_USER,
//         payload: z
//     }
// }
