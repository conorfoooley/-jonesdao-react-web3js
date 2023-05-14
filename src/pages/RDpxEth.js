import React, { useState,useRef } from 'react';
import { Col, Container, Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Button } from 'antd';
import Header from "../components/Header";
import '../style/scss/RDpxEth.scss';
import BackgroundGrid from "../components/BackgroundGrid";
import sparklesImg from '../style/images/sparkles.d86b84b9.svg';
import flipImg from '../style/images/flip.80d4c65a.svg';
import dpxEthImg from '../style/images/dpx-eth.webp';
import rdpxEthImg from '../style/images/rdpx-eth.webp';
import { BsArrowUpRight} from 'react-icons/bs';
import { IoIosArrowBack} from 'react-icons/io';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    registerables
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(...registerables);

const RDpxEth = () => {
    const aboutText = "This vault will utilize a portion of the rewards from the farms to purchase put or call options that generate hedged yield in the direction you select. Deposits and claims are always available; however, deposited funds will not activate strategies until the next epoch starts. Likewise, when a user wishes to exit and claim, they will have to wait until the end of the epoch to access their claimable funds.";
    const lockText = (
        <>
            <div className='fs-6 fw-bold text-white'>Why a lockup?</div>
            <div>Deposits and withdrawals are held throughout an epoch to retain proportional option sizing within an epoch. When depositing during a live epoch, your capital will not be deployed until the next epoch. If you wish to sell or withdraw your assets, the sell is honored at the time a withdrawal is initiated, but you cannot access your claimable assets until the conclusion of the epoch. UTC unlock times may vary based on Dopex epoch timings. Learn More</div>
        </>
    );
    const rollingText = "Vault epochs are auto-rolling, meaning you may leave your deposit in the vault and it will automatically enter the next epoch indefinitely or until you withdraw your funds.";
    const compoundingText = "Metavault deposits are auto-rolling. Accumulated yield from LP incentives and options that expired in the money (ITM) are converted to the principal LP token of the vault at the end of each epoch and added to the user’s base deposit. User deposits are automatically activated for each successive epoch until the user initiates a withdrawal.";
    const flipText = "When you wish to flip from one directional position to another for the next epoch, your entire deposited position flips. Flipping is an irreversible action.";
    const withDrowText = "Once user funds have been implemented in a vault strategy they cannot be withdrawn until the vault closes its position the following Friday (UTC times may vary).Users can signal to withdraw during an active epoch but must wait until the epoch concludes to claim. Users have the ability to withdraw funds instantly during the layover between epochs. This decision is cancelable, with funds remaining deployed in vault strategies if indicated.";
    const incentivesText = "The vault incentive structure consists of a 10% performance incentive. If the weekly strategy is profitable, the weekly performance incentive is retained on the premiums earned. If the weekly strategy is unprofitable, there are no incentives retained. If the weekly strategy is unprofitable, there are no incentives are retained.";
    const [infoText, setInfoText] = useState(aboutText);
    const [infoTextFlag, setInfoTextFlag] = useState('about');

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '',
          },
        },
        scales: {
            x: {
              grid: {
                display: false
              },
              beginAtZero: false,
              
            },
            y: {
              title: "APY",
              grid: {
                display: false,
              },
              suffix: "%"
            }
          },
    };
      
    const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    
    const data = {
        labels,
        datasets: [
          {
            label: 'EPOCH',
            data: [12.63, 15.30, 12.2, 13.3, 53.3, 14.4, 19.0, 12.63, 75.30, 12.2, 13.3, 23.3, 14.4, 19.0, 12.63, 15.30, 12.2, 13.3, 53.3, 14.4, 19.0, 62.63, 15.30, 12.2, 13.3],
            backgroundColor: ['#2b4952','#853947','#2b4952','#853947','#2b4952','#853947','#2b4952','#853947','#2b4952','#2b4952','#853947','#2b4952','#2b4952','#853947','#2b4952','#2b4952','#853947','#853947','#853947','#2b4952','#2b4952','#2b4952','#853947','#2b4952','#853947'],
            borderRadius: 3,
          }
        ],
    };

    return (
        <div className='rdpxEth'>
            <Header/>
            <div className="rdpxEth-child">
            <Container>
                <Row className="mt-4">
                    <Col lg={12} md={12} sm={12} xs={12} className="d-flex gap-3 align-items-center justify-content-start">
                        <Link to="/" className="fs-4"><IoIosArrowBack/></Link>
                        <img src={rdpxEthImg} alt="" className="dpxEthImg"/>
                        <div>
                            <h1 className='mb-0'>RDPX-ETH</h1>
                            <h6>Hedged Metavaults</h6>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                            <div>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex gap-2">
                                        <div className="fs-5 fw-bolder pb-5px">Deposits are Open</div>
                                        <div className="px-2 py-1 fs-5-custom fw-bold text-white-50 rounded-full bg-black-custom"> Auto-rolling </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <div className="balance-btn-div d-flex gap-1 align-items-center fs-5-custom">
                                            <div >
                                                <span className="balance-btn fw-bolder px-1 py-1">
                                                    Current Epoch #26
                                                </span>
                                            </div>
                                        </div>
                                        <div className="balance-btn-div d-flex gap-1 align-items-center fs-5-custom">
                                            <div >
                                                <span className="balance-btn fw-bolder px-1 py-1">
                                                    05 May - 12 May
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 d-flex justify-content-between gap-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-5-custom fw-bold text-white-50">BULL</div>
                                        <div className="fs-5 fw-bolder">23.94% APY</div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="fs-5-custom fw-bold text-white-50" style={{marginLeft: "auto"}}>BEAR</div>
                                        <div className="fs-5 fw-bolder">$547,597</div>
                                    </div>
                                </div>
                                <div className="progress mt-1 mb-1" style={{height: "5px", backgroundColor: "#501a1a"}}>
                                    <div className="progress-bar bg-info-gradient" role="progressbar" style={{width: "98.58%"}} aria-valuenow="98.58" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="mt-1 d-flex justify-content-between gap-2">
                                    <div className="fs-5-custom fw-bold">98.58%</div>
                                    <div className="fs-5-custom fw-bold">1.42%</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                            <div className="fs-5 fw-bolder mb-3">Deposit</div>
                            <div className="fs-6 fw-bolder mt-2">Select direction</div>
                            <div className='d-flex justify-content-between gap-2 mt-4'>
                                <Button variant="info" className='w-50' style={{backgroundColor: "#3f7b8e"}}>BULL</Button>
                                <Button variant="danger" className='w-50' style={{backgroundColor: "#8e3545"}}>BEAR</Button>
                            </div>
                            <div class="grid grid-rows-2 token-input-div mt-3 gap-1 rounded border px-2 py-2 border-gray-200" style={{height: "84px"}}>
                                <input class="h-50 token-input" placeholder="0.00" value="">
                                </input>
                                <div className="d-flex gap-2 aura-img-div">
                                    <img src={dpxEthImg} alt="" className="dpxEth-img"/>
                                    <div className="fs-6 fw-bolder pb-5px">DPX-ETH</div>
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
                            <a target="_blank" rel="noreferrer" className="learn-txt mt-1 fs-5-custom fw-bolder" href="https://sushi.com/earn/arb1:0x0c1cf6883efa1b496b01f654e247b9b419873054/add">
                                Add liquidity<BsArrowUpRight/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className="mt-3 p-4 d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="d-flex gap-2">
                            <div className="fs-4 fw-bolder pb-5px">Metavault details</div>
                        </div>
                    </div>
                    <div className="mt-3 d-flex justify-content-between gap-2">
                        <div className="fs-5 fw-bolder">Curent Epoch #26</div>
                        <div className="fs-5 fw-bold" style={{marginLeft: "auto"}}>05 May - 12 May</div>
                    </div>
                    <div className="mt-3 d-flex justify-content-between gap-2">
                        <div className="fs-5-custom fw-bold">BULL Vault Filled</div>
                        <div className="fs-5-custom fw-bold">6.94%</div>
                    </div>
                    <div className="progress mt-1 mb-4" style={{height: "4px",backgroundColor: "black"}}>
                        <div className="progress-bar bg-primary-gradient" role="progressbar" style={{width: "6.94%"}} aria-valuenow="6.94" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="fs-5 fw-bold" style={{marginLeft: "auto"}}>108.227 / 1,560 DPX-ETH</div>

                    <div className="mt-3 d-flex justify-content-between gap-2">
                        <div className="fs-5-custom fw-bold">BEAR Vault Filled</div>
                        <div className="fs-5-custom fw-bold">0.03%</div>
                    </div>
                    <div className="progress mt-1 mb-4" style={{height: "4px",backgroundColor: "black"}}>
                        <div className="progress-bar bg-primary-gradient" role="progressbar" style={{width: "0.03%"}} aria-valuenow="0.03" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="fs-5 fw-bold" style={{marginLeft: "auto"}}>0.502 / 1,560 DPX-ETH</div>
                </div>
            </Container>

            <Container>
                <div className="mt-3 p-4 d-flex flex-column">
                    <div className="fs-4 fw-bolder pb-5px">My Positions</div>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12} className="d-flex text-white-50 fs-5-custom">
                            <div className='d-flex me-1 ms-auto'>
                                <div className='me-1'>APY</div>
                                <div>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" 
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
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12} className="d-flex text-white-50 fs-5-custom">
                            <div className='d-flex ms-auto'>
                                <div className='me-1'>Position</div>
                                <div>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" 
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
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="card px-4 pt-4 pb-5 shadow-sm bg-dark-custom">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className="d-flex gap-3 justify-content-start">
                            <img src={dpxEthImg} alt="" className="dpxEthImg"/>
                            <div className='fs-5 fw-bold'>DPX-ETH BULL</div>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12} className="d-flex text-white-50 fs-5-custom">
                            <div className='ms-auto'>
                                <div className="px-2 fs-5-custom fw-bold rounded-full bg-black-custom" style={{color:"#51b48f"}}> +21.59% </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12} className="d-flex text-white-50 fs-5-custom">
                            <div className='ms-auto fst-italic'>No deposits</div>
                        </Col>
                    </Row>
                </div>
                <div className="card px-4 pt-4 pb-5 mt-2 shadow-sm bg-dark-custom">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className="d-flex gap-3 justify-content-start">
                            <img src={dpxEthImg} alt="" className="dpxEthImg"/>
                            <div className='fs-5 fw-bold'>DPX-ETH BULL</div>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12} className="d-flex text-white-50 fs-5-custom">
                            <div className='ms-auto'>
                                <div className="px-2 fs-5-custom fw-bold rounded-full bg-black-custom" style={{color:"#51b48f"}}> +21.59% </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12} className="d-flex text-white-50 fs-5-custom">
                            <div className='ms-auto fst-italic'>No deposits</div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className='chart-custom'>
                    <div className="mt-3 p-4 d-flex flex-column">
                        <div className="fs-4 fw-bolder pb-5px">Performance APY</div>
                        <Bar options={options} data={data} />
                    </div>
                </div>
            </Container>

            <Container>
                <div className="mt-3 mb-1 p-4 d-flex flex-column">
                    <div className="fs-4 fw-bolder mt-2 mb-2">Strategy</div>
                    <div className="d-flex py-2 flex-row gap-2 justify-content-start">
                        <Button variant="dark" className={infoTextFlag==='about'?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=>{setInfoTextFlag('about'); setInfoText(aboutText)}}>About</Button>
                        <Button variant="dark" className={infoTextFlag==='lock'?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('lock');setInfoText(lockText)}}>Lockups</Button>
                        <Button variant="dark" className={infoTextFlag==='rolling'?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('rolling');setInfoText(rollingText)}}>Auto-Rolling Deposits</Button>
                        <Button variant="dark" className={infoTextFlag==='compounding'?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('compounding');setInfoText(compoundingText)}}>Auto-Compounding</Button>
                        <Button variant="dark" className={infoTextFlag==='flip'?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('flip');setInfoText(flipText)}}>Flip</Button>
                        <Button variant="dark" className={infoTextFlag==='withDrow'?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('withDrow');setInfoText(withDrowText)}}>Withdraw</Button>
                        <Button variant="dark" className={infoTextFlag==='incentives'?"active btn-info-custom fs-6 fw-600 text-white-50 px-3":"btn-info-custom fs-6 fw-600 text-white-50 px-3"} onClick={()=> {setInfoTextFlag('incentives');setInfoText(incentivesText)}}>Incentives</Button>
                    </div>
                    <div className="fs-6 about-text-div">
                        {infoText}
                    </div>
                    <div class="mt-3 d-flex flex-column">
                        <a target="_blank" rel="noreferrer" className="learn-txt mt-2 fs-6 fw-bolder" href="https://sushi.com/earn/arb1:0x0c1cf6883efa1b496b01f654e247b9b419873054/add">
                        Add Liquidity<BsArrowUpRight/>
                        </a>
                        <a target="_blank" rel="noreferrer" className="learn-txt mt-2 fs-6 fw-bolder" href="https://arbiscan.io/address/0x7AA12db079C901400e22a5B912204Dc575ff9C19">
                        View BULL Contract<BsArrowUpRight/>
                        </a>
                        <a target="_blank" rel="noreferrer" className="learn-txt mt-2 fs-6 fw-bolder" href="https://arbiscan.io/address/0x7a82A0ca7A2569d6cD3Df2aFeAF508f6d85Fd2c3">
                        View BEAR Contract<BsArrowUpRight/>
                        </a>
                        <a target="_blank" rel="noreferrer" className="learn-txt mt-2 fs-6 fw-bolder" href="https://docs.jonesdao.io/jones-dao/features/understanding-metavaults">
                        Learn<BsArrowUpRight/>
                        </a>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="card mt-5 p-4 shadow-sm bg-dark-custom">
                    <Row className="mt-4">
                        <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column ">
                            <img src={dpxEthImg} alt="" className="dpxEthImg"/>
                            <div className="fs-6 fw-bolder mt-2 mb-2">Deposit</div>
                            <div className="fs-6 fw-light text-white-50">
                                <span className="fw-bolder">Add liquidity</span> to obtain the DPX-ETH LP pair, deposit your LP tokens into the direction you think the price will head over the course of an epoch. 
                                Deposits become active at the start of the next epoch.
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                            <img src={flipImg} alt="" className="dpxEthImg"/>
                            <div className="fs-6 fw-bolder mt-2 mb-2">Flip</div>
                            <div className="fs-6 fw-light text-white-50">
                            When you wish to flip from one directional position to another for the next epoch, your entire deposited position flips. 
                            Whichever direction you indicate at the end of the epoch represents your direction in the next epoch.
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12} className="px-4 pt-3 d-flex flex-column">
                            <img src={sparklesImg} alt="" className="jaura-Img"/>
                            <div className="fs-6 fw-bolder mt-2 mb-2">Withdraw</div>
                            <div className="fs-6 fw-light text-white-50">
                            At the conclusion of the epoch in which you are withdrawing from, your funds become unlocked and claimable. 
                            When you withdraw and claim it must be a whole amount of your entire position. 
                            Withdrawing is an irreversible action and it is not possible to cancel or flip this action once initiated.
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

export default RDpxEth;