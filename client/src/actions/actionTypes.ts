export const STORE_USER = 'STORE_USER';
export const STORE_DATA = 'STORE_DATA';
export const GET_PROV = 'GET_PROV';

export interface Userstore {
    type: typeof STORE_USER,
    payload: User 
  
}
export interface Userdata {
    type: typeof STORE_DATA,
    payload: User

}

// export type Category={
//     catName:string,
//     catImage:string,   
// }

export type UserIerface = {
    username: string,
    email: string,
}

export type User = UserIerface | null | string

// export type Value = Category | null |string | any[] | boolean

// export type Value = boolean

export type DispatchUserTypes = Userstore | Userdata;