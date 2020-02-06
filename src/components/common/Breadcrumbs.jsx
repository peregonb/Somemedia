import React from 'react';
import {NavLink} from "react-router-dom";

export const Breadcrumbs = props => {
    return (
        <section className="breadcrumbs">
            <div className="breadcrumbs-wrap wrap">
                <NavLink to={process.env.PUBLIC_URL + '/'} className="breadcrumbs-item icon-chevron">Main page</NavLink>
                <NavLink to={process.env.PUBLIC_URL + '/users'} className="breadcrumbs-item icon-chevron">User statistics</NavLink>
                {props.name && <span className="breadcrumbs-item icon-chevron">{props.name}</span>}
            </div>
        </section>
    );
};

