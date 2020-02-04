import React from 'react';
import './assets/scss/App.scss';
import {Mainpage} from "./components/Mainpage";
import {Charts} from "./components/Charts/Charts";
import {Route} from "react-router-dom";
import {Users} from "./components/Users/Users";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: true
        };

    }

    componentDidMount() {
        this.setState({
            isFetching: false
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Route path="/" exact render={() => this.state.isFetching ? <Preloader/> : <Mainpage/>}/>
                <Route path="/users" render={() => <Users/>}/>
                <Route path="/user/:userId?"
                       render={(matchProps) => <Charts {...matchProps} handleMatch={this.handleMatch}/>}/>
            </div>
        );
    }
}

export default App;
