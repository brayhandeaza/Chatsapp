import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Header from './Header'
import Search from './Search'
import Chat from './Chat'
import axios from 'axios'

class Chats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chats: [],
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
                chats: JSON.parse(data.data).conversations[0].users_conversations
            })
            console.log(JSON.parse(data.data).conversations[0].users_conversations)
        })
    }

    componentDidMount() {
        this.handleSocket()
        this.hnaldeResize()
        this.handleWhenIsLoaded()
        
    }

    render() {
        const { chats } = this.state
        const { height } = this.state.windowSize
        return (
            <div className="Chats">
                <Header />
                <Search />
                <div className="Scroll" style={{ height: height - 145 }}>
                    {chats.map((chat, key) => (
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