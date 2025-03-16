import React, { useState } from "react";
import  "./paraboleSignup.css";

export default function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        repeatPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert(`Account Created! \nEmail: ${formData.email}`);
    };

    return (
        <div className="signup-page">
        <div className="signup-container">
            <h2>Sign up now</h2>
            <p>Create a free account</p>





            <form onSubmit={handleSubmit}>
                <label>Email address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label>Repeat password</label>
                <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repeat password"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="signup-btn">Sign up</button>
            </form>

            <p className="signin-text">
                Already have an account? <a href="/">Sign in</a>
            </p>
        </div>
            </div>
    );
}
