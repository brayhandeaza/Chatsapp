import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Header from './Header'
import Search from './Search'
import Chat from './Chat'

class Chats extends Component {
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

    componentDidMount() {
        this.hnaldeResize()
        this.handleWhenIsLoaded()
    }

    render() {
        const { chats } = this.props.state.chats
        const { width, height } = this.state.windowSize
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