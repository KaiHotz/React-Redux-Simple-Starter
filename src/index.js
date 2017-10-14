import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/App'

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
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default
    render(App)
  })
}
