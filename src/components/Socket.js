import React, { Component } from 'react'
import { connect } from 'react-redux'
class Socket extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    componentDidMount() {
        const ws = new WebSocket('ws://localhost:5000')

        ws.addEventListener('open', function open() {
            ws.send("JSON.stringify({id: 1})")
        })

        ws.addEventListener('message', async function incoming(data) {
            console.log(data)
            
        })
    }

    render() {
        return (
            <div className="Socket">
                <h1>WebSocket</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {state}
}

export default connect(mapStateToProps)(Socket)