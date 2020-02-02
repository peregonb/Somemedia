import React from 'react';
import './assets/scss/App.scss';
import {Mainpage} from './components/Mainpage'


function App() {
    return (
        <div className="wrapper">
            {/*<Mainpage/>*/}
            <div className="users">
                <header className="header">
                    <div className="header-wrap wrap">
                        <div className="mainFirst-header">
                            <div className="mainFirst-brand">AppCo</div>
                        </div>
                    </div>
                </header>
                <section className="breadcrumbs">
                    <div className="breadcrumbs-wrap wrap">
                        <a className="breadcrumbs-item icon-chevron">Main page</a>
                        <a className="breadcrumbs-item icon-chevron">User satistics</a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
