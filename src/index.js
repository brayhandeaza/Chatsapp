import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

// Redux
import thunk from 'redux-thunk'
const { createStore, applyMiddleware, combineReducers } = require('redux')
const { Provider } = require('react-redux')
const { chats, conversations } = require("./redux/reducers/index")

const reducer = combineReducers({
	chats,
	conversations
})


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
