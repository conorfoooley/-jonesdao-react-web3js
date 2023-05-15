import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from '../Context/AppContext';
import ModalComponent from "./ModalComponent";
import JonesHat from '../style/images/jones-hat.svg';
import '../style/scss/header.scss';


export default function Header() {
    const {headerActive,setHeaderActive} = useContext(AppContext);
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="sticky">
            <div className="header">
                <div className="header-div-first" >
                    <div>
                        <span>
                            <img className="image-hat" src={JonesHat} alt=""></img>
                        </span>
                    </div>
                    <div className="btn-group">
                        <Link to={"/"}><button onClick={() => {setHeaderActive('vaults')}} className={headerActive==='vaults'?"active btn-vaults":"btn-vaults"}>Vaults</button></Link>
                        <Link to={"/staking"}><button onClick={() => {setHeaderActive('staking')}} className={headerActive==='staking'?"active":""}>Staking</button></Link>
                    </div>
                </div>
                <div className="header-div-second" >
                    <div className="hat-bg">
                        <img className="second-hat" src={JonesHat} alt=""></img>
                    </div>
                    <div>
                        <button className="btn-connect" onClick={() => {setModalShow(true)}}>
                            <div >
                                <span className="btn-connect-div">
                                    Connect
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <ModalComponent show={modalShow} onHide={() => setModalShow(false)}/>
            
            </div>
        </div>
    );
}