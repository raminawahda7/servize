import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
const axios = require('axios');

interface FormData {
    name: string;
    email: string;
    password: string;
    re_password: string;
    city: string;
    phone: number;
}

const ProviderSignup = () => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    return (
        <div id="signup" className="center styled">
            <form id="signup-form"
                onSubmit={handleSubmit((formData) => {
                    console.log(formData)
                    let options = {
                        url: `http://localhost:8000/auth/users/`,
                        method: 'post',
                        data: {
                            name: formData.name,
                            email: formData.email,
                            password: formData.password,
                            re_password: formData.re_password,
                            Phone: formData.phone,
                            city: formData.city,
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
                <h1>Provider Sign Up</h1>
                <br />
                <div className="column">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="text" id="name" name="name" ref={register({ required: "required" })} />
                    <div className="name error" ></div>

                    <label htmlFor="email" >Email:</label>
                    <input type="email" className="text" id="email" name="email" ref={register({ required: "required" })} />
                    <div className="email error" ></div>

                    <label htmlFor="phone" >Phone:</label>
                    <input type="text" className="text" id="phone" name="phone" ref={register({ required: "required" })} />
                    <div className="phone error" ></div>

                    <label htmlFor="city" >City:</label>
                    <input type="text" className="text" id="city" name="city" ref={register({ required: "required" })} />
                    <div className="city error" ></div>

                    <label htmlFor="password" >Password:</label>
                    <input type="password" className="text" id="password" name="password" ref={register({ required: "required" })} />

                    <label htmlFor="re_password" >Confirm Password:</label>
                    <input type="password" className="text" id="re_password" name="re_password" ref={register({ required: "required" })} />
                    <div className="password error" ></div>
                </div>
                <br />
                <button className="button" >Sign Up</button><br />
            </form>
            <div className="password-req" >8 characters or longer. Combine upper and lowercase letters and numbers</div><br />
            <p >Already have an account? <Link to="/signin" style={{ textDecoration: "none" }}>Sign In</Link></p>
        </div>
    );
}

export default ProviderSignup;



// export default function Provider() {
//     const { register, handleSubmit, errors } = useForm<FormData>();
//     const [submitting, setSubmitting] = useState<boolean>(false);
//     const [serverErrors, setServerErrors] = useState<Array<string>>([]);
//     const [title, setTitle] = useState('');
//     console.log("title", title)

//     return <form 
//         onSubmit={handleSubmit((FormData) => {
//             setSubmitting(true);
//             setServerErrors([]);

//             // console.log(FormData, "FormData");

//             // const response = fetch('http://localhost:3000/servize', {
//             //     method: "POST",
//             //     headers: {
//             //         "Content-Type": "application/json",
//             //     },
//             //     body: JSON.stringify({
//             //         name: FormData.name,
//             //         email: FormData.email,
//             //         password: FormData.password,
//             //         Phone: FormData.phone,
//             //         city: FormData.city,
//             //         terms: FormData.terms,
//             //     }),
//             // });
//             // const data = await response.json();
//             // console.log(data, "server data");

//             // setSubmitting(false);
//         })} 
//         >
//         <p className="h5 text-center mb-4">Register Providers</p>
//         <div className="grey-text"></div>

//         <MDBContainer>
//             <MDBRow>
//                 <MDBCol md="6">

//                     <div>
//                         <label htmlFor="name">Name</label>
//                         <MDBInput name="name" id="name" group type="text" validate onChange={(e: any) => setTitle(e.target.value)} />
//                         {errors.name ? <div>{errors.name.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="email" >Email</label>
//                         <MDBInput name="email" id="email" group type="email" validate />
//                         {errors.email ? <div>{errors.email.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="password">Password</label>
//                         <MDBInput name="password" id="password" group type="password" validate />
//                         {errors.password ? <div>{errors.password.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="phone">Phone-no</label>
//                         <MDBInput name="phone" id="phone" group type="phone" validate />
//                         {errors.phone ? <div>{errors.phone.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="city">City</label>
//                         <MDBInput name="city" id="city" group type="text" validate />
//                         {errors.city ? <div>{errors.city.message}</div> : null}
//                     </div>

//                     <div>
//                         <label htmlFor="terms">You must agree our terms</label>
//                         <MDBInput group type="checkbox" name="terms" id="terms" validate />
//                         {errors.terms ? <div>{errors.terms.message}</div> : null}
//                     </div>
//                     <br></br>
//                     <br></br>

//                     <div className="text-center">
//                         <MDBBtn type="submit" disabled={submitting}>Register</MDBBtn>
//                     </div>

//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     </form>;
// }

