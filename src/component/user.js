import React from "react";
import { useParams } from "react-router-dom";
import SuperadminTypeDisplay from "./superadmin";
import CustomeradminTypeDisplay from "./customeradmin";
import OnlyuserTypeDisplay from "./generaluser";
import CUSTOMERNAME from "./customerName";


function UserTypeDisplay() {
    const { selectedType } = useParams();
    const [name, type] = selectedType.split("_");
    var new_type = type.toLocaleLowerCase()
    const token = localStorage.getItem("access_token");
    // Render CUSTOMERNAME properly
    return (
        <div>



            <CUSTOMERNAME customer={name} />
            {new_type === "superadmin" && (
                <div className="alert alert-info text-center mt-3">
                    <SuperadminTypeDisplay usertype={type} />
                </div>
            )}
            {new_type === "customeradmin" && (
                <div className="alert alert-info text-center mt-3">
                    <CustomeradminTypeDisplay  usertype={type} />
                </div>
            )}
            {new_type === "user" && (
                <div className="alert alert-info text-center mt-3">
                    <OnlyuserTypeDisplay  usertype={type} />

                </div>
            )}

        </div>
    );
}

export default UserTypeDisplay;
