import * as actionTypes from '../actionTypes';
export const store = (z:[]) => {
    return {
        type: actionTypes.STORE_USER,
        payload: z
    }
}
