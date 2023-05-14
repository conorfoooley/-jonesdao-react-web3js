import { Button, Col, Container, Row } from "react-bootstrap";
import '../style/scss/JonesComponent.scss';
import stakingJones from '../style/images/staking-jones.webp';
import jonesEth from '../style/images/jones-eth.webp';
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";


const JonesEthComponent = () => {
    return (
        <div>
            <Row className="mt-4">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="d-flex justify-content-center ">
                        <div>
                            
                        </div>
                        <div className="ps-4 py-3 liquidity-div rounded-3 d-flex">
                            <div className="px-2">
                                <AiOutlineInfoCircle />
                            </div>
                            <div className="fw-bolder footer-community">
                                Liquidity migrating to Camelot<br />
                                The liquidity of this staking pool is migrating to Camelot.<br />
                                To migrate your liquidity, follow these steps:<br />
                                Unstake your LP from this pool (don't forget to claim your rewards)<br />
                                Remove liquidity at Sushi 
                                <a className="learn-txt" href="https://www.sushi.com/pools/42161:0xe8ee01ae5959d3231506fcdef2d5f3e85987a39c/remove" 
                                target="_blank">
                                    <span> here<BsArrowUpRight /></span>
                                </a><br />
                                Add liquidity at Camelot 
                                <a className="learn-txt" href="https://app.camelot.exchange/liquidity/?token1=0x10393c20975cF177a3513071bC110f7962CD67da&token2=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1" 
                                target="_blank">
                                    <span> here<BsArrowUpRight /></span>
                                </a><br />
                               
                                Deposit the position into the Nitro pool to earn additional yield
                                <a className="learn-txt" href="https://app.camelot.exchange/nitro/0xaF5180125643ED094679676F45bC01b8C5882A4c" 
                                target="_blank">
                                    <span> here<BsArrowUpRight /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="px-5 mt-3">
                <Col lg={6} md={6} sm={12} xs={12} className="flex-column px-3 py-3">
                    <div className="d-flex justify-content-between pb-3">
                        <div>Your stake</div>
                        <div><span className="text-white-50">JONES-ETH </span>0.00</div>
                    </div>
                    <div className="climable-div">
                        <div className="d-flex justify-content-between px-3 py-2 climable border-gradient">
                            <div>Claimable</div>
                            <div><span className="text-white-50">Jones </span>0.00</div>
                        </div>
                    </div>
                    <div className="pt-5 footer-community">
                        <a className="learn-txt" href="https://app.camelot.exchange/liquidity/?token1=0x10393c20975cF177a3513071bC110f7962CD67da&token2=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1" 
                                target="_blank">
                            Add Liquidity<BsArrowUpRight />
                        </a>
                        
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="flex-column px-3 py-3">
                    <div className="d-flex pb-3">
                        <div className="mouseovered active">Unstake</div>
                    </div>
                    <div className="p-2 d-flex justify-content-between pt-2 px-4 jones-stake-div">
                        <div className="fs-5 text-white-50">
                            0.00
                        </div>
                        <div className="d-flex flex-column">
                            <div className="ms-auto fs-6">
                                <img src={jonesEth} width={"30px"} className="me-2"></img>
                                    JONES-ETH
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
                    <div className="fw-bolder rounded-3 mt-3 d-flex justify-content-center text-black fs-5 py-2 jones-connect-div  mouseovered">
                        Connect Wallet
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default JonesEthComponent;