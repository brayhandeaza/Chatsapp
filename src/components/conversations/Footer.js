import React, { Component } from 'react'
import { ReactSVG } from 'react-svg'
import emoji from 'node-emoji';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
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

    handleOnChange = (e) => {
        console.log(emoji.emojify(e.target.value));
        
        this.setState({
            inputValue: emoji.emojify(e.target.value)
        })
    }

    componentDidMount() {
        this.hnaldeResize()
        this.handleWhenIsLoaded()
    }

    render() {
        const { width } = this.state.windowSize
        const { inputValue } = this.state
        return (
            <div className="Footer" style={{ width }}>
                <div className="attach">
                    <ReactSVG className="logo" src="assets/icons/attach.svg" />
                </div>
                <div className="input-box">
                    <input onChange={this.handleOnChange} value={inputValue} type="text" placeholder="Whisper something to Addy..." />
                    <ReactSVG className="logo" src="assets/icons/microphone.svg" />
                    <ReactSVG className="logo" src="assets/icons/emoji.svg" />
                </div>
                <div className="like">
                    <ReactSVG className="logo" src="assets/icons/like.svg" />
                </div>
            </div>
        )
    }
}

export default Footer