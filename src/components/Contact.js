import React, { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    function handleChange(e) {
        if (e.target.id === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.id} is required.`);
            } else {
                setErrorMessage('');
            }
            console.log('errorMessage', errorMessage);
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.id]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <div className="row">
                <h2 className="col-12">Contact</h2>
                <form className="col-12 col-md-6" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="name" className="form-control" id="name" placeholder="name" onBlur={handleChange} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" onBlur={handleChange} />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea type="message" className="form-control" id="message" placeholder="message" onBlur={handleChange} />
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )
}

export default Contact