import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiRefreshCcw } from "react-icons/fi"; // Importing refresh icon
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./paraboleSignup"
import { useNavigate } from "react-router-dom";



export default function ParaboleHeader() {
    const navigate = useNavigate();
    const handleRefresh = () => {

        window.location.reload(); // Refresh the page
    };
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("access_token");
        navigate("/"); // Navigate to home
    };

    return (
        <nav className="navbar bg-light py-1 px-4 shadow-sm d-flex justify-content-between">
            {/* Left Side - Logo */}
            <a href="/" className="navbar-brand fw-bold text-primary" style={{ fontSize: "24px" }}>
                Parabole.ai
            </a>

            {/* Right Side - Sign Up Button & Refresh Button */}
            <div className="d-flex align-items-center">
                {/*<button className="btn btn-primary me-2" onClick={() => navigate("/Signup")}>Sign up</button>*/}
                {localStorage.getItem("access_token") ? (
                    <button onClick={handleLogout} className="btn btn-primary me-2">
                        Logout
                    </button>
                ) : (
                    <button className="btn btn-primary me-2" disabled>
                        Logout
                    </button>
                )}

            </div>
        </nav>
    );
}
