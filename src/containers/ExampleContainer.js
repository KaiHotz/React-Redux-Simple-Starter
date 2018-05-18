import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { requestOne } from '@/actions'

class ExampleContainer extends Component {
  static propTypes = {
    posts: PropTypes.object,
    requestOne: PropTypes.func.isRequired
  }

  static defaultProps = {
    posts: {}
  }

  componentDidMount () {
    this.props.requestOne('1')
  }

  render () {
    const { posts } = this.props
    return (
      <div>
        <h1>Example Container</h1>
        <br />
        <div className='row'>
          <div className='card'>
            <h4 className='card-header'>
              Example Data:
            </h4>
            <div className='card-body'>
              <h4 className='card-title'>
                {posts.title}
              </h4>
              <p className='card-text'>
                {posts.body}
              </p>
              <Link
                to='/exampleComponent'
                className='btn btn-warning'
              >
                Link to Example Component
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

export default compose(
  connect(mapStateToProps, { requestOne })
)(ExampleContainer)
