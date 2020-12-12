
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

const ResetPassword = (props) => {
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        props.reset_password(email);
        setRequestSent(true);
    };

    if (requestSent)
        return <Redirect to='/' />
    return (
        <div className='container mt-5'>
            <h1>Request Password Reset:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type='email'
                        placeholder='Your Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);







// // import { showSign } from '../actions/actions.js';
// // import './NewPassword.css';
// import { Link, Redirect } from 'react-router-dom';
// // import React, { Component } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
// import React from 'react';
// const axios = require('axios');
// const $ = require('jquery');


// const ResetPassword = () => {
//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         // console.log("hi");
//         let input = $('#reset-form').serializeArray();
//         console.log(input);

//         let options = {
//             url: `http://localhost:3000/user/reset/:token`,
//             method: 'post',
//             // data: { email: input[0].value }
//         }

//         axios(options)
//             .then((results: any) => {
//                 console.log(results);

//             })
//             .catch((err: any) => {
//                 console.error("err===== =>", err);
//             })
//     }   

//     return (
//         <MDBContainer>
//             <MDBRow>
//                 <MDBCol md="6">
//                     <form className="reset-form" id="reset-form" onSubmit={handleSubmit}>
//                         <p className="h4 text-center mb-4">Reset Password</p>
//                         <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
//                             New Password
//                         </label>
//                         <input type="password" id="defaultFormLoginEmailEx" className="form-control" />
//                         <br />
//                         <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
//                             Confirm Password
//                         </label>
//                         <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
//                         <div className="text-center mt-4">
//                             <MDBBtn color="indigo" type="submit">Update</MDBBtn>
//                         </div>
//                     </form>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// };

// export default ResetPassword;
