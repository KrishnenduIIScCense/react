import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTypeDisplay from "../userType/user";

function TypeSelection({ selectedType, setSelectedType }) {
    const userTypes = ["type1", "type2", "type3"];

    return (
        <div className="mb-3">
            <label className="form-label">Choose User Type</label>
            <select
                className="form-control"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
            >
                {userTypes.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <p className="text-center mt-3">
                Selected User Type: <strong>{selectedType}</strong>
            </p>
        </div>
    );
}

async function handleOnClick(email, password, userType, navigate) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
   // formData.append("userType", userType); // Include userType in form submission

    try {
        const response = await axios.post(
            "https://auth.parabole.ai:5010/api/user_management/login",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
        );
        //alert(response.statusText);
        console.log("Response:", response.data);

        if (response.status === 200) {
            navigate(`/usertype/${response.data["customer_name"]}_${response.data["user_type"]}`);
            localStorage.setItem("access_token",response.data["access_token"]);

    }else {
            alert(`Login failed! Server responded with status: ${response.status}`);
        }
    } catch (error) {
        alert("Connection Error");

    }

}

export default function LinkedInLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [selectedType, setSelectedType] = useState("type1");
    const [responseType, setResponseType] = useState(400);
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="bg-white p-4 rounded shadow-sm w-25">
                {/*<h2 className="text-center mb-4">Make the most of your professional life</h2>*/}
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email or phone number</label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email or phone"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
                                style={{ height: "40px" }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="ml-2 border border-gray-300 bg-gray-100 text-gray-600 rounded-md px-3"
                                style={{ height: "40px", lineHeight: "40px", minWidth: "60px" }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Type Selection Component */}
                    {/* <TypeSelection selectedType={selectedType} setSelectedType={setSelectedType} /> */}

                    {/* <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            id="rememberMe"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>*/}

                    {/*  <p className="text-center text-muted small">
                        By clicking <strong>Agree & Join</strong> or Continue, you agree to the Parabole{" "}
                        <a href="#" className="text-primary">User Agreement</a>,{" "}
                        <a href="#" className="text-primary">Privacy Policy</a>, and{" "}
                        <a href="#" className="text-primary">Cookie Policy</a>.
                    </p>*/}
                    <button
                        className="btn btn-primary w-100"
                        onClick={(e) => {
                            e.preventDefault();
                            handleOnClick(email, password, selectedType,navigate); // Pass selectedType
                        }}
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}
