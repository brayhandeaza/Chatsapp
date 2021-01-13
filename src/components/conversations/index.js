import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Messages from "./messages"
import NewMessage from "./NewMessage"

    class Conversations extends Component {
        constructor(props) {
            super(props)
            this.state = {}
        }

        render() {
            return (
                <div className="Conversations">
                    <Messages/>
                    <NewMessage/>
                </div>
            )
        }
    }

const mapStateToProps = (state,) => {
    return { state }
}

export default connect(mapStateToProps)(Conversations)