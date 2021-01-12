import React, { Component } from 'react'
import { ReactSVG } from 'react-svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Header">
                <div className="logo">
                    <ReactSVG src="assets/icons/logo.svg"/>
                    <h1>CChat</h1>
                </div>
                <div className="logout">
                    <h1>Logout</h1>
                    <ReactSVG src="assets/icons/logout.svg"/>
                </div>
            </div>
        )
    }
}

export default Header