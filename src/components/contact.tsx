"use client";

import { FormEvent } from "react";
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);

export default function Contact() {
    const sendMail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        // Use EmailJS to send form data
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            form
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // You could show a success message to the user here
        })
        .catch((error) => {
            console.error('FAILED...', error);
            // Show an error message to the user if needed
        });

        form.reset();
    };

    return (
        <form className="d-flex flex-column col-xl-4 offset-xl-4 px-5" onSubmit={sendMail}>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="firstname" className="form-label text-light">Your first name</label>
                    <input type="text" className="form-control" id="firstname" name="firstname" placeholder="John" aria-label="First name"/>
                </div>
                <div className="col">
                    <label htmlFor="lastname" className="form-label text-light">Your last name</label>
                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Doe" aria-label="Last name"/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Your mail address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="johndoe@example.com"/>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="form-label text-light">Your message</label>
                <textarea className="form-control" id="message" name="message" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-danger mt-2">Contact us</button>
        </form>
    );
}