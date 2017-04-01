import React, { PropTypes } from 'react'
import Home from './Home'

const App = React.createClass({
  render () {
    return (
      <div className="container">
        <div className="row">
          <aside className="col-sm-12 col-md-3 sidebar">
            <p className="text-uppercase"><strong>Mateus Dal Bianco</strong><br/>Desenvolvedor front-end</p>
            <p className="text-uppercase"></p>
          </aside>
          <div className="col-sm-12 col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})

export default App
