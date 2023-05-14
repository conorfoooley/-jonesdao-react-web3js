import React, { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import '../style/scss/landing.scss';
import BackgroundGrid from "../components/BackgroundGrid";
import jauraImg from '../style/images/jaura.webp';
import ethImg from '../style/images/eth.webp';
import auraBannerImg from '../style/images/aura-banner-bg.webp';
import jglpImg from '../style/images/jglp.webp';
import jusdcImg from '../style/images/jusdc.webp';
import dpxEthImg from '../style/images/dpx-eth.webp';
import rdpxEthImg from '../style/images/rdpx-eth.webp';
import dpxImg from '../style/images/dpx.webp';
import rdpxImg from '../style/images/rdpx.webp';
import eth1Img from '../style/images/eth (1).webp';
import cashImg from '../style/images/cash.a0e612bc.svg';
import gohmImg from '../style/images/gohm.webp';
import flipImg from '../style/images/flip.80d4c65a.svg';
import withDrawImg from '../style/images/sparkles.d86b84b9.svg';
import balaner_poolImg from '../style/images/balancer-pool.06430732.svg';
import auraImg from '../style/images/aura.webp';
import { BsArrowUpRight} from 'react-icons/bs';
const Landing = () => {
    const [active, setActive] = useState("aura");
    let infoDiv;
    if(active==='aura'){
        infoDiv = (
            <>
                <Row className="mt-4">
                    <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column ">
                        <img src={jauraImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Deposit AURA</div>
                        <div className="fs-6 fw-light text-white-50">
                            Deposit AURA into the vault to make use of the jAURA strategy.<br/>
                            Choose between two options:<br/>
                            jAURA - Non-tokenized auto compounder with higher APY.<br/>
                            wjAURA - Will always remain liquid via liquidity pools.
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                        <img src={balaner_poolImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Add liquidity on Balancer</div>
                        <div className="fs-6 fw-light text-white-50">
                            If you have deposited into the LSD vault, you will have received wjAURA tokens. 
                            You have the option to pair these tokens with ETH and provide liquidity on Balancer.
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                        <img src={auraImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Earn additional rewards</div>
                        <div className="fs-6 fw-light text-white-50">
                            There is a Gauge active on the Balancer liquidity pool. 
                            This means that you can earn additional rewards on your wjAURA-wETH LP tokens. 
                            To do this, you will need to stake your LP tokens in the Gauge.
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
    if(active==='glp'){
        infoDiv = (
            <>
                <Row className="mt-4">
                    <Col lg={6} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column ">
                        <img src={jglpImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">How does jGLP work?</div>
                        <div className="fs-6 fw-light text-white-50">
                        Deposited tokens will be used to mint GLP. 
                        Our vault then borrows USDC from the jUSDC vault within specific risk parameters, and uses targeted leverage ranges to expand the yield potential of jGLP. 
                        Users gain access to amplified yield.
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                        <img src={cashImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Earn Additional Rewards with jGLP</div>
                        <div className="fs-6 fw-light text-white-50">
                        jGLP can be used to provide liquidity on the Jones DAO platform and throughout the Arbitrum ecosystem. Be sure to use your jGLP to earn additional yield in our Staking dashboard.<br/>
                        Through our partners at Camelot, depositors will be able to LP jGLP - USDC to further improve their yield.
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
    if(active==='usdc'){
        infoDiv = (
            <>
                <Row className="mt-4">
                    <Col lg={6} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column ">
                        <img src={jusdcImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">How does jUSDC work?</div>
                        <div className="fs-6 fw-light text-white-50">
                        Deposited USDC tokens will be used to mint auto-compounding jUSDC. 
                        Our vault then lends the deposited tokens to the jGLP vault strategy. 
                        Depositors into this vault receive yield that comes from the lending interest of this two vault system.
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                        <img src={cashImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Earn Additional Rewards with jUSDC</div>
                        <div className="fs-6 fw-light text-white-50">
                        Through our partners at Camelot, depositors will be able to LP jUSDC - ETH to further improve their yield.
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
    if(active==='metavaults'){
        infoDiv = (
            <>
                <Row className="mt-4">
                    <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column ">
                        <img src={dpxEthImg} alt="" className="dpxETHImg"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Deposit</div>
                        <div className="fs-6 fw-light text-white-50">
                        Add liquidity to obtain the LP pair, deposit your LP tokens into the direction you think the price will head over the course of an epoch. 
                        Deposits become active at the start of the next epoch.
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                        <img src={flipImg} alt="" className="dpxETHImg"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Flip</div>
                        <div className="fs-6 fw-light text-white-50">
                            If you have deposited into the LSD vault, you will have received wjAURA tokens. 
                            You have the option to pair these tokens with ETH and provide liquidity on Balancer.
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                        <img src={withDrawImg} alt="" className="jaura-Img"/>
                        <div className="fs-6 fw-bolder mt-2 mb-2">Earn additional rewards</div>
                        <div className="fs-6 fw-light text-white-50">
                            There is a Gauge active on the Balancer liquidity pool. 
                            This means that you can earn additional rewards on your wjAURA-wETH LP tokens. 
                            To do this, you will need to stake your LP tokens in the Gauge.
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
    return (
        <div className='landing'>
            <Header/>
            <div className="landing-child">
                <Container className="">
                    <Row className="mt-4">
                        <Col lg={12} md={12} sm={12} xs={12} className="d-flex">
                            <h1>Vaults</h1>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                                <div className="fs-4 fw-bolder" >$31,099,226</div>
                                <div className="fs-6 fw-lighter text-white-50" >Total Value Locked</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={12} sm={12} xs={12}>
                            <Link to="/vaults/aura" className="d-flex mt-3 justify-content-between card shadow-sm bg-danger-custom jaura-card">
                                <div className="px-4 pt-3">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <img src={jauraImg} alt="" className="jauraImg"/>
                                            <div className="fs-4 fw-bolder pb-5px">jAURA</div>
                                        </div>
                                        <div className="Mainnet-div d-flex gap-1 align-items-center">
                                            <img src={ethImg} alt=""/>
                                            <div className="text-white">Mainnet</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">jAURA APY</div>
                                            <div className="fs-4 fw-bolder">0.00%</div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50" style={{marginLeft: "auto"}}>TVL</div>
                                            <div className="fs-4 fw-bolder">$199,164</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">wjAURA APY</div>
                                            <div className="fs-4 fw-bolder">0.00%</div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50" style={{marginLeft: "auto"}}>AURA Locked</div>
                                            <div className="fs-4 fw-bolder">98,518</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mt-3 align-items-center justify-content-between px-4 py-2 new-button-parent">
                                    <div className="text-sm font-medium text-gray">Auto compounding strategy</div>
                                    <div className="d-flex h-6 align-items-center rounded-full bg-primary-gradient px-3 py-1 fs-5-custom fw-bold text-black">NEW</div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={8} md={12} sm={12} xs={12} className="auraBanner-parent">
                            <div className="auraBanner-div d-flex mt-3 card shadow-sm">
                                <div className="h-50"></div>
                                <div className="d-flex align-items-center gap-2 px-4 py-2 w-50">
                                    <div class="fs-4 fw-bolder text-gray">jAURA has arrived!</div>
                                    <div class="d-flex h-6 align-items-center rounded-full bg-purple px-3 py-1 fs-5-custom fw-bold">NEW</div>
                                </div>
                                <div className="ms-4 fw-bold">Auto compounding strategy for your AURA</div>
                                <img className="auraBanner-img" src={auraBannerImg} alt=""/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Link to="/vaults/leveraged/glp" className="d-flex mt-3 justify-content-between card shadow-sm bg-info-custom jaura-card">
                                <div className="px-4 pt-3">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <img src={jglpImg} alt="" className="jauraImg"/>
                                            <div className="fs-4 fw-bolder pb-5px">Leveraged Delta GLP</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">APY</div>
                                            <div className="fs-4 fw-bolder">38.62%</div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50" style={{marginLeft: "auto"}}>TVL</div>
                                            <div className="fs-4 fw-bolder">$18,332,220</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="fs-6-custom fw-bold text-white-50">Vault filled</div>
                                        <div className="fs-5-custom fw-bold">89.89%</div>
                                    </div>
                                    <div className="progress mt-1" style={{height: "5px",backgroundColor: "black"}}>
                                        <div className="progress-bar bg-primary-gradient" role="progressbar" style={{width: "89.89%"}} aria-valuenow="89.89" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="d-flex mt-3 align-items-center justify-content-between px-4 py-2 new-button-parent-info">
                                    <div className="text-sm font-medium text-gray">Smart Leverage</div>
                                    <div className="d-flex h-6 align-items-center rounded-full bg-primary-gradient px-3 py-1 fs-5-custom fw-bold text-black">NEW</div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Link to="/vaults/leveraged/usdc" className="d-flex mt-3 justify-content-between card shadow-sm bg-info-custom jaura-card">
                                <div className="px-4 pt-3">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <img src={jusdcImg} alt="" className="jauraImg"/>
                                            <div className="fs-4 fw-bolder pb-5px">Gamma Neutral USDC</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">APY</div>
                                            <div className="fs-4 fw-bolder">8.38%</div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50" style={{marginLeft: "auto"}}>TVL</div>
                                            <div className="fs-4 fw-bolder">$11,441,322</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="fs-6-custom fw-bold text-white-50">Vault filled</div>
                                        <div className="fs-5-custom fw-bold">54.43%</div>
                                    </div>
                                    <div className="progress mt-1 mb-4" style={{height: "5px",backgroundColor: "black"}}>
                                        <div className="progress-bar bg-primary-gradient" role="progressbar" style={{width: "54.43%"}} aria-valuenow="54.43" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="d-flex mt-3 align-items-center justify-content-between px-4 py-2 new-button-parent-info">
                                    <div className="text-sm font-medium text-gray">Lending</div>
                                    <div className="d-flex h-6 align-items-center rounded-full bg-primary-gradient px-3 py-1 fs-5-custom fw-bold text-black">NEW</div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Link to="/vaults/metavaults/DPX-ETH" className="d-flex mt-3 justify-content-between card shadow-sm bg-primary-custom jaura-card">
                                <div className="px-4 pt-3">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <img src={dpxEthImg} alt="" className="jdpxETHImg"/>
                                            <div className="fs-4 fw-bolder pb-5px">DPX-ETH</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">Previous epoch Yield</div>
                                            <div className="fs-4 fw-bolder">21.20% APY</div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50" style={{marginLeft: "auto"}}>TVL</div>
                                            <div className="fs-4 fw-bolder">$139,476</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="fs-6-custom fw-bold text-white-50">BULL</div>
                                        <div className="fs-6-custom fw-bold text-white-50">BEAR</div>
                                    </div>
                                    <div className="progress mt-1 mb-1" style={{height: "5px", backgroundColor: "#501a1a"}}>
                                        <div className="progress-bar bg-info-gradient" role="progressbar" style={{width: "99.54%"}} aria-valuenow="99.54" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="fs-5-custom fw-bold">99.54%</div>
                                        <div className="fs-5-custom fw-bold">0.46%</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between px-4 py-2 new-button-parent-primary">
                                    <div className="text-sm font-medium text-gray">Metavault</div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Link to="/vaults/metavaults/RDPX-ETH" className="d-flex mt-3 justify-content-between card shadow-sm bg-primary-custom jaura-card">
                                <div className="px-4 pt-3">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <img src={rdpxEthImg} alt="" className="jdpxETHImg"/>
                                            <div className="fs-4 fw-bolder pb-5px">RDPX-ETH</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">Previous epoch Yield</div>
                                            <div className="fs-4 fw-bolder">23.94% APY</div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50" style={{marginLeft: "auto"}}>TVL</div>
                                            <div className="fs-4 fw-bolder">$547,597</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="fs-6-custom fw-bold text-white-50">BULL</div>
                                        <div className="fs-6-custom fw-bold text-white-50">BEAR</div>
                                    </div>
                                    <div className="progress mt-1 mb-1" style={{height: "5px", backgroundColor: "#501a1a"}}>
                                        <div className="progress-bar bg-info-gradient" role="progressbar" style={{width: "98.58%"}} aria-valuenow="98.58" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="fs-5-custom fw-bold">98.58%</div>
                                        <div className="fs-5-custom fw-bold">1.42%</div>
                                    </div>
                                </div>
                                <div className="d-flex mt-3 align-items-center justify-content-between px-4 py-2 new-button-parent-primary">
                                    <div className="text-sm font-medium text-gray">Metavault</div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="mt-5">
                        <div className="fs-4 fw-bolder pb-5px">Deprecated & Open for withdrawals</div>
                    </Row>
                    <Row>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Link to={"/vaults/options/DPX"}>
                                <div className="px-4 pt-3 mt-3 d-flex justify-content-between card shadow-sm bg-black-custom card-hover-border">
                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        <div className="d-flex gap-2">
                                            <img src={dpxImg} alt="" className="jauraImg"/>
                                            <div className="fs-5 fw-bolder pb-5px">DPX</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">Avg. Historical Yield</div>
                                            <div className="fs-6 fw-bolder">11.66% APY</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-3 d-flex justify-content-between gap-2">
                                        <div className="d-flex flex-column justify-content-center">
                                            <div className="fs-6-custom fw-bold text-white-50">TVL</div>
                                            <div className="fs-6 fw-bolder">$69,271</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Link to={"/vaults/options/RDPX"}>
                            <div className="px-4 pt-3 mt-3 d-flex justify-content-between card shadow-sm bg-black-custom card-hover-border">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex gap-2">
                                        <img src={rdpxImg} alt="" className="jauraImg"/>
                                        <div className="fs-5 fw-bolder pb-5px">RDPX</div>
                                    </div>
                                </div>
                                <div className="mt-3 d-flex justify-content-between gap-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-6-custom fw-bold text-white-50">Avg. Historical Yield</div>
                                        <div className="fs-6 fw-bolder">5.60% APY</div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-3 d-flex justify-content-between gap-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-6-custom fw-bold text-white-50">TVL</div>
                                        <div className="fs-6 fw-bolder">$244,080</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Link to={"/vaults/options/ETH"}>
                            
                            <div className="px-4 pt-3 mt-3 d-flex justify-content-between card shadow-sm bg-black-custom card-hover-border">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex gap-2">
                                        <img src={eth1Img} alt="" className="jauraImg"/>
                                        <div className="fs-5 fw-bolder pb-5px">ETH</div>
                                    </div>
                                </div>
                                <div className="mt-3 d-flex justify-content-between gap-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-6-custom fw-bold text-white-50">Avg. Historical Yield</div>
                                        <div className="fs-6 fw-bolder">6.23% APY</div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-3 d-flex justify-content-between gap-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-6-custom fw-bold text-white-50">TVL</div>
                                        <div className="fs-6 fw-bolder">$181,159</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <Link to={"/vaults/options/GOHM"}>
                            <div className="px-4 pt-3 mt-3 d-flex justify-content-between card shadow-sm bg-black-custom card-hover-border">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex gap-2">
                                        <img src={gohmImg} alt="" className="jauraImg"/>
                                        <div className="fs-5 fw-bolder pb-5px">GOHM</div>
                                    </div>
                                </div>
                                <div className="mt-3 d-flex justify-content-between gap-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-6-custom fw-bold text-white-50">Avg. Historical Yield</div>
                                        <div className="fs-6 fw-bolder">-0.06% APY</div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-3 d-flex justify-content-between gap-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-6-custom fw-bold text-white-50">TVL</div>
                                        <div className="fs-6 fw-bolder">$258,560</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="card mt-5 p-4  shadow-sm bg-dark-custom">
                        <Row className="ms-auto me-auto">
                            <div className="d-flex px-4 py-2 flex-row gap-2 justify-content-center btn-group-custom">
                                <Button variant="secondary" onClick={() => {setActive('aura')}} className={active==='aura'?"active fs-6 fw-bolder text-white-50 px-2":"fs-6 fw-bolder text-white-50 px-2"}>jAURA</Button>
                                <Button variant="secondary" onClick={() => {setActive('glp')}} className={active==='glp'?"active fs-6 fw-bolder text-white-50 px-2":"fs-6 fw-bolder text-white-50 px-2"}>jGLP</Button>
                                <Button variant="secondary" onClick={() => {setActive('usdc')}} className={active==='usdc'?"active fs-6 fw-bolder text-white-50 px-2":"fs-6 fw-bolder text-white-50 px-2"}>jUSDC</Button>
                                <Button variant="secondary" onClick={() => {setActive('metavaults')}} className={active==='metavaults'?"active fs-6 fw-bolder text-white-50 px-2":"fs-6 fw-bolder text-white-50 px-2"}>Metavaults</Button>
                            </div>
                        </Row>
                        {infoDiv}
                        <div class="mt-4 text-center">
                            <a target="_blank" rel="noreferrer" className="learn-txt fs-6 fw-bolder" href="https://docs.jonesdao.io/jones-dao/features/understanding-jaura">
                                Learn<BsArrowUpRight/>
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="card mt-3 mb-3 p-4 d-flex flex-column shadow-sm bg-dark-custom">
                        <div className="fs-6 fw-bolder mt-2 mb-2">Disclaimer</div>
                        <div className="fs-6 fw-light text-white-50">
                        The indicative ROI/APY is not guaranteed and is subject to market risk. The strategies are not risk-free, and some epochs may result in a negative return. 
                        Details and protocol incentives can be found in our docs.
                        While the information contained within the Website is periodically updated, no guarantee is given that the information provided in the website is correct, complete, and current.
                        </div>
                    </div>
                </Container>
                <BackgroundGrid />
            </div>
        </div>
    )
}

export default Landing;