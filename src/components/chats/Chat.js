import React, { Component } from 'react'
import { connect } from 'react-redux';
import emoji from "node-emoji"

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleOnClick = (e) => {
        const sc = document.querySelectorAll(".Chat")
        sc.forEach(chat => {
            chat.classList.remove("isOn")
        })
        e.currentTarget.classList.add("isOn")
    }

    render() {
        const { chat, key } = this.props
        const { conversations } = this.props.state.conversations
        let rKey = Math.floor(Math.random() * 10)
        return (
            <div key={key} className="Chat" onClick={this.handleOnClick}>
                <div className="image">
                    <img src={chat.url} alt="pc" />
                </div>
                <div className="title-and-message">
                    <span>{chat.title}</span>
                    <span>{emoji.emojify(conversations[rKey].message).substring(0, 23)}</span>
                </div>
                <div className="time">
                    <p>Yesterday</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { state }
}
export default connect(mapStateToProps)(Chat)