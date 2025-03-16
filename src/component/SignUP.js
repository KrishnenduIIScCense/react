import React, { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Account Created:\nEmail: ${email}\nUsername: ${username}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign up</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Create an account or <a href="/" className="text-purple-600">Sign in</a>
                </p>

                <form onSubmit={handleSubmit}>
                    <label className="block text-gray-700">Email address</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded mb-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2" />
                        <p className="text-gray-600 text-sm">
                            I do not want to receive marketing emails.
                        </p>
                    </div>

                    <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                        Sign up
                    </button>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">
                    By signing up, you agree to our <a href="#" className="text-purple-600">Terms</a> and <a href="#" className="text-purple-600">Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
}
