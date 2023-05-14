import '../style/scss/dpxButtongroup.scss'
// import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from 'react';

const ButtonGroup = (props) => {
    const [active, setActive] = useState("Vault");
    return (
        <div className="dpx-buttongroup d-flex p-2 gap-3 ms-auto me-auto">
            {props.getFlag}
            <div className={active === "Vault" ? 'dpx-buttongroup-div px-3 py-1 fw-bold active' : 'dpx-buttongroup-div fw-bold px-3 py-1'} onClick={() => {
                props.getFlag('Vault');
                setActive("Vault");
                }}>Vault </div>
            <div className={active === "Analytics" ? 'dpx-buttongroup-div px-3 py-1 fw-bold active' : 'dpx-buttongroup-div fw-bold px-3 py-1'} onClick={() =>{ 
                props.getFlag('Analytics');
                setActive("Analytics");
                }}>Analytics</div>
             
        </div>
    );
}
export default ButtonGroup;