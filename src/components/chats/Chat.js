import React, { Component } from 'react'
import { connect } from 'react-redux';
import emoji from "node-emoji"
import moment from "moment"
import io from 'socket.io-client'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            imgUrl: '',
            lastMessage: '',
            messageDate: ''
        }
    }

    handleOnClick = (e) => {
        const sc = document.querySelectorAll(".Chat")
        const { conversation } = this.props.chat

        sc.forEach(chat => {
            chat.classList.remove("isOn")
        })
        e.currentTarget.classList.add("isOn")

        this.props.dispatch({ type: "SET_CONVERSATION_MESSAGE", payload: { id: conversation.id } })
        this.props.dispatch({ type: "GET_CONVERSATION_MESSAGE" })

        this.ws = io("http://localhost:5000/")
        this.ws.emit("messagesId", conversation.id)
        this.ws.on("messages", (_messages) => {

            this.props.dispatch({ type: "GET_CONVERSATION_MESSAGE", payload: _messages[0].messages })
        })

    }

    handleChatData = () => {
        const { chat } = this.props
        this.setState({
            fullName: chat.conversation.users[0].fullName,
            imgUrl: "/assets/img/sf.jpeg",
            lastMessage: chat.conversation.messages[chat.conversation.messages.length - 1].message,
            messageDate: chat.conversation.messages[chat.conversation.messages.length - 1].updatedAt
        })
    }


    componentDidMount() {
        this.handleChatData()
    }


    render() {
        const { fullName, imgUrl, lastMessage, messageDate } = this.state
        return (
            <div key={this.props.key} className="Chat" onClick={this.handleOnClick}>
                <div className="image">
                    <img src={imgUrl} alt="pc" />
                </div>
                <div className="title-and-message">
                    <span>{fullName}</span>
                    <span>{emoji.emojify(lastMessage).substring(0, 23)}</span>
                </div>
                <div className="time">
                    <p>{moment(messageDate).fromNow()}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { state }
}
export default connect(mapStateToProps)(Chat)