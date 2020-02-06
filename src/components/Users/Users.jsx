import React from 'react';
import {Header} from "../common/Header";
import {Breadcrumbs} from "../common/Breadcrumbs";
import {Footer} from "../common/Footer";
import {UsersTable} from "./UsersTable";
import Preloader from "../common/Preloader/Preloader";
import usersAPI from "../../api/api";


export class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.outerWidth,
            users: [],
            totalUsers: null,
            pageSize: 50,
            pagesCount: null,
            pages: [],
            isFetching: true,
            currentPage: 1,
            multiplier: null,
            mobileNavigation: 0
        };

    }


    API = (pageNumber) => {
        usersAPI.getUsers(this.state.pageSize, (this.state.pageSize * pageNumber - this.state.pageSize)).then(response => {
            this.setState({
                isFetching: false,
                users: response.items,
                totalUsers: response.total,
                pagesCount: response.total / this.state.pageSize,
                multiplier: this.state.pageSize * this.state.currentPage - this.state.pageSize
            });

            let pages = [];
            for (let i = 1; i <= response.total / this.state.pageSize; i++) {
                pages.push(i);
            }
            this.setState({
                pages: pages
            });
        });
    };

    onPageChange = pageNumber => {
        this.setState({
            currentPage: pageNumber
        });
        this.API(pageNumber);
        this.scrollToTop(600);
    };

    scrollToTop = (scrollDuration) => {
        const scrollHeight = window.scrollY,
            scrollStep = Math.PI / (scrollDuration / 15),
            cosParameter = scrollHeight / 2;
        let scrollCount = 0,
            scrollMargin,
            scrollInterval = setInterval(function () {
                if (window.scrollY !== 0) {
                    scrollCount = scrollCount + 1;
                    scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                    window.scrollTo(0, (scrollHeight - scrollMargin));
                } else clearInterval(scrollInterval);
            }, 15);
    };

    changePaginationOnMobile = () => {
        this.setState({windowWidth: window.outerWidth});
        this.state.windowWidth < 421 ? this.setState({mobileNavigation: 1}) : this.setState({mobileNavigation: 0});
    };

    componentDidMount() {
        this.API(1);
        window.onload = () => {
            this.changePaginationOnMobile();
        };
        window.onresize = () => {
            this.changePaginationOnMobile();
        };
    }

    render() {


        return (
            <div className="fullscreen">
                <section className="fullscreen-wrapper">
                    <Header/>
                    <Breadcrumbs/>
                    {!this.state.isFetching ? (
                        <UsersTable users={this.state.users} multiplier={this.state.multiplier}/>) : (<Preloader/>)}
                </section>
                <section className="fullscreen-bottom">
                    {!this.state.isFetching ? (
                        <section className="pagination">
                            <div className="pagination-wrap wrap">

                                <div onClick={() => {
                                    this.onPageChange(1)
                                }}
                                     className={`pagination-back icon-chevronBold ${this.state.currentPage === 1 ? "disabled" : ""}`}/>
                                <div className="pagination-numbers">
                                    {this.state.pages
                                        .slice(this.state.currentPage >= (5 - this.state.mobileNavigation) ? this.state.currentPage - (4 - this.state.mobileNavigation) : 0, this.state.currentPage + (3 - this.state.mobileNavigation))
                                        .map(p => {
                                            return (<div onClick={() => {
                                                this.onPageChange(p)
                                            }} key={p}
                                                         className={`pagination-num${p === this.state.currentPage ? " active" : ""}`}>{p}</div>)
                                        })
                                    }
                                </div>
                                <div onClick={() => {
                                    this.onPageChange(this.state.pagesCount)
                                }}
                                     className={`pagination-next icon-chevronBold ${this.state.currentPage === this.state.pagesCount ? "disabled" : ""}`}/>
                            </div>
                        </section>
                    ) : (<Preloader/>)}
                    <Footer/>
                </section>
            </div>
        );
    }
}

