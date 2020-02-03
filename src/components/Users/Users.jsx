import React from 'react';
import {Header} from "../common/Header";
import {Breadcrumbs} from "../common/Breadcrumbs";
import {Pagination} from "../common/Pagination";
import {Footer} from "../common/Footer";
import {UsersTable} from "./UsersTable";
import users from './../../api/api';

export const Users = (props) => {
    users.getUsers(4,2).then(found => console.log(found));
  users.getUserStats(5).then(stat => console.log(stat));
    return (
        <div className="fullscreen">
                <section className="fullscreen-wrapper">
                    <Header/>
                    <Breadcrumbs {...props}/>
                    <UsersTable/>
                </section>
                <section className="fullscreen-bottom">
                    <Pagination {...props}/>
                    <Footer/>
                </section>
            </div>
    );
}

