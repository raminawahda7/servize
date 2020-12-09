import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

interface FormLogin {
    email: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit, errors } = useForm<FormLogin>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    return < form
        onSubmit={handleSubmit((FormLogin) => {
            setSubmitting(true);
            setServerErrors([]);
            // console.log(FormLogin, "FormLogin");

            const response = fetch('http://localhost:3000/servize', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: FormLogin.email,
                    password: FormLogin.password,
                }),
            });

            setSubmitting(false);
        })} >

        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Log in</p>
                        <div className="grey-text">
                            <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                            <MDBInput label="Type your password" icon="lock" group type="password" validate error="wrong" success="right" />
                        </div>
                        <div className="text-center">
                            <MDBBtn type="submit" disabled={submitting}>Log in</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </ form>
}