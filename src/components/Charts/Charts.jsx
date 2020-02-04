import React from 'react';
import {Header} from "../common/Header";
import {Breadcrumbs} from "../common/Breadcrumbs";
import {Footer} from "../common/Footer";
import usersAPI from "../../api/api";

export class Charts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        usersAPI.getUserByID(userId).then(response => {
            if (response) {
                this.setState({
                    user: response
                });
            }
            else {
                console.error("No response found by current ID")
            }
            console.log(response)
        });


    }

    render() {
        return (
            <div className="fullscreen">
                <section className="fullscreen-wrapper">
                    <Header/>
                    <Breadcrumbs name={`${this.state.user.first_name} ${this.state.user.last_name}`}/>
                    <section className="users">
                        <div className="users-wrap wrap">
                            <div
                                className="users-headline">{`${this.state.user.first_name} ${this.state.user.last_name}`}</div>



                        </div>
                    </section>
                </section>
                <section className="fullscreen-bottom">
                    <Footer/>
                </section>
            </div>
        );
    }
}


