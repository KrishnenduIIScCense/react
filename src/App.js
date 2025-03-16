import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParaboleHeader from "./component/ParaboleNavbar";
import LinkedInLogin from "./component/Userinput";
import Signup from "./component/paraboleSignup";
import UserTypeDisplay from "./userType/user";

function App() {
    return (
        <Router> {/* Ensure everything is inside Router */}
            <ParaboleHeader /> {/* Now this is inside Router */}

            <Routes>
                <Route path="/" element={<LinkedInLogin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/usertype/:selectedType" element={<UserTypeDisplay />} />
            </Routes>
        </Router>
    );
}

export default App;
