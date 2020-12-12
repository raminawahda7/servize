import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated)
        return <Redirect to='/' />;
    
    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <p className='mt-3'>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className='mt-3'>
            Forgot your Password? <Link to='/reset_password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);








// import React, { useState } from 'react';
// import { appendErrors, useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// const axios = require('axios');

// interface formData {
//     email: string;
//     password: string;
// }

// export default function Login() {
//     const { register, handleSubmit, errors } = useForm<formData>();
//     const [submitting, setSubmitting] = useState<boolean>(false);
//     const [serverErrors, setServerErrors] = useState<Array<string>>([]);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
    

//     return (
//         <MDBContainer>
//             <MDBRow>
//                 <MDBCol md="6">
//                     <form
//                         onSubmit={handleSubmit((formData) => {
//                             console.log(email, "email");
//                             let options = {
//                                 url: `http://localhost:8000/serviceprovider/`,
//                                 method: 'post',
//                                 data: {
//                                     email: email,
//                                     password: password,                               
//                                 }
//                             }

//                             axios(options)
//                                 .then((results: any) => {
//                                     console.log("axios", results);

//                                 })
//                                 .catch((err: any) => {
//                                     console.error("err===== =>", err);
//                                 })
//                         })}
//                     >
//                         <p className="h5 text-center mb-4">Log in</p>
//                         <div className="grey-text">
//                             <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" value={email} onChange={(e: any) => setEmail(e.target.value)} />
//                             <MDBInput label="Type your password" icon="lock" group type="password" validate error="wrong" success="right" value={password} onChange={(e: any) => setPassword(e.target.value)} />
//                         </div>
//                         <div className="text-center">
//                             <MDBBtn type="submit" disabled={submitting}>Log in</MDBBtn>
//                         </div>
//                     </form>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     )
// }

