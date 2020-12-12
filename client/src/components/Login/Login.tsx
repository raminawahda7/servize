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
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form
                        onSubmit={handleSubmit((formData) => {
                            console.log(email, "email");
                            // let options = {
                            //     url: `http://localhost:8000/serviceprovider/`,
                            //     method: 'post',
                            //     data: {
                            //         email: email,
                            //         password: password,                               
                            //     }
                            // }

                            // axios(options)
                            //     .then((results: any) => {
                            //         console.log("axios", results);

                            //     })
                            //     .catch((err: any) => {
                            //         console.error("err===== =>", err);
                            //     })
                            axios.post(`http://localhost:8000/auth/users/`, {
                                email: formData.email,
                                password: formData.password,
                            })

                                .then((result: any) => {
                                    console.log(result)

                                })
                                .catch((err: any) => {
                                    console.error("err===== =>", err);
                                })


                        })}
                    >
                        <p className="h5 text-center mb-4">Log in</p>
                        <div className="grey-text">
                            <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                            <MDBInput label="Type your password" icon="lock" group type="password" validate error="wrong" success="right" value={password} onChange={(e: any) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-center">
                            <MDBBtn type="submit" disabled={submitting}>Log in</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

