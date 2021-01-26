import React, { Component } from 'react'
import { connect } from 'react-redux';
import emoji from "node-emoji"
import moment from "moment"

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
        sc.forEach(chat => {
            chat.classList.remove("isOn")
        })
        e.currentTarget.classList.add("isOn")
    }

    handleChatData = () => {
        const { chat, key } = this.props
        console.log(chat.conversation.messages[chat.conversation.messages.length - 1].updatedAt);

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
        const { key } = this.props
        const { conversations } = this.props.state.conversations
        const { fullName, imgUrl, lastMessage, messageDate } = this.state

        let rKey = Math.floor(Math.random() * 10)
        return (
            <div key={key} className="Chat" onClick={this.handleOnClick}>
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