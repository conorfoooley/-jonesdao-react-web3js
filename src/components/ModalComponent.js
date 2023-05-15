import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import '../style/scss/ModalComponent.scss';
import MetamaskImg from '../style/images/metamask.svg';
import WalletConnectImg from '../style/images/walletconnect.svg';
import CoinbaseImg from '../style/images/coinbasewallet.svg';
import RainbowImg from '../style/images/rainbow.svg';
import DigitalAssestsImg from '../style/images/digitalassets.svg';
import NewWayLoginImg from '../style/images/newwaylogin.svg';
import WalletConnectQrImg from '../style/images/walletconnectQR.png';
import CoinbaseWalletQrImg from '../style/images/coinabsewalletQR.png';
import RainbowQrImg from '../style/images/rainbowQR.png';
import MetamaskQrImg from '../style/images/metamaskQR.png';
import QRCode from "react-qr-code";
import QRCodeStyling from "qr-code-styling";


function ModalComponent(props) {
    const [metamask, setMetamask] = useState(false);
    const [walletconnect, setWalletconnect] = useState(false);
    const [coinbase, setCoinbase] = useState(false);
    const [rainbow, setRainbow] = useState(false);
    const [walletbase, setWalletbase] = useState(true);
    const [qrcodesize, setQrcodesize] =useState(450);
    return (
        <Modal {...props} centered center aria-labelledby="contained-modal-title-vcenter">
        
        <Modal.Body className="modal-body show-grid d-flex ps-4 pt-3 ">
            <Row>
                <Col lg={5} md={5} sm={12} xs={12} className='wallet-list pt-2'>
                    <div>
                        <div className='fs-5 fw-bolder mt-1 ps-2'>Connect a Wallet</div>
                        <div className='fw-bolder text-white-50 mt-3 ps-2'>Recommended</div>
                        <div className='mt-1 pe-3'>
                            <div className={metamask ? 
                                'connect-wallet-active connect-wallet-div ' : 
                                'connect-wallet-div'} onClick=
                                {() => {setMetamask(true)
                                    setWalletconnect(false); 
                                    setCoinbase(false);
                                    setRainbow(false);
                                    setWalletbase(false);
                                
                                }}>
                                <div className='d-flex gap-2'>
                                    
                                    <img src={MetamaskImg} className='wallet-images'></img>
                                    <div className='fw-bolder'>MetaMAsk</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-1 pe-3'>
                            <div className={walletconnect ? 
                                'connect-wallet-active connect-wallet-div ' : 
                                'connect-wallet-div'} onClick=
                                {() => {setWalletconnect(true); 
                                    setCoinbase(false);
                                    setRainbow(false);
                                    setWalletbase(false);
                                    setMetamask(false);
                                    console.log(rainbow);
                                }}>
                                <div className='d-flex gap-2'>
                                    
                                    <img src={WalletConnectImg} className='wallet-images'></img>
                                    <div className='fw-bolder'>WalletConnect</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-1 pe-3'>
                            <div className={coinbase ? 
                                'connect-wallet-active connect-wallet-div ' : 
                                'connect-wallet-div'} onClick=
                                {() => {setCoinbase(true); 
                                    setRainbow(false);
                                    setWalletconnect(false);
                                    setWalletbase(false);
                                    setMetamask(false);
                                }}>
                                <div className='d-flex gap-2'>
                                    <img src={CoinbaseImg} className='wallet-images'></img>
                                    <div className='fw-bolder'>Coinbase Wallet</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-1 pe-3'>
                            <div className={rainbow ? 
                                'connect-wallet-active connect-wallet-div ' : 
                                'connect-wallet-div'} onClick=
                                {() => {setRainbow(true); 
                                    setCoinbase(false);
                                    setWalletconnect(false);
                                    setWalletbase(false);
                                    console.log("rainbow");
                                    setMetamask(false);
                                }}>
                                <div className='d-flex gap-2'>
                                    <img src={RainbowImg} className='wallet-images'></img>
                                    <div className='fw-bolder'>Rainbow</div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </Col>
                <Col lg={7} md={7} sm={12} xs={12}>
                    <div className='wallet-content'>
                    <div style={{ display: walletbase ? 'block' : 'none'}} className='px-5'>
                        <Row className='mt-5'>
                            <div className='fs-5 fw-bolder px-3 d-flex justify-content-center'>
                                What is a Wallet?
                            </div>
                        </Row>
                        <Row className='mt-5'>
                            <div className='d-flex align-items-center gap-3'>
                                <div>
                                    <img src={DigitalAssestsImg} className='wallet-info'></img>
                                </div>
                                <div className='wallet-content'>
                                    <div className='fw-bolder'>
                                        A Home for your Digital Assets
                                    </div>
                                    <div className='text-white-50'>
                                        Wallets are used to send, receive, store, 
                                        and display digital assets like Ethereum and NFTs.
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <Row className='mt-3'>
                            <div className='d-flex align-items-center gap-3'>
                                <div>
                                    <img src={NewWayLoginImg} className='wallet-info'></img>
                                </div>
                                <div className='wallet-content'>
                                    <div className='fw-bolder'>A New Way to Log In</div>
                                    <div className='text-white-50'>
                                        Instead of creating new accounts and 
                                        passwords on every website, just connect your wallet.
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <Row className='mt-5'>
                            <div className='d-flex justify-content-center '>
                                <div className='mx-auto get-a-wallet'>
                                    Get a Wallet
                                </div>
                                
                            </div>
                        </Row>
                        <Row className='mt-3 mb-4'>
                            <div className='d-flex'>
                                <div className='learn-more mx-auto'>
                                    Learn More
                                </div>
                            </div>
                            
                        </Row>
                    </div>
                    <div style={{ display: walletconnect ? 'block' : 'none'}}>
                        <div className='d-flex justify-content-center scan-phone'>
                            Scan with your phone
                        </div>
                        <div className='mt-3 ps-3 pe-2'>
                            <img src={WalletConnectQrImg} className='qr-img'></img>
                        </div>
                        <div className='mt-3 ps-3 d-flex justify-content-between align-items-center '>
                            <div className='wallet-modal-needed'>
                                Need the official WalletConnect modal?
                            </div>
                            <div className='ms-auto wallet-connect-open'>
                                OPEN
                            </div>
                        </div>
                    </div>
                    <div style={{ display: coinbase ? 'block' : 'none'}}>
                        <div className='d-flex justify-content-center scan-phone'>
                            Scan with Coinbase Wallet 
                        </div>
                        <div className='mt-3 ps-3 pe-2'>
                            <img src={CoinbaseWalletQrImg} className='qr-img'></img>
                        </div>
                        <div className='mt-3 ps-3 d-flex justify-content-between'>
                            <div className='wallet-modal-needed'>
                                Don't have Coinbase Wallet?
                            </div>
                            <div className='ms-auto wallet-connect-open'>
                                GET
                            </div>
                        </div>
                    </div>
                    <div style={{ display: rainbow ? 'block' : 'none'}}>
                        <div className='d-flex justify-content-center scan-phone'>
                            Scan with Rainbow 
                        </div>
                        <div className='mt-3 ps-3 pe-2'>
                            <img src={RainbowQrImg} className='qr-img'></img>
                        </div>
                        <div className='mt-3 ps-3 d-flex justify-content-between'>
                            <div className='wallet-modal-needed'>
                                Don't have Rainbow?
                            </div>
                            <div className='ms-auto wallet-connect-open'>
                                GET
                            </div>
                        </div>
                    </div>
                    <div style={{ display: metamask ? 'block' : 'none'}}>
                        <div className='d-flex justify-content-center scan-phone'>
                            Scan with Metamask 
                        </div>
                        <div className='mt-3 ps-3 pe-2'>
                            <img src={MetamaskQrImg} className='qr-img'></img>
                        </div>
                        <div className='mt-3 ps-3 d-flex justify-content-between'>
                            <div className='wallet-modal-needed'>
                                Don't have MetaMask?
                            </div>
                            <div className='ms-auto wallet-connect-open'>
                                GET
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </Col>
            </Row>
            <div onClick={props.onHide} className='x-mark 
            text-white-50 fw-bolder d-flex justify-content-center 
            align-items-center'>
                ✕
            </div>
        </Modal.Body>
        
        </Modal>
    );
}

export default ModalComponent;
