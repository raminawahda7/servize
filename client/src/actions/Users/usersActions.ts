import * as actionTypes from '../actionTypes';
export const store = (z:any) => {
    return {
        type: actionTypes.STORE_USER,
        payload: z
    }
}
