import React from 'react';

export const UsersTable = () => {
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
                        <div className="users-row">
                            <div className="users-item">1</div>
                            <div className="users-item">Samuel</div>
                            <div className="users-item">Frost</div>
                            <div className="users-item">
                                <span>sirious.sam@gmail.com</span>
                            </div>
                            <div className="users-item">
                                <span>male</span>
                            </div>
                            <div className="users-item">
                                <span>192.168.32.05</span>
                            </div>
                            <div className="users-item">
                                <span>290 883</span>
                            </div>
                            <div className="users-item">
                                <span>290 883</span>
                            </div>
                        </div>
                        <div className="users-row">
                            <div className="users-item">2</div>
                            <div className="users-item">Samuel</div>
                            <div className="users-item">Frost</div>
                            <div className="users-item">
                                <span>sirious.sam@gmail.com</span>
                            </div>
                            <div className="users-item">
                                <span>male</span>
                            </div>
                            <div className="users-item">
                                <span>192.168.32.05</span>
                            </div>
                            <div className="users-item">
                                <span>290 883</span>
                            </div>
                            <div className="users-item">
                                <span>290 883</span>
                            </div>
                        </div>
                        <div className="users-row">
                            <div className="users-item">3</div>
                            <div className="users-item">Samuel</div>
                            <div className="users-item">Frost</div>
                            <div className="users-item">
                                <span>sirious.sam@gmail.com</span>
                            </div>
                            <div className="users-item">
                                <span>male</span>
                            </div>
                            <div className="users-item">
                                <span>192.168.32.05</span>
                            </div>
                            <div className="users-item">
                                <span>290 883</span>
                            </div>
                            <div className="users-item">
                                <span>290 883</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

