import React, { PropTypes } from 'react'
import Badges from './Badges.js'
import Projects from './Projects.js'

const Home = React.createClass({
  render () {
    return (
      <div>
        <div className="separator"></div>
        <section>
          <h1>Projetos</h1>
          <Projects />
        </section>
      </div>
    )
  }
})

export default Home
