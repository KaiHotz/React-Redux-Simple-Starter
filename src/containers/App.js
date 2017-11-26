import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import WithErrors from '@/src/hocs/WithErrors'
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

export default compose(
  WithErrors,
  connect(mapStateToProps, null)
)(App)
