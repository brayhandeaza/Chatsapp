import { connect } from 'react-redux'
// import axios from 'axios'
import io from 'socket.io-client'

// Component
import Chats from './components/chats/'
import Conversations from './components/conversations/'

// Styles
import './styles/config.scss'
import './styles/App.css'
import './styles/Chats.scss'
import './styles/Conversations.scss'

// const fetchAxios = async () => {
// 	await axios.get('/').then(res => {
// 		console.log(res.data, "ok")
// 	})
// 	console.log("ok")
// }

function App(props) {
	const socket = io("http://localhost:5000/")
	socket.on("connection")

	return (
		<div className="App">
			<Chats />
			<Conversations />
		</div>
	)
}

function mapStateToProps(state) {
	return { state }
}
export default connect(mapStateToProps)(App)
