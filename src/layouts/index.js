import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../assets/styles/main.scss'

import twitterLogo from '../assets/img/social/twitter.svg'
import githubLogo from '../assets/img/social/github.svg'
import instagramLogo from '../assets/img/social/instagram.svg'
import linkedinLogo from '../assets/img/social/linkedin.svg'

const TemplateWrapper = ({ children }) => (
  <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
    <Helmet
      title="dlbn.co — Front-end web development"
      meta={[
        { name: 'description', content: 'Front-end developer. I build websites, webapps and beautiful UIs using the latest technology.' },
        { name: 'keywords', content: 'frontend development, front-end, javascript, react, redux, node.js' },
      ]}
    />
    <header>
      <div className="container py-4 py-md-5">
        <div className="d-flex align-items-center">
          <Link to="/"><h3 className="mb-0" style={{color: 'white'}}>dlbn.co</h3></Link>
          <nav style={{flex: 1}}>
            <ul className="d-flex justify-content-end list-unstyled m-0 p-0">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div className="container" style={{flex: 1}}>
      <main>
        {children()}
      </main>
    </div>
    <footer className="py-3">
      <div className="container">
        <ul className="row" style={{padding: 0, listStyleType: 'none'}}>
        <li className="col" style={{flex: 0}}><a href="https://github.com/dalbinaco"><img src={githubLogo} alt="" height="18"/></a></li>
        <li className="col" style={{flex: 0}}><a href="https://linkedin.com/in/dlbnco"><img src={linkedinLogo} alt="" height="18"/></a></li>
        <li className="col" style={{flex: 0}}><a href="https://instagram.com/dlbnco"><img src={instagramLogo} alt="" height="18"/></a></li>
        <li className="col" style={{flex: 0}}><a href="https://twitter.com/dlbnco"><img src={twitterLogo} alt="" height="18"/></a></li>
        </ul>
        <a href="mailto:mateus@dalbinaco.com">mateus@dalbinaco.com</a>
      </div>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
