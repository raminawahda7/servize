import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import axios from "axios"

interface FormSignup {
    name: string;
    email: string;
    password: string;
    phone: number;
}

export default function Signup() {
    const { register, handleSubmit, errors } = useForm<FormSignup>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    return < form
        onSubmit={handleSubmit((FormSignup) => {
            setSubmitting(true);
            setServerErrors([]);
            // console.log(FormSignup, "FormSignup");

            const response = fetch('http://localhost:3000/servize', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: FormSignup.name,
                    email: FormSignup.email,
                    password: FormSignup.password,
                    Phone: FormSignup.phone,
                }),
            });

            setSubmitting(false);
        })
        } >

        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">

                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">

                        <MDBInput htmlFor="name" label="Your name" icon="user" group type="string" validate error="wrong" success="right" />
                        {errors.name ? <div>{errors.name.message}</div> : null}

                        <MDBInput htmlFor="email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                        {errors.email ? <div>{errors.email.message}</div> : null}

                        <MDBInput htmlFor="phone" label="Your phone no" icon="phone-alt" group type="number" validate error="wrong" success="right" />
                        {errors.phone ? <div>{errors.phone.message}</div> : null}


                        <MDBInput htmlFor="password" label="Your password" icon="lock" group type="password" validate error="wrong" success="right" />
                        {errors.password ? <div>{errors.password.message}</div> : null}


                        <MDBInput htmlFor="password" label="Confirm your password" icon="lock" group type="text" validate error="wrong" success="right" />
                        {errors.password ? <div>{errors.password.message}</div> : null}

                    </div>
                    <div className="text-center">
                        <MDBBtn color="primary" type="submit" disabled={submitting}>Sign up</MDBBtn>
                    </div>

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </form >
};
