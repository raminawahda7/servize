export const STORE_USER = 'STORE_USER';


export interface Userstore {
    type: typeof STORE_USER,
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

export type DispatchUserTypes= Userstore;