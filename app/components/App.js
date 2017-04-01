import React, { PropTypes } from 'react'
import Home from './Home'
import Sidebar from './Sidebar';

const App = React.createClass({
  render () {
    return (
      <div className="container" style={{paddingTop:64}}>
        <div className="row">
          <div className="col-12 col-lg-3"><Sidebar /></div>
          <main className="col-12 col-lg-9">
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
})

export default App
