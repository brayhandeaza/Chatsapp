import { connect } from 'react-redux';

// Component
import Chats from './components/chats/'
import Conversations from './components/conversations/'

// Styles
import './styles/config.scss'
import './styles/App.css'
import './styles/Chats.scss'
import './styles/Conversations.scss'


function App(props) {
	console.log(props);
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
