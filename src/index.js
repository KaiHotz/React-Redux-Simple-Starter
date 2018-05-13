import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import configureStore from './store'
import App from './App'

const history = createBrowserHistory()
const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>
    , document.querySelector('.container')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default
    render(App)
  })
}
