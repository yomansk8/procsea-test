import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import throttle from 'lodash.throttle'

import App from './App'
import { loadState, saveState } from './localStorage'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker'

import './index.css'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

store.subscribe(
  throttle(() => {
    saveState(store.getState())
  }),
  1000,
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
