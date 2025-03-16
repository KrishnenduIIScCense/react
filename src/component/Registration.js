import React, { useState } from "react";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert(`Registered Successfully!\nName: ${name}\nEmail: ${email}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border rounded mb-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border rounded mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Create password"
                        className="w-full p-2 border rounded mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full p-2 border rounded mb-4"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={acceptedTerms}
                            onChange={() => setAcceptedTerms(!acceptedTerms)}
                            required
                        />
                        <p className="text-gray-600 text-sm">I accept all terms & conditions</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Register Now
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Already have an account? <a href="#" className="text-blue-600">Login now</a>
                </p>
            </div>
        </div>
    );
}
