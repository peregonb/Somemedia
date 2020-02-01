import React from 'react';
import './assets/scss/App.scss';
import mobile from './assets/img/mobile.png'
import nextSvg from './assets/img/next.svg'
import tile1 from './assets/img/tile1.svg'
import tile2 from './assets/img/tile2.svg'
import tile3 from './assets/img/tile3.svg'

function App() {
    return (
        <div className="wrapper">
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
                            <div className="mainFirst-button btn-white">
                                <span>View Stats</span>
                                <img src={nextSvg} alt=""/>
                            </div>
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
                            <img src={tile1} className="mainSecond-img"/>
                            <div className="mainSecond-header">Clean Design</div>
                            <div className="mainSecond-text">Increase sales by showing true dynamics of your
                                website.
                            </div>
                        </div>
                        <div className="mainSecond-tile">
                            <img src={tile2} className="mainSecond-img"/>
                            <div className="mainSecond-header">Secure Data</div>
                            <div className="mainSecond-text">Build your online store’s trust using Social Proof &
                                Urgency.
                            </div>
                        </div>
                        <div className="mainSecond-tile">
                            <img src={tile3} className="mainSecond-img"/>
                            <div className="mainSecond-header">Retina Ready</div>
                            <div className="mainSecond-text">Realize importance of social proof in customer’s
                                purchase decision.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
