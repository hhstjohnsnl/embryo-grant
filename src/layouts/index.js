import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'

import '../assets/styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="DALBINACO"
      meta={[
        { name: 'description', content: 'Co-fundador do tripby.org. Desenvolvedor front-end. Escrevo interfaces precisas, interativas e consistentes' },
        { name: 'keywords', content: 'frontend development, front-end, javascript, react, redux, node.js' },
      ]}
    />
    <div className="container" style={{paddingTop:64}}>
        <div className="row align-items-start">
          <div className="col-12 col-lg-4"><Sidebar /></div>
          <main className="col-12 col-lg-8">
            {children()}
          </main>
        </div>
      </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
