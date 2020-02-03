import React from 'react';
import './assets/scss/App.scss';
import {Users} from "./components/Users/Users";
import {Mainpage} from "./components/Mainpage";
import {Charts} from "./components/Charts/Charts";
import {Route} from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Route path="/" exact render={() => <Mainpage/>} />
                <Route path="/users" render={() => <Users/>}/>
                <Route path="/profile" render={() => <Charts/>}/>
            </div>
        );
    }
}

export default App;
