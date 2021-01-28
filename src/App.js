import React, { Component } from "react"
import { connect } from 'react-redux'

// Component
import Chats from './components/chats/'
import Conversations from './components/conversations/'

// Styles
import './styles/config.scss'
import './styles/App.css'
import './styles/Chats.scss'
import './styles/Conversations.scss'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="App">
				<Chats />
				<Conversations />
			</div>
		)
	}
}

function mapStateToProps(state, prop) {
	return { state, prop }
}

export default connect(mapStateToProps)(App)
