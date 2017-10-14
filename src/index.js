import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './App'

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
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
