import React from "react";
import { useForm } from 'react-hook-form'
// import "./App.css";

type Profile = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

export const Signup = () => {
    const { register, handleSubmit, errors } = useForm<Profile>()

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })

    return (
        <main>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" > User Name </label>
                    <input ref={register({ required: true })} id="name" name="name" type="text" />
                    {
                        errors.name && <div className="error"> Enter your name </div>
                    }
                </div>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input ref={register({ required: true })} id="email" name="email" type="email" />
                    {
                        errors.email && <div className="error"> Enter your email </div>
                    }
                </div>
                <div>
                    <label htmlFor="phoneNo"> Email </label>
                    <input ref={register({ required: true })} id="phoneNo" name="phoneNo" type="number" />
                    {
                        errors.email && <div className="error"> Enter your email </div>
                    }
                </div>

                <div>
                    <label htmlFor="password" > Password </label>
                    <input ref={register({ required: true })} id="password" name="password" type="text" />
                    {
                        errors.password && <div className="error"> Enter your Password</div>
                    }
                </div>

                <div>
                    <label htmlFor="passwordConfirmation" > Password Confirmation </label>
                    <input ref={register({ required: true })} id="passwordConfirmation" name="passwordConfirmation" type="text" />
                    {
                        errors.passwordConfirmation && <div className="error"> Confirm your Password</ div >
                    }
                </div>
                < button type="submit"> Signup </button>
            </form>
        </main>
    );
}

export default Signup;
