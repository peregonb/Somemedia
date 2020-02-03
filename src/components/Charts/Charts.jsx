import React from 'react';
import {Header} from "../common/Header";
import {Breadcrumbs} from "../common/Breadcrumbs";
import {Footer} from "../common/Footer";

export const Charts = () => {
    return (
        <div className="fullscreen">
                <section className="fullscreen-wrapper">
                    <Header/>
                    <Breadcrumbs/>
                </section>
                <section className="fullscreen-bottom">
                    <Footer/>
                </section>
            </div>
    );
}

