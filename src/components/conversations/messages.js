import React, { Component } from 'react'
import { connect } from 'react-redux'
import emoji from "node-emoji"

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            conversations: [],
            windowSize: {
                width: 0,
                height: 0
            }
        }
        this.emj = emoji.emojify('I :heart: :coffee:!')
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
                messages: [],
                windowSize: {
                    height,
                    width: width - 375
                }
            })
        })
    }

    handleSocket = () => {
        const ws = new WebSocket('ws://localhost:5000')

        ws.addEventListener('open', () => {
            ws.send(JSON.stringify({
                conversation: {
                    id: 1
                }
            }))
        })

        ws.addEventListener('message', async (data) => {
            this.setState({
                conversations: JSON.parse(data.data).conversations[0].users_conversations
            })
            console.log(JSON.parse(data.data).conversations[0].users_conversations)
        })
    }

    componentDidMount() {
        // this.handleSocket()
        this.hnaldeResize()
        this.handleWhenIsLoaded()
    }

    render() {
        const { width } = this.state.windowSize
        // const { conversations } = this.state
        // const { conversations } = this.props.state.conversations
        const conversations = []
        return (
            <div className="Messages" style={{ width }}>
                {conversations.map((message, key) => (
                    <div key={key} div className="message-box" style={message.id === 1 ? styles.right : styles.left}>
                        <div className={`message ${message.id === 1 ? "isMe" : "isNotMe"}`}>
                            <span>{emoji.emojify(message.message)}</span>
                        </div>
                        {key < conversations.length - 1 && message.id !== conversations[key + 1].id ?
                            <div className="profile">
                                <img src={`assets/img/${message.imageUrl}.jpg`} alt="profile" />
                            </div> : <div className="profile" />
                        }
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state,) => {
    return { state }
}

const styles = {
    right: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    left: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        alignItems: "flex-start",
    }
}

export default connect(mapStateToProps)(Messages)