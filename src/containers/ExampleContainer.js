import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { requestOne } from '../actions'

export const ExampleContainer = ({ posts }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestOne('1'))
  }, [dispatch])

  return (
      <div>
        <h1>Example Container</h1>
        <br />
        <div className="row">
          <div className="card">
            <h4 className="card-header">
              Example Data:
              </h4>
            <div className="card-body">
              <h4 className="card-title">
                {posts.title}
              </h4>
              <p className="card-text">
                {posts.body}
              </p>
              <Link
                to="/exampleComponent"
                className="btn btn-warning"
              >
                Link to Example Component
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

ExampleContainer.propTypes = {
  posts: PropTypes.object,
  requestOne: PropTypes.func.isRequired,
}

ExampleContainer.defaultProps = {
  posts: {},
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps, { requestOne })(ExampleContainer)
