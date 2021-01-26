import { connect } from 'react-redux'
// import axios from 'axios'

// Component
import Chats from './components/chats/'
import Conversations from './components/conversations/'
// import Socket from './components/Socket'

// Styles
import './styles/config.scss'
import './styles/App.css'
import './styles/Chats.scss'
import './styles/Conversations.scss'

const fetchAxios = async () => {
	const socket = new WebSocket("ws://localhost:5000")
	socket.addEventListener("open", () => {

	})

	// socket.send("Hello from client")
	socket.addEventListener("message", (data) => {
		console.log(data.data.data)
	})
}

function App(props) {
	fetchAxios()

	return (
		<div className="App">
			<Chats />
			<Conversations />
			{/* <Socket /> */}
		</div>
	)
}

function mapStateToProps(state) {
	return { state }
}
export default connect(mapStateToProps)(App)
