import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
const axios = require('axios');
// const $ = require('jquery');

interface FormData {
    username: string;
    email: string;
    phone: number;
    password: string;
}
const Signup = () => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);

    return (
        <div id="signup" className="center styled">
            <form id="signup-form"
                onSubmit={handleSubmit((formData) => {
                    console.log(formData)
                    let options = {
                        url: `http://localhost:8000/serviceprovider/`,
                        method: 'post',
                        data: {
                            username: formData.username,
                            email: formData.email,
                            phone: formData.phone,
                            password: formData.password,
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
                <h1>Sign Up</h1>
                <br />
                <div className="column">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" className="text" id="username" name="username" ref={register({ required: "required" })} />
                    <div className="username error" ></div>

                    <label htmlFor="email" >Email:</label>
                    <input type="email" className="text" id="email" name="email" ref={register({ required: "required" })} />
                    <div className="email error" ></div>

                    <label htmlFor="phone" >Phone:</label>
                    <input type="text" className="text" id="phone" name="phone" ref={register({ required: "required" })} />
                    <div className="phone error" ></div>

                    <label htmlFor="password" >Password:</label>
                    <input type="password" className="text" id="password" name="password" ref={register({ required: "required" })} />

                    <label htmlFor="confirmPassword" >Confirm Password:</label>
                    <input type="password" className="text" id="confirmPassword" name="confirmPassword" ref={register({ required: "required" })} />
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

export default Signup;



// interface FormSignup {
//     name: string;
//     email: string;
//     password: string;
//     phone: number;
// }

// export default function Signup() {
//     const { register, handleSubmit, errors } = useForm<FormSignup>();
//     const [submitting, setSubmitting] = useState<boolean>(false);
//     const [serverErrors, setServerErrors] = useState<Array<string>>([]);

//     return (
//     < form
//         onSubmit={handleSubmit((FormSignup: any) => {
//             // setSubmitting(true);
//             setServerErrors([]);
//             console.log(FormSignup, "FormSignup");

            // const response = fetch('http://localhost:3000/servize', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         name: FormSignup.name,
            //         email: FormSignup.email,
            //         password: FormSignup.password,
            //         Phone: FormSignup.phone,
            //     }),
            // });

//             // setSubmitting(false);
//         })
//         } >

//         <MDBContainer>
//             <MDBRow>
//                 <MDBCol md="6">

//                     <p className="h5 text-center mb-4">Sign up</p>
//                     <div className="grey-text">

//                             <MDBInput htmlFor="name" label="Your name" icon="user" group type="string" validate error="wrong" success="right" ref={register({ required: "required" })}/>
//                         {errors.name ? <div>{errors.name.message}</div> : null}

//                         <MDBInput htmlFor="email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
//                         {errors.email ? <div>{errors.email.message}</div> : null}

//                         <MDBInput htmlFor="phone" label="Your phone no" icon="phone-alt" group type="number" validate error="wrong" success="right" />
//                         {errors.phone ? <div>{errors.phone.message}</div> : null}


//                         <MDBInput htmlFor="password" label="Your password" icon="lock" group type="password" validate error="wrong" success="right" />
//                         {errors.password ? <div>{errors.password.message}</div> : null}


//                         <MDBInput htmlFor="password" label="Confirm your password" icon="lock" group type="text" validate error="wrong" success="right" />
//                         {errors.password ? <div>{errors.password.message}</div> : null}

//                     </div>
//                     <div className="text-center">
//                         <MDBBtn color="primary" type="submit" disabled={submitting}>Sign up</MDBBtn>
//                     </div>

//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     </form >
//     )
// };
