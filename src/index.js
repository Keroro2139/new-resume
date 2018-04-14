import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { HashRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'

import './index.css'
import App from './components/App'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root')
)
