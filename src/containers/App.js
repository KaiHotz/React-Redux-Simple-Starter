import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExampleComponent from '@/src/components/ExampleComponent'

import '@/styles/styles.scss'

class App extends Component {
  render () {
    return (
      <ExampleComponent />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    test: 'test'
  }
}

export default connect(mapStateToProps, null)(App)
