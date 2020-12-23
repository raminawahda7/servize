export const STORE_USER = 'STORE_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_ROLE = 'ADD_ROLE';
export const STORE_DATA = 'STORE_DATA';
export const GET_PROV = 'GET_PROV';

export interface Userstore {
    type: typeof STORE_USER,
    payload: User 
}
export interface Userlogin{
    type: typeof USER_LOGIN,
    payload: User
}

export interface UserRole {
    type: typeof ADD_ROLE,
    payload: string
}

export interface Userdata {
    type: typeof STORE_DATA,
    payload: User

}

export interface Provider {
    type: typeof GET_PROV,
    payload: AllProv,
}

// export type Category={
//     catName:string,
//     catImage:string,   
// }

export type UserIerface = {
    username: string,
    email: string,
    status?: number,
    id?: number
}

export type ProvIerface = {
    city: string,
    providers: object,
}


export type User = UserIerface | null | string

export type AllProv = ProvIerface | null | any[] 

// export type Value = Category | null |string | any[] | boolean

// export type Value = boolean

export type DispatchUserTypes = Userstore | Userdata | UserRole | Userlogin;

export type DispatchProvTypes = Provider ;