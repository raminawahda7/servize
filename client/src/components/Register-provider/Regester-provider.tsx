import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

interface FormData {
    name: string;
    email: string;
    password: string;
    city: string;
    phone: number;
    terms: boolean;
}

export default function Provider() {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    return <form
        onSubmit={handleSubmit((FormData) => {
            setSubmitting(true);
            setServerErrors([]);
            // console.log(FormData, "FormData");

            const response = fetch('http://localhost:3000/servize', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: FormData.name,
                    email: FormData.email,
                    password: FormData.password,
                    Phone: FormData.phone,
                    city: FormData.city,
                    terms: FormData.terms,
                }),
            });
            // const data = await response.json();
            // console.log(data, "server data");

            setSubmitting(false);
        })} >
        <p className="h5 text-center mb-4">Register Providers</p>
        <div className="grey-text"></div>

        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">

                    <div>
                        <label htmlFor="name">Name</label>
                        <MDBInput name="name" id="name" group type="text" validate />
                        {errors.name ? <div>{errors.name.message}</div> : null}
                    </div>

                    <div>
                        <label htmlFor="email" >Email</label>
                        <MDBInput name="email" id="email" group type="email" validate />
                        {errors.email ? <div>{errors.email.message}</div> : null}
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <MDBInput name="password" id="password" group type="password" validate />
                        {errors.password ? <div>{errors.password.message}</div> : null}
                    </div>

                    <div>
                        <label htmlFor="phone">Phone-no</label>
                        <MDBInput name="phone" id="phone" group type="phone" validate />
                        {errors.phone ? <div>{errors.phone.message}</div> : null}
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <MDBInput name="city" id="city" group type="text" validate />
                        {errors.city ? <div>{errors.city.message}</div> : null}
                    </div>

                    <div>
                        <label htmlFor="terms">You must agree our terms</label>
                        <MDBInput group type="checkbox" name="terms" id="terms" validate />
                        {errors.terms ? <div>{errors.terms.message}</div> : null}
                    </div>
                    <br></br>
                    <br></br>

                    <div className="text-center">
                        <MDBBtn type="submit" disabled={submitting}>Register</MDBBtn>
                    </div>

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </form>;
}

