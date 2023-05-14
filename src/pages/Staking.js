
import Header from "../components/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import '../style/scss/staking.scss';
import stakingJones from '../style/images/staking-jones.webp';
import jonesEth from '../style/images/jones-eth.webp';
import jdpxDpx from '../style/images/jdpx-dpx.webp';
import jrdpxRdpx from '../style/images/jrdpx-rdpx.webp';
import jethEth from '../style/images/jeth-eth.webp';
import jgohmGohm from '../style/images/jgohm-gohm.webp';
import jUsdc from '../style/images/jusdc.webp';
import step1 from '../style/images/stakingstep1.webp';
import usdc from '../style/images/usdc.webp';
import camelot from '../style/images/camelot.webp';
import { FaArrowRight } from "react-icons/fa";
import eth from '../style/images/eth (1).webp';
import grail from '../style/images/grail.webp';
import { BsArrowUpRight} from 'react-icons/bs';
import BackgroundGrid from "../components/BackgroundGrid";
import React, { useState } from "react";
import JonesComponent from "../components/JonesComponent";
import JonesEthComponent from "../components/JonesEthComponent";
import JdpxDpxComponent from "../components/JdpxDpxComponent";
import JrdpxRdpxComponent from "../components/JrdpxRdpxComponent"
import JethEthComponent from "../components/JethEthComponent";
import JgohmGohmComponent from "../components/JgohmGohmComponent";

const Staking = () => {

    const [jonesFlag, setJonesFlag] = useState(false);
    const [jonesEthFlag, setJonesEthFlag] = useState(false);
    const [jdpxDpxFlag, setJdpxDpxFlag] = useState(false);
    const [jrdpxRdpxFlag, setJrdpxRdpxFlag] = useState(false);
    const [jethEthFlag, setJethEthFlag] = useState(false);
    const [jgohmGohmFlag, setJgohmFlag] = useState(false);

    return (
        <div className="staking"> 
            <Header />
            <Container className="staking-child pb-3">
                <Row className="mt-4">
                    <Col lg={12} md={12} sm={12} xs={12} className="d-flex">
                        <h1>Staking</h1>
                    </Col>
                </Row>
                <Row className="staking-total-row mt-3">
                    <Col className="staking-total-col" lg={12} md={12} sm={12} xs={12} >
                        <div className="px-4 py-4 d-flex justify-contents-between bg-total-custom flex-column shadow-sm">
                            <div className="fs-4 fw-bolder">$5,433,826</div>
                            <div className="fs-6 fw-lighter text-white-50">Total Value Locked</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={3} md={3} sm={3} sx={3}></Col>
                    <Col lg={3} md={3} sm={3} sx={3} className="d-flex text-white-50">
                        <div style={{marginLeft: "auto"}}>APR</div>
                        <div>
                            <svg className="mx-1 mb-1" width="14" height="14" viewBox="0 0 14 14" fill="none" 
                            xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" 
                            class="hover:text-primary-700">
                                <path d="M6.99745 6.89388L6.99859 6.89503L6.99859 9.13303M6.99751 
                                4.86898L6.99872 4.86703M12.3307 6.99851C12.3307 9.94329 9.9435 
                                12.3305 6.99872 12.3305C4.05393 12.3305 1.66672 9.94329 1.66672 
                                6.9985C1.66672 4.05372 4.05394 1.6665 6.99872 1.6665C9.9435 1.66651 
                                12.3307 4.05372 12.3307 6.99851Z" stroke-width="1.5" stroke-miterlimit="10" 
                                stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                    </Col >
                    <Col lg={3} md={3} sm={3} sx={3} className="d-flex text-white-50 ">
                        <div className="staking-tvl" style={{marginLeft: "auto"}}>TVL</div>
                    </Col>
                    <Col lg={3} md={3} sm={3} sx={3} className="d-flex text-white-50">
                        <div style={{marginLeft: "auto"}}>Position</div>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col lg={12} md={12} sm={12} xs={12} className="px-4 fw-bolder">
                        Active
                    </Col>
                </Row>
                <Row className="d-flex mt-2 bg-custom py-3">
                    <div className="d-flex bg-custom-div" onClick={() => setJonesFlag(!jonesFlag)}>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex gap-2 align-items-center">
                            <div className="ps-4">
                                <img src={stakingJones} width={"32px"}></img>
                            </div>
                            <div className="fw-bolder">JONES</div>
                            
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                1.86%
                            </div>
                            
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div className="staking-tvl" style={{marginLeft: "auto"}}>
                                $4,683,307
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                $0.00
                            </div>
                        </Col>
                    </div>
                    <Collapse in={jonesFlag}>
                        <div>
                            <JonesComponent /> 
                        </div>
                    </Collapse>
                </Row>
                <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12} className="px-4 fw-bolder">
                        Migrated
                    </Col>
                </Row>
                <Row className="d-flex mt-3 bg-custom py-3">
                    <div className="d-flex bg-custom-div" onClick={() => setJonesEthFlag(!jonesEthFlag)}>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex gap-2 align-items-center">
                            <div className="ps-4">
                                <img src={jonesEth} width={"53px"}></img>
                            </div>
                            <div className="fw-bolder">JONES-ETH</div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                N/A
                            </div>
                            
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div className="staking-tvl" style={{marginLeft: "auto"}}>
                                $23,505
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                $0.00
                            </div>
                        </Col>
                    </div>
                    <Collapse in={jonesEthFlag}>
                        <div>
                            <JonesEthComponent /> 
                        </div>
                    </Collapse>
                </Row>
                <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12} className="px-4 fw-bolder">
                        Deprecated
                    </Col>
                </Row>
                <Row className="d-flex mt-3 bg-custom py-3">
                    <div className="d-flex bg-custom-div" onClick={() => setJdpxDpxFlag(!jdpxDpxFlag)}>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex gap-2 align-items-center">
                            <div className="ps-4">
                                <img src={jdpxDpx} width={"53px"}></img>
                            </div>
                            <div className="fw-bolder">jDPX-DPX</div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                N/A
                            </div>
                            
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div className="staking-tvl" style={{marginLeft: "auto"}}>
                                $45,864
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                $0.00
                            </div>
                        </Col>
                    </div>
                    <Collapse in={jdpxDpxFlag}>
                        <div>
                            <JdpxDpxComponent /> 
                        </div>
                    </Collapse>
                </Row>
                <Row className="d-flex mt-2 bg-custom py-3">
                    <div className="d-flex bg-custom-div" onClick={() => setJrdpxRdpxFlag(!jrdpxRdpxFlag)}>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex gap-2 align-items-center">
                            <div className="ps-4">
                                <img src={jrdpxRdpx} width={"53px"}></img>
                            </div>
                            <div className="fw-bolder">jRDPX-RDPX</div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                N/A
                            </div>
                            
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div className="staking-tvl" style={{marginLeft: "auto"}}>
                                $228,411
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                $0.00
                            </div>
                        </Col>
                    </div>
                    <Collapse in={jrdpxRdpxFlag}>
                        <div>  
                            <JrdpxRdpxComponent /> 
                        </div>
                    </Collapse>
                </Row>
                <Row className="d-flex mt-2 bg-custom py-3">
                    <div className="d-flex bg-custom-div" onClick={() => setJethEthFlag(!jethEthFlag)}>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex gap-2 align-items-center">
                            <div className="ps-4">
                                <img src={jethEth} width={"53px"}></img>
                            </div>
                            <div className="fw-bolder">jETH-ETH</div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                N/A
                            </div>
                            
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div className="staking-tvl" style={{marginLeft: "auto"}}>
                                $95,868
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                $0.00
                            </div>
                        </Col>
                    </div>
                    <Collapse in={jethEthFlag}>
                        <div>  
                            <JethEthComponent /> 
                        </div>
                    </Collapse>
                </Row>
                <Row className="d-flex mt-2 bg-custom py-3">
                    <div className="d-flex bg-custom-div" onClick={() => setJgohmFlag(!jgohmGohmFlag)}>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex gap-2 align-items-center">
                            <div className="ps-4">
                                <img src={jgohmGohm} width={"53px"}></img>
                            </div>
                            <div className="fw-bolder">jgOHM--gOHM</div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                N/A
                            </div>
                            
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div className="staking-tvl" style={{marginLeft: "auto"}}>
                                $75,444
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex fw-bolder">
                            <div style={{marginLeft: "auto"}}>
                                $0.00
                            </div>
                        </Col>
                    </div>
                    <Collapse in={jgohmGohmFlag}>
                        <div>  
                            <JgohmGohmComponent /> 
                        </div>
                    </Collapse>
                </Row>
                <Row className="mt-4 p-4 disclaimer-custom">
                    <Col lg={4} md={4} sm={6} xs={12} className="ps-2">
                        <div className="d-flex gap-2 pt-2">
                            <div>
                            <img src={step1} width={"30px"}></img>
                            </div>
                            <div>
                            <img src={jUsdc} width={"30px"}></img>
                            </div>
                        </div>
                        <div className="pt-3 fw-bolder">
                            Step1
                        </div>
                        <div className="pt-3 text-white-50">
                            Acquire 50% of each token in a pair in order to 
                            start providing liquidity.
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="d-flex gap-2 pt-2">
                            <div>
                                <img src={step1} width={"30px"}></img>
                            </div>
                            <div>
                                <img src={usdc} width={"30px"}></img>
                            </div>
                            <div className="text-white-50 d-flex align-items-center ps-4 fs-5">
                                <FaArrowRight />
                            </div>
                            <div className="ps-4">
                                <img src={camelot} width={"30px"}></img>
                            </div>
                        </div>
                        <div className="pt-3 fw-bolder">
                            Step2
                        </div>
                        <div className="pt-3 text-white-50">
                            Deposit tokens evenly into a Camelot pool to get LP 
                            tokens.
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="d-flex gap-2 pt-2">
                            <div>
                                <img src={jUsdc} width={"30px"}></img>
                            </div>
                            <div>
                                <img src={eth} width={"30px"}></img>
                            </div>
                            <div className="text-white-50 d-flex align-items-center ps-4 fs-5">
                                <FaArrowRight />
                            </div>
                            <div className="ps-4">
                                <img src={grail} width={"30px"}></img>
                            </div>
                        </div>
                        <div className="pt-3 fw-bolder">
                            Step3
                        </div>
                        <div className="pt-3 text-white-50">
                            Stake your LP tokens in Camelot to earn GRAIL/xGRAIL.
                        </div>
                    </Col>
                    <div class="mt-4 text-center">
                        <a target="_blank" rel="noreferrer" className="learn-txt fs-6 fw-bolder" href="https://docs.jonesdao.io/jones-dao/features/understanding-jaura">
                            Learn<BsArrowUpRight className="fs-6"/>
                        </a>
                    </div>
                </Row>
                <Row className="disclaimer-custom mt-4 p-4">
                    <div className="fs-6 fw-bolder mt-2 mb-2">Disclaimer</div>
                    <div className="fs-6 fw-light text-white-50">
                    The indicative ROI/APY is not guaranteed and is subject to 
                    market risk. The strategies are not risk-free, and some epochs 
                    may result in a negative return. Details and protocol incentives 
                    can be found in
                    <a target="_blank" rel="noreferrer" 
                    className="ms-1 disclaimer-our-docs text-white-50" 
                    href="https://docs.jonesdao.io/jones-dao/features/incentives">
                    our docs
                    </a>.<br />
                    While the information contained within the Website is 
                    periodically updated, no guarantee is given that the 
                    information provided in the website is correct, complete , 
                    and current.
                    </div>
                </Row>
            </Container>
            <BackgroundGrid />
        </div>
    );
}
export default Staking;