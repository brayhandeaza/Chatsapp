import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Header from "./Header"
import Messages from "./Messages"
import Footer from "./Footer"

class Conversations extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleScrollToBottom = () => {
        const scroll = document.querySelector('.scroll-to-bottom')
        scroll.scrollTop = scroll.scrollHeight
    }

    componentDidMount() {
        this.handleScrollToBottom()
    }

    render() {
        return (
            <div className="Conversations">
                <Header />
                <div className="scroll-to-bottom">
                    <Messages />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state,) => {
    return { state }
}

export default connect(mapStateToProps)(Conversations)