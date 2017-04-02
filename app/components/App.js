import React, { PropTypes } from 'react'
import Home from './Home'
import Sidebar from './Sidebar';

const App = React.createClass({
  render () {
    return (
      <div className="container" style={{paddingTop:64}}>
        <div className="row align-items-start">
          <div className="col-12 col-lg-4"><Sidebar /></div>
          <main className="col-12 col-lg-8">
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
})

export default App
