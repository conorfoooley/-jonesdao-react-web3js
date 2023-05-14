import React, { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import '../style/scss/JonesComponent.scss';
import stakingJones from '../style/images/staking-jones.webp';
import { BsArrowUpRight } from "react-icons/bs";

const JonesComponent = () => {
    const [stakeFlag, setStakeFlag] = useState(true);
    return (
        <div>
            <Row className="px-5">
                <Col lg={6} md={6} sm={12} xs={12} className="flex-column px-3 py-3">
                    <div className="d-flex justify-content-between pb-3">
                        <div>Your stake</div>
                        <div><span className="text-white-50">Jones </span>0.00</div>
                    </div>
                    <div className="climable-div">
                        <div className="d-flex justify-content-between px-3 py-2 climable border-gradient">
                            <div>Claimable</div>
                            <div><span className="text-white-50">Jones </span>0.00</div>
                        </div>
                    </div>
                    <div className="pt-5 footer-community">
                        <a className="learn-txt" href="https://app.camelot.exchange/?token1=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&token2=0x10393c20975cF177a3513071bC110f7962CD67da" 
                            target="_blank">
                            Get JONES<BsArrowUpRight />
                        </a>
                        
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="flex-column px-3 py-3">
                    <div className="d-flex gap-4 pb-3">
                        <div className={stakeFlag?"active mouseovered":"mouseovered text-white-50"} onClick={()=>{setStakeFlag(true)}}>Stake</div>
                        <div className={!stakeFlag?"active mouseovered":"mouseovered text-white-50"} onClick={()=>{setStakeFlag(false)}}>Unstake</div>
                    </div>
                    <div className="p-2 d-flex justify-content-between pt-2 px-4 jones-stake-div">
                        <div className="fs-5 text-white-50">
                            0.00
                        </div>
                        <div className="d-flex flex-column">
                            <div className="ms-auto fs-6">
                                <img src={stakingJones} width={"20px"} className="me-2"></img>
                                    JONES
                            </div>
                            <div className="d-flex gap-2 mt-2 justify-content-end">
                                <div className="fs-5-custom fw-bold text-white-50">Balance: 0.00</div>
                                <div className="balance-btn-div d-flex gap-1 align-items-center fs-5-custom">
                                    <div>
                                        <span className="balance-btn fw-bolder">
                                            Max
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="fw-bolder mt-3 d-flex mt-3 align-items-center justify-content-center text-black fs-5 py-2 bg-primary-gradient connect-wallet-btn mouseovered">
                        Connect Wallet
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default JonesComponent;