import React, { useState } from 'react';
import { Col, Container, Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Button } from 'antd';
import Header from "../components/Header";
import '../style/scss/glp.scss';
import BackgroundGrid from "../components/BackgroundGrid";
import jglpImg from '../style/images/jglp.webp';
import jglpUsdcImg from '../style/images/jglp-usdc.webp';
import jUsdcEthImg from '../style/images/jusdc-eth.webp';
import glpImg from '../style/images/glp.webp';
import cashImg from '../style/images/cash.a0e612bc.svg';
import camelotImg from '../style/images/camelot.png';
import { BsArrowUpRight} from 'react-icons/bs';
import { IoIosArrowDown} from 'react-icons/io';
import { IoIosArrowBack} from 'react-icons/io';
import { TiArrowUnsorted} from 'react-icons/ti';
import { BsInfoCircle } from "react-icons/bs";

const GLP = () => {
    const [depositFlag, setdepositFlag] = useState(true);

    let depositDiv;
    const depositFlagFunc = (flag) => {
        setdepositFlag(flag);
    }
    if(depositFlag){
        depositDiv = (
            <>
                <div class="grid grid-rows-2 token-input-div mt-3 gap-1 rounded border px-2 py-2 border-gray-200" style={{height: "84px",opacity: 0.4}}>
                    <input class="h-50 token-input" placeholder="0.00" value="">
                    </input>
                    <div className="d-flex align-items-center gap-2 glp-img-div rounded-btn bg-dark px-2 py-1">
                        <img src={glpImg} alt="" className="aura-img"/>
                        <div className="fs-6 fw-bolder pb-5px">GLP</div>
                        <IoIosArrowDown/>
                    </div>
                    <div className="d-flex gap-2 mt-2 justify-content-end">
                        <div className="fs-5-custom fw-bold text-white-50">Balance: 0.00</div>
                        <div className="balance-btn-div d-flex gap-1 align-items-center fs-5-custom">
                            <div >
                                <span className="balance-btn fw-bolder">
                                    Max
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-3 align-items-center justify-content-center bg-primary-gradient px-3 py-1 fs-5 fw-bold text-black connect-wallet-btn">Connect Wallet</div>
            </>
        )
    }
    else{
        depositDiv = (
            <>
                <div class="grid grid-rows-2 token-input-div mt-3 gap-1 rounded border px-2 py-2 border-gray-200" style={{height: "84px",opacity: 0.4}}>
                    <input class="h-50 token-input" placeholder="0.00" value="">
                    </input>
                    <div className="d-flex gap-2 aura-img-div">
                        <img src={jglpImg} alt="" className="aura-img"/>
                        <div className="fs-6 fw-bolder pb-5px">JGLP</div>
                    </div>
                    <div className="d-flex gap-2 mt-2 justify-content-end">
                        <div className="fs-5-custom fw-bold text-white-50">Balance: 0.00</div>
                        <div className="balance-btn-div d-flex gap-1 align-items-center fs-5-custom">
                            <div >
                                <span className="balance-btn fw-bolder">
                                    Max
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fs-6 text-white-50 mt-3'>Receive</div>
                <div class="grid grid-rows-2 token-input-div gap-1 rounded border px-2 py-2 border-gray-200" style={{height: "54px"}}>
                    <input class="h-50 token-input" value="">
                    </input>
                    <div className="d-flex align-items-center gap-2 glp-img-div rounded-btn bg-dark px-2 py-1">
                        <img src={glpImg} alt="" className="aura-img"/>
                        <div className="fs-6 fw-bolder pb-5px">GLP</div>
                        <TiArrowUnsorted/>
                    </div>
                </div>
                <div className="d-flex mt-3 align-items-center justify-content-center bg-primary-gradient px-3 py-1 fs-5 fw-bold text-black connect-wallet-btn">Connect Wallet</div>
            </>
        )
    }

    return (
        <div className='glp'>
            <Header/>
            <div className="glp-child">
                <Container>
                    <Row className="mt-4">
                        <Col lg={12} md={12} sm={12} xs={12} className="d-flex gap-3 align-items-center justify-content-start">
                            <Link to="/" className="fs-4"><IoIosArrowBack/></Link>
                            <img src={jglpImg} alt="" className="auraImg"/>
                            <h1>Leveraged Delta GLP Vault</h1>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                                <div className="fs-4 fw-bolder">$18,671,443</div>
                                <div className="fs-6 fw-lighter text-white-50">Total Value Locked</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                                <div className="d-flex py-2 flex-row gap-2 justify-content-start btn-group-aura-custom">
                                    <button className={depositFlag?"fs-6 pb-1 text-white-50 active":"fs-6 pb-1 text-white-50"} onClick={() => depositFlagFunc(true)}>Deposit</button>
                                    <button className={!depositFlag?"fs-6 pb-1 text-white-50 active":"fs-6 pb-1 text-white-50"} onClick={() => depositFlagFunc(false)}>Withdraw</button>
                                </div>
                                {depositDiv}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="mt-3 p-4 d-flex flex-column">
                        <div className="fs-4 fw-bolder mt-2 mb-2">About Jones GLP Vault</div>
                        <div className='d-flex justify-content-between'>
                            <div className='text-white-50'>Compounding APY</div>
                            <div>35.77% APY <BsInfoCircle/></div>
                        </div>
                        <div className='d-flex justify-content-between mt-2'>
                            <div className='text-white-50'>jGLP Ratio</div>
                            <div>1 jGLP ≈ 1.085 USD<BsInfoCircle/></div>
                        </div>
                        <div className="fs-6 fw-bold about-text-div mt-4">
                        The GLP token is an index of ETH, BTC, stablecoins, and other assets, which generates yield based on trader activity and incentives on the GMX platform.<br/>
                        This vault accepts GLP or any GLP-constituent token as deposit, and employs Smart Leverage by borrowing from the Jones USDC vault. If auto-compounding is selected, it delivers a corresponding jAsset to generate amplified yield to depositors.<br/>
                        Before depositing, please read the docs
                        and T&C. Jones retention incentive structure (3%) & slippage are listed as well. You are encouraged to test the UI on both the deposit and withdraw side to get an estimate at current rates which may fluctuate based on GMX and LP conditions. Alternatively the Camelot LP pool can be used to swap in and out of jGLP at current market rates.<br/>
                        </div>
                        <div className="mt-3 d-flex justify-content-between gap-2">
                            <div className="fs-6 fw-bold">Vault filled <BsInfoCircle/></div>
                            <div className="fs-6 fw-bold">89.89%</div>
                        </div>
                        <div className="progress mt-1" style={{height: "5px",backgroundColor: "black"}}>
                            <div className="progress-bar bg-primary-gradient" role="progressbar" style={{width: "89.89%"}} aria-valuenow="89.89" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className='mt-3'>
                            <a target="_blank" rel="noreferrer" className="learn-txt fs-6 fw-bolder" href="https://docs.jonesdao.io/jones-dao/features/understanding-jaura">
                                View Contract<BsArrowUpRight/>
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="mt-3 px-4 py-1">
                        <div className='fs-4 fw-bold'>What's next?</div>
                        <div className='fs-6 text-white-50'>Earn additional rewards by providing liquidity in the incentivized pools of our partners at Camelot.</div>
                    </div>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className="mt-3 d-flex flex-column justify-content-between">
                            <div className="card p-4 shadow-sm bg-dark-custom">
                                <div className="d-flex gap-2">
                                    <img src={jglpUsdcImg} alt="" className="dpxEthImg"/>
                                    <div className='d-flex flex-column'>
                                        <div className="fs-5 fw-bolder">jGLP-USDC</div>
                                        <div className="fs-6-custom fw-lighter text-white-50">Earn GRAIL/xGRAIL</div>
                                    </div>
                                    <img className="camelot-img" src={camelotImg} alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="mt-3 d-flex flex-column justify-content-between">
                            <div className="card p-4  shadow-sm bg-dark-custom">
                                <div className="d-flex gap-2">
                                    <img src={jUsdcEthImg} alt="" className="dpxEthImg"/>
                                    <div className='d-flex flex-column'>
                                        <div className="fs-5 fw-bolder">jUSDC-ETH</div>
                                        <div className="fs-6-custom fw-lighter text-white-50">Earn GRAIL/xGRAIL</div>
                                    </div>
                                    <img className="camelot-img" src={camelotImg} alt=""/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="card mt-5 p-4  shadow-sm bg-dark-custom">
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
                                jGLP can be used to provide liquidity on the Jones DAO platform and throughout the Arbitrum ecosystem. Be sure to use your jGLP to earn additional yield in our Staking dashboard.
                                Through our partners at Camelot, depositors will be able to LP jGLP - USDC to further improve their yield.
                                </div>
                            </Col>
                        </Row>
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

export default GLP;