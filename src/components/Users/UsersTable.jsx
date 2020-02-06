import React from 'react';
import {NavLink} from "react-router-dom";


export const UsersTable = props => {

    return (
        <section className="users">
            <div className="users-wrap wrap">
                <div className="users-headline">Users statistics</div>
                <div className="users-table">
                    <div className="users-header">
                        <div className="users-row">
                            <div className="users-item">Id</div>
                            <div className="users-item">First name</div>
                            <div className="users-item">Last name</div>
                            <div className="users-item">Email</div>
                            <div className="users-item">Gender</div>
                            <div className="users-item">IP address</div>
                            <div className="users-item">Total clicks</div>
                            <div className="users-item">Total page views</div>
                        </div>
                    </div>
                    <div className="users-body">
                        {props.users.map(u => (
                            <NavLink to={'/user/' + (u.id + props.multiplier)} className="users-row" key={u.id}>
                                <div className="users-item">{u.id + props.multiplier}</div>
                                <div className="users-item">{u.first_name}</div>
                                <div className="users-item">{u.last_name}</div>
                                <div className="users-item">
                                    <span>{u.email}</span>
                                </div>
                                <div className="users-item">
                                    <span>{u.gender}</span>
                                </div>
                                <div className="users-item">
                                    <span>{u.ip_address}</span>
                                </div>
                                <div className="users-item">
                                    <span>
                                        {u.total_clicks}
                                </span>
                                </div>
                                <div className="users-item">
                                    <span>{u.total_page_views}</span>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );


}

