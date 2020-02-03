import React from 'react';
import {NavLink} from "react-router-dom";

export const Breadcrumbs = () => {
    return (
        <section className="breadcrumbs">
            <div className="breadcrumbs-wrap wrap">
                <NavLink to="/" className="breadcrumbs-item icon-chevron">Main page</NavLink>
                <a className="breadcrumbs-item icon-chevron">User satistics</a>
            </div>
        </section>
    );
}

