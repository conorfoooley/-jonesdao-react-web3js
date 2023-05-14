import React from "react";
import '../style/scss/footer.scss';
import { Col, Row } from "react-bootstrap";
import JonesHat from '../style/images/jones-hat.svg';
import Climate from '../style/images/climate.webp';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-body">
                <Row>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <div className="footer-text">
                            <img className="footer-image-hat" src={JonesHat}></img>
                            <p className="text-jones">Jones DAO</p>
                        </div>
                        <div>
                            <p className="text-defi">DeFi Strategies Made Simple</p>
                        </div>
                        <div>
                            <a href="https://www.klimadao.finance/retirements/jonesdaogov.eth/1" target="_blank"><img className="image-climate" src={Climate}></img></a>
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={4}>
                        <div>
                            <p className="text-community-learn">Community</p>
                            <a className="footer-social" href="https://twitter.com/JonesDAO_io" target="_blank" rel="noopener noreferrer"><p>Twitter</p></a>
                            <a className="footer-social" href="https://discord.com/invite/jonesdao" target="_blank" rel="noopener noreferrer"><p>Discord</p></a>
                            <a className="footer-social" href="https://commonwealth.im/jones-dao/" target="_blank" rel="noopener noreferrer"><p>Forum</p></a>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={4}>
                        <div>
                            <p className="text-community-learn">Learn</p>
                            <a className="footer-social" href="https://docs.jonesdao.io/jones-dao/" target="_blank" rel="noopener noreferrer"><p>Documentation</p></a>
                            <a className="footer-social" href="https://github.com/Jones-DAO" target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                            <a className="footer-social" href="https://jonesdao.ghost.io/" target="_blank" rel="noopener noreferrer"><p>Blog</p></a>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={12}>
                        <div className="bottom-last">
                            <p className="text-community-learn">Partners</p>
                            <a className="footer-social" href="https://www.dopex.io/" target="_blank" rel="noopener noreferrer"><p>Dopex</p></a>
                            <a className="footer-social" href="https://camelot.exchange/" target="_blank" rel="noopener noreferrer"><p>Camelot</p></a>
                            <a className="footer-social" href="https://plutusdao.io/" target="_blank" rel="noopener noreferrer"><p>Plutus Dao</p></a>
                            <a className="footer-social" href="https://gmx.io/" target="_blank" rel="noopener noreferrer"><p>GMX</p></a>
                            <a className="footer-social" href="https://aura.finance/" target="_blank" rel="noopener noreferrer"><p>AURA</p></a>
                            <a className="footer-social" href="https://balancer.fi/" target="_blank" rel="noopener noreferrer"><p>Balancer</p></a>
                            <a className="footer-social" href="https://www.olympusdao.finance/" target="_blank" rel="noopener noreferrer"><p>Olympus Dao</p></a>
                        </div>
                    </Col>
                </Row> 
            </div>
            <div className="footer-bottom">
                <Link className="text-terms">Terms of Service</Link>
            </div>
        </div>
    );
}