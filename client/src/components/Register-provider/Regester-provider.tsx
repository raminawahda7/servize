import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form'

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

    return <form
        onSubmit={handleSubmit((FormData) => {
            setSubmitting(true);
            // console.log(FormData, "FormData");

            setSubmitting(false);
        })} >

        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" ref={register({ required: "required" })} />
            {errors.name ? <div>{errors.name.message}</div> : null}
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" ref={register({
                required: "required"
            })} />
            {errors.email ? <div>{errors.email.message}</div> : null}
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" ref={register({
                required: "required",
                minLength: { value: 8, message: "must be 8 chars" }
            })} />
            {errors.password ? <div>{errors.password.message}</div> : null}
        </div>

        <div>
            <label htmlFor="phone">Phone-no</label>
            <input type="number" name="phone" id="phone" ref={register({ required: "required" })} />
            {errors.phone ? <div>{errors.phone.message}</div> : null}
        </div>

        <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" ref={register({ required: "required" })} />
            {errors.city ? <div>{errors.city.message}</div> : null}
        </div>

        <div>
            <label htmlFor="terms">You must agree our terms</label>
            <input type="checkbox" name="terms" id="terms" ref={register({ required: "You must agree our terms" })} />
            {errors.terms ? <div>{errors.terms.message}</div> : null}
        </div>

        <div>
            <button type="submit" disabled={submitting}>Register</button>
        </div>
    </form>;
}

