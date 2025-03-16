import React from "react"
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function CUSTOMERNAME({customer}) {

    return (
        <div style={{display: "flex", gap: "10px"}}>
            <h4>Customer Name: {customer}</h4>
        </div>
    );
}
export default CUSTOMERNAME;




