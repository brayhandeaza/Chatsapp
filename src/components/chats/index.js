import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

// Components
import Header from './Header'
import Search from './Search'
import Chat from './Chat'

class Chats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            conversations: [],
            messages: [],
            windowSize: {
                width: 0,
                height: 0
            }
        }
        this.ws = io("http://localhost:5000/")
    }
    handleResize = () => {
        window.addEventListener("resize", (e) => {
            let height = window.innerHeight
            let width = window.innerWidth
            this.setState({
                windowSize: {
                    height,
                    width
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
                    width
                }
            })
        })
    }

    fetchConversations = () => {
        this.ws.emit("conversationId", 1)
        this.ws.on("conversations", (_messages) => {
            const { users_conversations } = _messages[0]

            this.setState({
                conversations: users_conversations
            })
        })
    }

    componentDidMount() {
        this.handleResize()
        this.handleWhenIsLoaded()
        this.fetchConversations()
    }

    render() {
        const { height } = this.state.windowSize
        const { conversations } = this.state

        return (
            <div className="Chats">
                <Header />
                <Search />
                <div className="Scroll" style={{ height: height - 145 }}>
                    {conversations.map((chat, key) => (
                        <Chat chat={chat} key={key} />
                    ))}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { state }
}
export default connect(mapStateToProps)(Chats)