import React from 'react';
import mobile from './../assets/img/mobile.png'
import nextSvg from './../assets/img/next.svg'
import nextSvgWhite from './../assets/img/nextWhite.svg'
import tile1 from './../assets/img/tile1.svg'
import tile2 from './../assets/img/tile2.svg'
import tile3 from './../assets/img/tile3.svg'
import macbook from './../assets/img/macbook.png'
import basic from './../assets/img/basic.jpg'
import standart from './../assets/img/standart.jpg'
import unlimited from './../assets/img/unlimited.jpg'
import {NavLink} from "react-router-dom";

export const Mainpage = () => {
    return (
        <div className="main">
            <section className="mainFirst">
                <div className="mainFirst-wrap wrap">
                    <div className="mainFirst-header">
                        <div className="mainFirst-brand">AppCo</div>
                    </div>
                    <div className="mainFirst-content">
                        <div className="mainFirst-left">
                            <div className="mainFirst-headline">
                                <span>Brainstorming</span> for desired perfect Usability
                            </div>
                            <div className="mainFirst-excerpt">
                                Our design projects are fresh and simple and will benefit your business greatly. Learn
                                more
                                about our work!
                            </div>
                            <NavLink to="/users" className="mainFirst-button btn-white">
                                <span>View Stats</span>
                                <img src={nextSvg} alt=""/>
                            </NavLink>
                        </div>
                        <div className="mainFirst-right">
                            <img src={mobile} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mainSecond">
                <div className="mainSecond-wrap wrap">
                    <div className="mainSecond-headline">Why <b>small business owners
                        love</b> AppCo?
                    </div>
                    <div className="mainSecond-excerpt">Our design projects are fresh and simple and will benefit your
                        business greatly. Learn more about our work!
                    </div>
                    <div className="mainSecond-content">
                        <div className="mainSecond-tile">
                            <img alt="" src={tile1} className="mainSecond-img"/>
                            <div className="mainSecond-header">Clean Design</div>
                            <div className="mainSecond-text">Increase sales by showing true dynamics of your
                                website.
                            </div>
                        </div>
                        <div className="mainSecond-tile">
                            <img alt="" src={tile2} className="mainSecond-img"/>
                            <div className="mainSecond-header">Secure Data</div>
                            <div className="mainSecond-text">Build your online store’s trust using Social Proof &
                                Urgency.
                            </div>
                        </div>
                        <div className="mainSecond-tile">
                            <img alt="" src={tile3} className="mainSecond-img"/>
                            <div className="mainSecond-header">Retina Ready</div>
                            <div className="mainSecond-text">Realize importance of social proof in customer’s
                                purchase decision.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mainThird">
                <div className="mainThird-wrap wrap">
                    <div className="mainThird-left">
                        <div className="mainThird-header">Start Managing your apps business, more faster</div>
                        <div className="mainThird-text">Objectively deliver professional value with diverse
                            web-readiness. Collaboratively transition wireless customer service without goal-oriented
                            catalysts for change. Collaboratively.
                        </div>
                        <div className="mainThird-button btn-white">
                            <span>Learn more</span>
                            <img src={nextSvg} alt=""/>
                        </div>
                    </div>
                    <div className="mainThird-right">
                        <img src={macbook} alt=""/>
                    </div>
                </div>
            </section>
            <section className="mainFourth">
                <div className="mainFourth-wrap wrap">
                    <div className="mainSecond-headline mainFourth-headline"><b>Afforadble Pricing and
                        Packages</b> choose your best one
                    </div>
                    <div className="mainSecond-excerpt mainFourth-excerpt">Monotonectally grow strategic process
                        improvements vis-a-vis
                        integrated resources.
                    </div>
                    <div className="mainFourth-content">
                        <div className="mainFourth-tile">
                            <div className="mainFourth-top">
                                <div className="mainFourth-name">Basic</div>
                                <img className={"mainFourth-img"} src={basic} alt=""/>
                                <div className="mainFourth-price">$29</div>
                            </div>
                            <div className="mainFourth-line"/>
                            <div className="mainFourth-bottom">
                                <div className="mainFourth-descr">
                                    Push Notifications <br/>
                                    Data Transfer <br/>
                                    SQL Database <br/>
                                    Search & SEO Analytics <br/>
                                    24/7 Phone Support <br/>
                                    2 months technical support <br/>
                                    2+ profitable keyword
                                </div>
                                <div className="mainFourth-button btn-blue">
                                    <span>Purchase now</span>
                                    <img src={nextSvgWhite} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="mainFourth-tile">
                            <div className="mainFourth-top">
                                <div className="mainFourth-name">Standard</div>
                                <img className={"mainFourth-img"} src={standart} alt=""/>
                                <div className="mainFourth-price">$149</div>
                            </div>
                            <div className="mainFourth-line"/>
                            <div className="mainFourth-bottom">
                                <div className="mainFourth-descr">
                                    Push Notifications <br/>
                                    Data Transfer <br/>
                                    SQL Database <br/>
                                    Search & SEO Analytics <br/>
                                    24/7 Phone Support <br/>
                                    2 months technical support <br/>
                                    2+ profitable keyword
                                </div>
                                <div className="mainFourth-button btn-blue">
                                    <span>Purchase now</span>
                                    <img src={nextSvgWhite} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="mainFourth-tile">
                            <div className="mainFourth-top">
                                <div className="mainFourth-name">Unlimited</div>
                                <img className={"mainFourth-img"} src={unlimited} alt=""/>
                                <div className="mainFourth-price">$39</div>
                            </div>
                            <div className="mainFourth-line"/>
                            <div className="mainFourth-bottom">
                                <div className="mainFourth-descr">
                                    Push Notifications <br/>
                                    Data Transfer <br/>
                                    SQL Database <br/>
                                    Search & SEO Analytics <br/>
                                    24/7 Phone Support <br/>
                                    2 months technical support <br/>
                                    2+ profitable keyword
                                </div>
                                <div className="mainFourth-button btn-blue">
                                    <span>Purchase now</span>
                                    <img src={nextSvgWhite} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainFourth-contactUs">
                        If you need custom services or Need more? <span>Contact us</span>
                    </div>
                </div>
            </section>
            <section className="mainFifth">
                <div className="mainFifth-wrap wrap">
                    <form className="mainFifth-form" onSubmit={(e => {
                        e.preventDefault()
                    })}>
                        <input placeholder={"Enter your email"} type="email" className="mainFifth-input"/>
                        <div className="mainFifth-button btn-blue">
                            <span>Subscribe</span>
                            <img src={nextSvgWhite} alt=""/>
                        </div>
                    </form>
                    <div className="mainFifth-footer">
                        <span>AppCo</span>
                        <span>All rights reserved by ThemeTags</span>
                        <span>Copyrights © {new Date().getFullYear()}. </span>
                    </div>
                </div>
            </section>
        </div>
    )
};