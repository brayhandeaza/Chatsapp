import React, { Component } from 'react'
import { connect } from 'react-redux'
import emoji from "node-emoji"

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
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
                messages: [],
                windowSize: {
                    height,
                    width: width - 375
                }
            })
        })
    }

    filtrarPorID = (obj, id) => {
        if ('id' in obj && obj.id === id && !isNaN(obj.id)) {
            return true;
        } else {
            return false;
        }
    }


    componentDidMount() {
        this.hnaldeResize()
        this.handleWhenIsLoaded()
    }

    render() {
        const scroll = document.querySelector('.scroll-to-bottom')
        
        const { width } = this.state.windowSize
        let { messages } = this.props.state.conversations
        messages = messages || []
        return (
            <div className="Messages" style={{ width }}>
                {messages.map((message, key) => (
                    <div key={key} div className="message-box" style={message.userId === 1 ? styles.right : styles.left}>
                        <div className={`message ${message.userId === 1 ? "isMe" : "isNotMe"}`}>
                            <span>{emoji.emojify(message.message)}</span>
                        </div>
                        {key < messages.length - 1 && message.userId !== messages[key + 1].userId ?
                            <div className="profile">
                                <img src={`assets/img/${"bp"}.jpg`} alt="profile" />
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