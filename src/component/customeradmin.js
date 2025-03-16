import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function CustomeradminTypeDisplay({usertype}) {
    //const [data, setData] = useState(null);
    const accessserver = async () => {

        const token = localStorage.getItem("access_token"); // Retrieve token from localStorage
        const email = localStorage.getItem("email");
        var url =  "https://auth.parabole.ai:5010/api/user_management/users" + "/"+ email
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            console.log(response.data);
            //setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }}


    return (
        <div style={{display: "flex", gap: "10px"}}>
            <h4>Customer type: {usertype}</h4>
            <Button onClick={accessserver} variant="primary">Server Access</Button>

        </div>

    );

}
export default CustomeradminTypeDisplay;