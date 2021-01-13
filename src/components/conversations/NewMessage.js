import React, { Component } from 'react'
import { ReactSVG } from 'react-svg'

class NewMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowSize: {
                width: 0,
                height: 0
            }
        }
    }

    hnaldeResize = () => {
        window.addEventListener("resize", (e) => {
            let height = window.innerHeight
            let width = window.innerWidth
            this.setState({
                windowSize: {
                    height,
                    width: width - 375
                }
            })
        })
    }

    handleWhenIsLoaded = () => {
        window.addEventListener('load', (e) => {
            let height = window.innerHeight
            let width = window.innerWidth
            this.setState({
                windowSize: {
                    height,
                    width: width - 375
                }
            })
        })
    }

    componentDidMount() {
        this.hnaldeResize()
        this.handleWhenIsLoaded()
    }

    render() {
        const { width } = this.state.windowSize
        return (
            <div className="NewMessage" style={{ width }}>
                <div className="attach">
                    <ReactSVG className="logo" src="assets/icons/attach.svg" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Whisper something to Addy..." />
                    <ReactSVG className="logo" src="assets/icons/sticker.svg" />
                    <ReactSVG className="logo" src="assets/icons/emoji.svg" />
                </div>
                <div className="like">
                    <ReactSVG className="logo" src="assets/icons/like.svg" />
                </div>
            </div>
        )
    }
}

export default NewMessage