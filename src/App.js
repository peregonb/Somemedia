import React from 'react';
import './assets/scss/App.scss';
import {Mainpage} from "./components/Mainpage";
import {Charts} from "./components/Charts/Charts";
import {Route} from "react-router-dom";
import {Users} from "./components/Users/Users";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Route path={process.env.PUBLIC_URL + '/'} render={() => <Mainpage/>}/>
                    <Route path={process.env.PUBLIC_URL + '/users'} render={() => <Users/>}/>
                    <Route path="/user/:userId?"
                           render={(matchProps) => <Charts {...matchProps} handleMatch={this.handleMatch}/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
