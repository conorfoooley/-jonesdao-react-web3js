import React, { useState } from 'react';
import { Col, Container, Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Button } from 'antd';
import Header from "../components/Header";
import '../style/scss/aura.scss';
import BackgroundGrid from "../components/BackgroundGrid";
import jauraImg from '../style/images/jaura.webp';
import balaner_poolImg from '../style/images/balancer-pool.06430732.svg';
import auraImg from '../style/images/aura.webp';
import { BsArrowUpRight, BsInfoCircle} from 'react-icons/bs';
import { IoIosArrowBack} from 'react-icons/io';
import { IoIosArrowUp} from 'react-icons/io';
import { IoIosArrowDown} from 'react-icons/io';
import { MdOutlineContentCopy} from 'react-icons/md';



const Aura = () => {
    const [hoverFlag, setHoverFlag] = useState(true);
    const auraText = "The jAURA strategy auto compounds a vlAURA position for more vlAURA, increasing the underlying amount of AURA upon withdrawal. Depositors earn yield from bribes with no extra effort through a Hidden Hand integration.";
    const lockText = "After depositing, there is a minimum deposit period of one week. After this, users can request a withdrawal of their position. The withdrawal request is subject to a minimum withdraw period of also one week. Tokenized versions of the jAURA strategy remain liquid at all times via Balancer Liquidity Pools.";
    const withDrawingText = "After the minimum withdraw period (After requesting a withdrawal) of one week. Users can withdraw their position. This system is on a first-come, first-serve basis. It is up to the user to make sure they withdraw promptly, or they may have to wait until additional liquidity becomes available. This vault has put into place rehypothecation, which offers a method of transforming non-tokenized positions into tokenized ones. This allows an expedited exit, but incentives are applied to prevent gamification of the system.";
    const [clipboardimg, setClipboardimg] = useState(0);
    
    const contractsText = (
        <>
        
            <div className='d-flex justify-content-between mt-1'>
                <div>Wrapped Jones AURA (wjAURA)</div>
                <div className='d-flex'>
                    <a target="_blank" rel="noreferrer" className="ms-1 learn-txt-gray" href="https://etherscan.io/address/0x198d7387Fa97A73F05b8578CdEFf8F2A1f34Cd1F">
                    0x198d7387Fa97A73F05b8578CdEFf8F2A1f34Cd1F
                    </a>
                    <div style={{position:'relative'}}>
                        <div className='ms-2 justify-content-center align-items-center wallet-address-icon'>
                        </div>
                        {/* {hoverFlag?<div className='copy-text px-2 pb-1 rounded-3 bg-dark-custom'>copy</div>:""} */}
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div>AuraRouter</div>
                <div className='d-flex'>
                    <a target="_blank" rel="noreferrer" className="ms-1 learn-txt-gray" href="https://etherscan.io/address/0xf01dD67Ed9006f13F79ba9DE1a370864ad92b449">
                    0xf01dD67Ed9006f13F79ba9DE1a370864ad92b449
                    </a>
                    <div className='ms-2 wallet-address-icon' onClick={() => { console.log("previous", clipboardimg); setClipboardimg(clipboardimg + 1); console.log("next", clipboardimg)}}>
                        <MdOutlineContentCopy/>
                    </div>
                    
                    
                </div>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div>AuraCompounderStrategy</div>
                <div className='d-flex'>
                    <a target="_blank" rel="noreferrer" className="ms-1 learn-txt-gray" href="https://etherscan.io/address/0x7629fc134e5a7feBEf6340438D96881C8D121f2c">
                    0x7629fc134e5a7feBEf6340438D96881C8D121f2c
                    </a>
                    <div className='ms-2 wallet-address-icon'>
                        <MdOutlineContentCopy/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-1'>
                <div>Viewer</div>
                <div className='d-flex'>
                    <a target="_blank" rel="noreferrer" className="ms-1 learn-txt-gray" href="https://etherscan.io/address/0x2A7745D1025a371106aF5301063095B4A8550526">
                    0x2A7745D1025a371106aF5301063095B4A8550526
                    </a>
                    <div className='ms-2 wallet-address-icon'>
                        <MdOutlineContentCopy/>
                    </div>
                </div>
            </div>
        </>
    );
    const [infoText, setInfoText] = useState(auraText);
    const [depositFlag, setdepositFlag] = useState(true);
    const [withDrawalFlag, setWithDrawalFlag] = useState(false);
    const [pendingFlag, setPendingFlag] = useState(false);
    const [infoTextFlag, setInfoTextFlag] = useState('aura');

    

    let depositDiv;
    const depositFlagFunc = (flag) => {
        setdepositFlag(flag);
        setWithDrawalFlag(!flag);
        setPendingFlag(flag);
    }
    if(depositFlag){
        depositDiv = (
            <>
                <div class="grid grid-rows-2 token-input-div mt-3 gap-1 rounded border px-2 py-2 border-gray-200" style={{height: "84px"}}>
                    <input class="h-50 token-input" placeholder="0.00" value="">
                    </input>
                    <div className="d-flex gap-2 aura-img-div">
                        <img src={auraImg} alt="" className="aura-img"/>
                        <div className="fs-6 fw-bolder pb-5px">AURA</div>
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
                <a target="_blank" rel="noreferrer" className="learn-txt mt-3 fs-5-custom fw-bolder" href="https://app.balancer.fi/#/ethereum/trade">
                    Get AURA<BsArrowUpRight/>
                </a>
                <a target="_blank" rel="noreferrer" className="learn-txt mt-1 fs-5-custom fw-bolder" href="https://app.balancer.fi/#/ethereum/pool/0x68e3266c9c8bbd44ad9dca5afbfe629022aee9fe000200000000000000000512/add-liquidity">
                    Add Liquidity on Balancer<BsArrowUpRight/>
                </a>
            </>
        )
    }
    else{
        depositDiv = (
            <>
                <div className='d-flex gap-2 mt-2 mb-3 align-items-center number-text' onClick={() => setWithDrawalFlag(!withDrawalFlag)}>
                    <div class="flex items-center justify-center rounded-full bg-primary-gradient" style={{width:'2.5rem',height:'2.5rem',padding:'0.125rem'}}>
                        <div class="flex w-100 h-100 items-center justify-center rounded-full bg-gray-800 font-medium">
                            <div class="bg-primary-gradient bg-clip-text text-transparent text-center" style={{paddingTop:'5px'}}>1</div>
                        </div>
                    </div>
                    <div className='fs-5 fw-bold'>Request Withdrawal</div>
                    {withDrawalFlag?
                    <IoIosArrowUp className='fs-5 fw-lighter'/>
                    :<IoIosArrowDown className='fs-5 fw-lighter'/>}
                </div>
                {withDrawalFlag?
                    <div style={{paddingLeft: '1.25rem',marginLeft: '1.25rem', borderLeft:'1px solid white'}}>
                        <div className="deprecated d-flex p-3">
                            <div className="me-2">
                                <BsInfoCircle />
                            </div>
                            <div>
                                <div>Withdrawal requests are available after a minimum deposit period of 1 week.<br/>
                                    Currently available for withdrawal: <strong>116,713</strong> AURA
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2 token-input-div mt-3 gap-1 rounded border px-2 py-2 border-gray-200" style={{height: "84px"}}>
                            <input class="h-50 token-input" placeholder="0.00" value="">
                            </input>
                            <div className="d-flex gap-2 aura-img-div">
                                <img src={jauraImg} alt="" className="aura-img"/>
                                <div className="fs-6 fw-bolder pb-5px">jAURA</div>
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
                    </div>
                :""}
                
                
                <div className='d-flex gap-2 mt-2 mb-3 align-items-center number-text' onClick={() => setPendingFlag(!pendingFlag)}>
                    <div class="flex items-center justify-center rounded-full bg-primary" style={{width:'2.5rem',height:'2.5rem',padding:'0.125rem'}}>
                        <div class="flex w-100 h-100 items-center justify-center rounded-full bg-gray-800 font-medium">
                            <div class="bg-primary bg-clip-text text-transparent text-center" style={{paddingTop:'5px'}}>2</div>
                        </div>
                    </div>
                    <div className='fs-5 fw-bold text-white-50'>Pending Requests</div>
                    {pendingFlag?
                        <IoIosArrowUp className='fs-5 fw-lighter'/>
                    :<IoIosArrowDown className='fs-5 fw-lighter'/>}
                </div>
                {pendingFlag?
                    <div className='fs-6 fw-bold' style={{color:"#c0c0c0"}}>Withdrawal requests will be shown here.</div>
                :""}
            </>
        )
    }

    return (
        <div className='aura'>
            <Header/>
            <div className="aura-child">
            <Container>
                <Row className="mt-4">
                    <Col lg={12} md={12} sm={12} xs={12} className="d-flex gap-3 align-items-center justify-content-start">
                        <Link to="/" className="fs-4"><IoIosArrowBack/></Link>
                        <img src={jauraImg} alt="" className="auraImg"/>
                        <h1>Jones Aura</h1>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                            <div className="fs-6 fw-lighter text-white-50">Total Value Locked</div>
                            <div className="fs-4 fw-bolder">$365,216</div>
                            <div className="fs-6 fw-bold">164,512 AURA</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                            <div className="d-flex py-2 flex-row gap-2 justify-content-start btn-group-aura-custom">
                                <button className={depositFlag?"fs-6 text-white-50 active":"fs-6 text-white-50"} onClick={() => depositFlagFunc(true)}>Deposit</button>
                                <button className={!depositFlag?"fs-6 text-white-50 active":"fs-6 text-white-50"} onClick={() => depositFlagFunc(false)}>Withdraw</button>
                                {/* <hr class="rounded border border-white"></hr> */}
                            </div>
                            {depositDiv}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="mt-3 p-4 d-flex flex-column">
                    <div className="fs-4 fw-bolder mt-2 mb-2">About</div>
                    <div className="fs-6 fw-bold about-text-div">
                    This vault is an auto-compounding strategy that allows you to earn yield on your AURA tokens. Over time, each jAURA token will become backed by more underlying <a target="_blank" rel="noreferrer" className="learn-txt" href="https://docs.aura.finance/aura/usdaura/vote-locking">vlAURA<BsArrowUpRight/></a>. 
                    Our integrations with Aura Finance, Balancer and Hidden Hand allow you to collect yield automatically, without the hassle of having to sell tokens, lock positions, or vote in bribe rounds yourself.
                    There are two different strategies you can choose from: jAURA or wjAURA.
                    </div>
                </div>
            </Container>
            <Container>
                <div className="card mt-5 p-4  shadow-sm bg-dark-custom">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className="px-4 pt-2 mt-3 d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex gap-2">
                                    <img src={jauraImg} alt="" className="jaura-Img-small"/>
                                    <div className="fs-6 fw-bolder">jAURA</div>
                                </div>
                                
                                <div className="fs-5-custom mt-3 fw-light text-white-50">
                                    Our non-tokenized auto compounding strategy. Read more about it in our 
                                    <a target="_blank" rel="noreferrer" className="ms-1 learn-txt-gray" href="https://docs.jonesdao.io/jones-dao/features/understanding-jaura">
                                        docs<BsArrowUpRight/>
                                    </a> .
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-between mt-4">
                                <div className="fs-5-custom fw-bolder">APY</div>
                                <div className="fs-5-custom fw-bolder">0.00%</div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="wjAURA-div-parent px-4 pt-2 mt-3 d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex wjAURA-div gap-2">
                                    <div className="fs-6 fw-bolder">wjAURA</div>
                                    <img src={jauraImg} alt="" className="jaura-Img-small"/>
                                </div>
                                
                                <div className="fs-5-custom mt-3 fw-light text-white-50">
                                    A tokenized, and therefore liquid, version of this strategy that auto compounds $vlAURA, but with liquidity incentives. Read more about it in our 
                                    <a target="_blank" rel="noreferrer" className="ms-1 learn-txt-gray" href="https://docs.jonesdao.io/jones-dao/features/understanding-jaura">
                                        docs<BsArrowUpRight/>
                                    </a> .
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-between mt-4">
                                <div className="fs-5-custom fw-bolder">APY</div>
                                <div className="fs-5-custom fw-bolder">0.00%</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className="mt-3 mb-1 p-4 d-flex flex-column">
                    <div className="fs-4 fw-bolder mt-2 mb-2">Info</div>
                    <div className="d-flex py-2 flex-row gap-2 justify-content-start">
                        <Button variant="dark" className={infoTextFlag==="aura"?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('aura');setInfoText(auraText)}}>AURA Auto Compounding</Button>
                        <Button variant="dark" className={infoTextFlag==="lock"?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('lock');setInfoText(lockText)}}>Lock Period</Button>
                        <Button variant="dark" className={infoTextFlag==="withdrawing"?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('withdrawing');setInfoText(withDrawingText)}}>Withdrawing</Button>
                        <Button variant="dark" className={infoTextFlag==="contracts"?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('contracts');setInfoText(contractsText)}}>Contracts</Button>
                    </div>
                    <div className="fs-6 fw-bold mt-2 about-text-div">
                        {infoText}
                    </div>
                </div>
            </Container>
            <Container>
                <div className="card mt-5 p-4  shadow-sm bg-dark-custom">
                    <Row className="mt-4">
                        <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column ">
                            <img src={jauraImg} alt="" className="jaura-Img"/>
                            <div className="fs-6 fw-bolder mt-2 mb-2">Deposit AURA</div>
                            <div className="fs-6 fw-light text-white-50">
                                Deposit AURA into the vault to make use of the jAURA strategy.<br/>
                                Choose between two options:<br/>
                                <span className="fw-bolder">jAURA</span> - Non-tokenized auto compounder with higher APY.<br/>
                                <span className="fw-bolder">wjAURA</span> - Will always remain liquid via liquidity pools.
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

export default Aura;