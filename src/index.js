import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

// Axios
axios.defaults.baseURL = "http://192.168.1.75:5000"

// Redux
const { createStore, combineReducers } = require('redux')
const { Provider } = require('react-redux')
const { chats, conversations } = require("./redux/reducers/index")

const reducer = combineReducers({
	chats,
	conversations
})


const store = createStore(reducer)
document.title = ""
ReactDOM.render(
	<React.StrictMode>
		<Provider hello={{ wid: 800}} store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
