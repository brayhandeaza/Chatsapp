import React, { Component } from 'react'
import { ReactSVG } from 'react-svg'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="Header">
                <div className="profile">
                    <div className="online">
                        <ReactSVG className="logo" src="assets/icons/online.svg" />
                        <img src="assets/img/rr.jpg" alt="profile"/>
                    </div>
                    <div className="name">
                        <span>Chriss Hunter</span>
                        <span>Active yesterday</span>
                    </div>
                </div>  
                <div className="more">
                    <ReactSVG className="logo" src="assets/icons/audio-call.svg" />
                    <ReactSVG className="logo" src="assets/icons/video-call.svg" />
                </div>              
            </div>
        )
    }
}

export default Header