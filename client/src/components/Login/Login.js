

import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
const axios = require('axios');

interface formData {
    email: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit, errors } = useForm<formData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form
                        onSubmit={handleSubmit((formData) => {
                            console.log(email, "email");
                            let options = {
                                url: `http://localhost:8000/serviceprovider/`,
                                method: 'post',
                                data: {
                                    email: email,
                                    password: password,                               
                                }
                            }

                            axios(options)
                                .then((results: any) => {
                                    console.log("axios", results);

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

