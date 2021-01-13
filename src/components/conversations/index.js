import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollToBottom from 'react-scroll-to-bottom'

// Components
import Header from "./Header"
import Messages from "./Messages"
import Footer from "./Footer"

    class Conversations extends Component {
        constructor(props) {
            super(props)
            this.state = {}
        }

        render() {
            return (
                <div className="Conversations">
                    <Header/>
                    <div className="Scroll">
                        <ScrollToBottom className="scroll-to-bottom" mode={"bottom"}>
                            <Messages/>
                        </ScrollToBottom>
                    </div>
                    <Footer/>
                </div>
            )
        }
    }

const mapStateToProps = (state,) => {
    return { state }
}

export default connect(mapStateToProps)(Conversations)