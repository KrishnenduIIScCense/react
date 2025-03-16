import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiRefreshCcw } from "react-icons/fi"; // Importing refresh icon
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./paraboleSignup"
import { useNavigate } from "react-router-dom";

export default function logoutButton() {
    const navigate = useNavigate();
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("access_token");
    navigate("/");
    return null;

}