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
    const [password, setPassword] = useState(''); // hooks 
    // create state for email and password 
    // use setemail
    // use email not formData
    const [access, setAccess] = useState("");
    const [refresh, setRefresh] = useState("");
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form
                        onSubmit={handleSubmit((formData) => {
                            console.log(formData);

                            axios.post(`http://localhost:8000/auth/jwt/create`,
                                {
                                    email: email,
                                    password: password,
                                })

                                .then((result: any) => {
                                    console.log(result)
                                    setAccess(result.data.access);
                                    setRefresh(result.data.refresh);
                                    // window.location.href="/"

                                })
                                .catch((err: any) => {
                                    console.error("err===== =>", err);
                                })

                            
                            console.log('hay heeeeeeeeeee:',access);

                           
                            async function getData() {
                                try {
                                   let res = await axios({
                                        url: 'http://localhost:8000/auth/users/me/',
                                        method: 'get',
                                        timeout: 8000,
                                        headers: {
                                            'Authorization': 'JWT '+ access,
                                            'Content-Type': 'application/json',
                                        }
                                    })
                                    if(res.status == 200){
                                        // test for status you want, etc
                                        console.log(res.status)
                                        localStorage.setItem("access_token", access);
                                        localStorage.setItem("refresh_token", refresh);
                                    }    
                                    // Don't forget to return something
                                   
                                    return res.data
                                }
                                catch (err) {
                                    console.error(err);
                                }
                            }
                            
                            getData()
                            .then(res => console.log(res))
                            

                        })}
                    >
                        <p className="h5 text-center mb-4">Log in</p>
                        <div className="grey-text">
                            <MDBInput placeholder="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" value={email} onChange={(e: any) => { setEmail(e.target.value)}} />
                            <MDBInput placeholder="Type your password" icon="lock" group type="password" validate error="wrong" success="right" value={password} onChange={(e: any) => setPassword(e.target.value)} />
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