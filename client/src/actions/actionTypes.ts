export const STORE_USER = 'STORE_USER';

export interface User {
    type: typeof STORE_USER,
    payload: Value 
  
}

export type Category={
    catName:string,
    catImage:string,   
}

export type Value = Category | null |string | any[] | boolean

// export type Value = boolean

export type DispatchUserTypes= User;