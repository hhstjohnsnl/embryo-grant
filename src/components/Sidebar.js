import React, { PropTypes } from 'react'
import avatar from '../assets/img/avatar.jpg'
import Badges from './Badges.js'
import twitterLogo from '../assets/img/social/twitter.svg'
import githubLogo from '../assets/img/social/github.svg'
import instagramLogo from '../assets/img/social/instagram.svg'
import linkedinLogo from '../assets/img/social/linkedin.svg'

const Sidebar = React.createClass({
  render () {
    return (
      <aside className="sidebar">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-12">
            <img className="avatar" src={avatar} />
          </div>
          <div className="col-12 col-md-9 col-lg-12">
            <p className="lead">
              <strong className="text-uppercase">Mateus Dal Bianco</strong><br/>
              </p>
              <p>Co-fundador do <a href="http://tripby.org">tripby.org</a>. Desenvolvedor front-end.</p>
              <div className="separator" />
              <p>
              <a href="mailto:mateus@dalbinaco.com">mateus@dalbinaco.com</a>
              </p>
              <ul className="row" style={{padding: 0, listStyleType: 'none'}}>
              <li className="col" style={{flex: 0}}><a href="https://github.com/dalbinaco"><img src={githubLogo} alt="" height="24"/></a></li>
              <li className="col" style={{flex: 0}}><a href="https://linkedin.com/in/dalbinaco"><img src={linkedinLogo} alt="" height="24"/></a></li>
              <li className="col" style={{flex: 0}}><a href="https://instagram.com/dalbinaco"><img src={instagramLogo} alt="" height="24"/></a></li>
              <li className="col" style={{flex: 0}}><a href="https://twitter.com/dalbinaco"><img src={twitterLogo} alt="" height="24"/></a></li>
              </ul>
              </div>
            </div>
          </aside>
        )
      }
    })

    export default Sidebar
