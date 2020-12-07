import { store } from '../../actions/actions';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import './ForgotPassword.css';
// const axios = require('axios');
const $ = require('jquery');

// Sends a request to change password for a user that forgot the password
// Using email verification

const handleSubmit = (e:any) => {
    e.preventDefault();
    // console.log("hi");
    let input = $('#reset-form').serializeArray();
    console.log(input); 
}   

const ForgotPassword = ()=>{ 
    const dispatch = useDispatch();
    // dispatch(store($('#reset-form').serializeArray()
    const userInStore = useSelector((state: any) => state.user);
    return (
        <div id="reset">
            <button ><Link to="/">Return To Home Page</Link> </button>
            <form className="reset-form" id="reset-form" onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <br />
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="text" id="email" name="email" />
                </div>
                <br />
                <button className="button" >Reset Password</button><br />

                <p>Back to <Link to="/signin" >Sign In</Link></p>
            </form>
        </div>
    )
};

// const mapStateToProps = () => {
//     try {
//         const serializedState = localStorage.getItem("state");
//         if (serializedState === null) {
//             return undefined
//         }
//         return { user: JSON.parse(serializedState) }
//     }
//     catch (e) {
//         console.log(e);
//         return;
//     }
// }

// const mapDispatchToProps = (dispatch:Function) => {
//     return {
//         storeUser: (z:string) => { dispatch(store(z)) },
//     }
// }

export default ForgotPassword;
