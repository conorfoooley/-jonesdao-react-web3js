import React, { useState, Component } from 'react';
import { Col, Container, Row ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Button } from 'antd';
import Header from "../components/Header";
import '../style/scss/aura.scss';
import BackgroundGrid from "../components/BackgroundGrid";
import dpxImg from '../style/images/dpx.webp';
import rdpxImg from '../style/images/rdpx.webp';
import balaner_poolImg from '../style/images/balancer-pool.06430732.svg';
import jrdpxImg from '../style/images/jrdpx.webp';
import { BsArrowUpRight} from 'react-icons/bs';
import { IoIosArrowBack} from 'react-icons/io';
import { BsInfoCircle } from "react-icons/bs";
import DeprecatedComponent from '../components/DeprecatedComponent';
import ButtonGroup from '../components/ButtonGroup';
import '../style/scss/chart.scss';

import CanvasJSReact from '../components/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const DpxVault = () => {
    const [vaultInfo, setVaultIndo] = useState("Vault");
    const getFlag = (flagValue) => {
        setVaultIndo(flagValue);
        console.log("this is vaultInfo", vaultInfo);
    }
    let labels = ["Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
    let jdpxRadio = [1.006, 1.023, 1.05, 1.05, 1.039, 1.054, 1.083, 1.088, 1.092, 1.098, 1.113, 1.117];
    let monthlyReturn = [-0.93, 1.52, 1.58, 2.69, -1.05, 1.43, 2.73, 0.51, 0.33, 0.61, 1.30, 0.37];
    let historicalYield = [-10.61, 3.58, 9.01, 15.56, 9.51, 10.98, 14.54, 13.49, 12.39, 11.90, 12.34, 11.66];
    const options1 = {
        backgroundColor: "transparent", 
        color: "#fff", 
        animationEnabled: true,
        animationDuration: 2000, 
        theme: "light2", // "light1", "dark1", "dark2", 
        // minimum: -1, 
        // maximum: 3, 
        title:{
            fontColor: "white", 
            horizontalAlign: "left",
            text: "Monthly Return"
        },
        axisY: {
            labelFontColor: "white",
            gridThickness: 0,
            suffix: "%",
            
        },
        
        axisX: {
            // labelTextAlign: "left",
            margin: 20,
            labelFontColor: "white",
            title: "Singular month vault ROI",
            interval: 1, 
    
        },
        
       
        toolTip:{
            backgroundColor: "#141617",
            fontColor: "white",
            borderColor: "white", 
            cornerRadius: 5, 
            borderThickness: 1, 
            fontSize: 15
           },
        // subtitles:
        height: 270, 
    
        data: [{
            
            type: "line",
            color: "chocolate",
            toolTipContent: "{label} <br/> {y}%",
            
            dataPoints: [
                
                { label: labels[0], y: monthlyReturn[0]},
                { label: labels[1], y: monthlyReturn[1]},
                { label: labels[2], y: monthlyReturn[2]},
                { label: labels[3], y: monthlyReturn[3]},
                { label: labels[4], y: monthlyReturn[4]},
                { label: labels[5], y: monthlyReturn[5]},
                { label: labels[6], y: monthlyReturn[6]},
                { label: labels[7], y: monthlyReturn[7]},
                { label: labels[8], y: monthlyReturn[8]},
                { label: labels[9], y: monthlyReturn[9]},
                { label: labels[10], y:monthlyReturn[10] },
                { label: labels[11], y:monthlyReturn[11] }
            ]
        }]
    }
    const options2 = {
        backgroundColor: "transparent", 
        color: "#fff", 
        animationEnabled: true,
        animationDuration: 2000, 
        theme: "light2", // "light1", "dark1", "dark2", 
        // minimum: -1, 
        // maximum: 3, 
        title:{
            fontColor: "white", 
            horizontalAlign: "left",
            text: "jDPX Ratio"
        },
        axisY: {
            prefix: "1:", 
            labelFontColor: "white",
            gridThickness: 0,
        },
        
        axisX: {
            // labelTextAlign: "left",
            margin: 20,
            labelFontColor: "white",
            title: "Ratio represents 1 jDPX: DPX",
            interval: 1, 
    
        },
        
       
        toolTip:{
            backgroundColor: "#141617",
            fontColor: "white",
            borderColor: "white", 
            cornerRadius: 5, 
            borderThickness: 1, 
            fontSize: 15
           },
        // subtitles:
        height: 270, 
    
        data: [{
            
            type: "line",
            color: "chocolate",
            toolTipContent: "{label} 22 <br/> {y}DPX",
            
            dataPoints: [
                
                { label: labels[0], y: jdpxRadio[0]},
                { label: labels[1], y: jdpxRadio[1]},
                { label: labels[2], y: jdpxRadio[2] },
                { label: labels[3], y: jdpxRadio[3] },
                { label: labels[4], y: jdpxRadio[4] },
                { label: labels[5], y: jdpxRadio[5] },
                { label: labels[6], y: jdpxRadio[6] },
                { label: labels[7], y: jdpxRadio[7] },
                { label: labels[8], y: jdpxRadio[8] },
                { label: labels[9], y: jdpxRadio[9] },
                { label: labels[10],y: jdpxRadio[10] },
                { label: labels[11],y: jdpxRadio[11] }
            ]
        }]
    }
    const options3 = {
        backgroundColor: "transparent", 
        color: "#fff", 
        animationEnabled: true,
        animationDuration: 2000, 
        theme: "light2", // "light1", "dark1", "dark2", 
        // minimum: -1, 
        // maximum: 3, 
        title:{
            fontColor: "white", 
            horizontalAlign: "left",
           
        },
        axisY: {
            title: "APY", 
            labelFontColor: "white",
            gridThickness: 0,
            suffix: "%",
        },
        
        axisX: {
            // labelTextAlign: "left",
            margin: 20,
            labelFontColor: "white",
            title: "EPOCH",
            interval: 1, 
            suffix: 22
        },
        
       
        toolTip:{
            backgroundColor: "#141617",
            fontColor: "white",
            borderColor: "white", 
            cornerRadius: 5, 
            borderThickness: 1, 
            fontSize: 15
           },
        // subtitles:
        height: 270, 
    
        data: [{
            
            type: "line",
            color: "chocolate",
            toolTipContent: "{label}22 <br/> {y}%",
            
            dataPoints: [
                
                { label: labels[0], y: historicalYield[0]},
                { label: labels[1], y: historicalYield[1]},
                { label: labels[2], y: historicalYield[2]},
                { label: labels[3], y: historicalYield[3]},
                { label: labels[4], y: historicalYield[4]},
                { label: labels[5], y: historicalYield[5]},
                { label: labels[6], y: historicalYield[6]},
                { label: labels[7], y: historicalYield[7]},
                { label: labels[8], y: historicalYield[8]},
                { label: labels[9], y: historicalYield[9]},
                { label: labels[10], y:historicalYield[10] },
                { label: labels[11], y:historicalYield[11] }
            ]
        }]
    }
    let connectWalletDiv;
    let aboutDpxDiv;
    let historicalDiv;
    let btngroupDiv;
    let chart1;
    let chart2;
    let chart3;
    
    if (vaultInfo === "Vault") {
        
        connectWalletDiv = (
        <Row className="mt-3">
            <Col lg={12} md={12} sm={12} xs={12}>
                <div className="card p-4 d-flex flex-column justify-content-center shadow-sm bg-dark-custom">
                    <div className="d-flex py-2 flex-row gap-2 justify-content-start btn-group-aura-custom">
                        
                        <button className="fs-6 text-white-50">Claim</button>
                        {/* <hr class="rounded border border-white"></hr> */}
                    </div>
                    <div class="grid grid-rows-2 token-input-div mt-3 gap-1 rounded border px-2 py-2 border-gray-200" style={{height: "84px"}}>
                        <input class="h-50 token-input" placeholder="0.00" value="">
                        </input>
                        <div className="d-flex gap-2 aura-img-div">
                            <img src={jrdpxImg} alt="" className="aura-img"/>
                            <div className="fs-6 fw-bolder pb-5px">jDPX</div>
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
                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            You will get
                        </div>
                        <div>
                            0.00DPX
                        </div>
                    </div>
                </div>
            </Col>
        </Row>)
        aboutDpxDiv = (
            <Container>
                <div className="mt-3 p-2 d-flex flex-column">
                    <div className="fs-4 fw-bolder mt-2 mb-2">About RDPX Vault</div>
                    <div className="fs-6 fw-bold">
                        <div className='d-flex justify-content-between'>
                            <div>TVL</div>
                            <div>$59.359</div>
                            
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>Avg.historical yield</div>
                            <div>11.66% APY <BsInfoCircle /></div>   
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>Ratio</div>
                            <div>1jDPX = 1.117DPX <BsInfoCircle /></div>
                        </div>
                    </div>
                </div>
            </Container>
        )
        chart1 = null;
        chart2 = null;
        chart3 = null;
        historicalDiv = null;
        btngroupDiv = null;
    } else {
        connectWalletDiv = null;
        aboutDpxDiv = null;
        chart1 = (<CanvasJSChart options = {options1} />)
        chart2 = (<CanvasJSChart options = {options2} />)
        chart3 = (<CanvasJSChart options = {options3} />) 
        
        historicalDiv = (
            <Row className='mt-4 fw-bolder fs-5'>
                <div>
                    DPX Avg. Historical Yield <BsInfoCircle />
                </div>
                <div>
                    11.66% APY
                </div>
            </Row>    
        )
        btngroupDiv = (
            <Row className='mt-3'>
                <div className='d-flex justify-content-center px-2 gap-3'>
                    <div className='history-btns px-3 py-2'>All</div>
                    <div className='history-btns px-3 py-2'>3M</div>
                    <div className='history-btns px-3 py-2'>6M</div>
                    <div className='history-btns px-3 py-2'>1Y</div>
                    <div className='history-btns px-3 py-2'>YTD</div>
                </div>
            </Row>
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
                        <img src={rdpxImg} alt="" className="auraImg"/>
                        <h1>RDPX Vault</h1>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <DeprecatedComponent />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col lg={12} md={12} sm={12} xs={12} className='d-flex'>
                        <ButtonGroup getFlag={getFlag}/>
                        
                    </Col>
                </Row>
                {connectWalletDiv}
                
                

            </Container>
            
            {aboutDpxDiv}
            <Container>
                <Row className='mt-2'>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='p-2'>
                            {chart1}
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='p-2'>
                            {chart2}
                        </div>
                    </Col>
                </Row>
                {btngroupDiv}
                {historicalDiv}
                <Row className='mt-2'>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='p-2'>
                            {chart3}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="card mt-3 mb-3 p-4 d-flex flex-column shadow-sm bg-dark-custom">
                    <div className="fs-6 fw-bolder mt-2 mb-2">Disclaimer</div>
                    <div className="fs-6 fw-light text-white-50">
                    The indicative ROI/APY is not guaranteed and is subject to market risk. The strategies are not risk-free, and some epochs may result in a negative return. 
                    Details and protocol incentives can be found in our docs.<br />
                    While the information contained within the Website is periodically updated, no guarantee is given that the information provided in the website is correct, complete, and current.
                    </div>
                </div>
            </Container>
            <BackgroundGrid />
            </div>
        </div>
    );
}
export default DpxVault;