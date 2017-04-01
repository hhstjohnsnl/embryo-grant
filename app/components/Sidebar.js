import React, { PropTypes } from 'react'
import avatar from '../assets/img/avatar.jpg'
import Badges from './Badges.js'

const Sidebar = React.createClass({
  render () {
    return (
      <aside className="sidebar">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-12">
            <img className="avatar" src={avatar} />
          </div>
          <div className="col-12 col-md-9 col-lg-12"><p className="text-uppercase">
            <strong>Mateus Dal Bianco</strong>
            <br/>Desenvolvedor front-end
            </p>
            <Badges skills={['Javascript', 'React', 'webpack', 'SASS', 'git']} />
            <p><a href="mailto:mateus@dalbinaco.com">mateus@dalbinaco.com</a><br/>+55 32 9 8876-8324</p>
          </div>
        </div>
      </aside>
    )
  }
})

export default Sidebar
