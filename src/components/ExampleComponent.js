import React from 'react'
import { Link } from 'react-router-dom'

const ExampleComponent = () => (
  <div>
    <Link
      to="/"
      className="btn btn-primary"
    >
      Back
    </Link>
    <h1>Example Component</h1>
  </div>
)

export default ExampleComponent
