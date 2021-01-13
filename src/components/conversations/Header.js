import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="Header">
                <div className="profile">
                    <img src="assets/img/rr.jpg"/>
                    <h1>Chriss Hunter</h1>
                </div>
            </div>
        )
    }
}

export default Header