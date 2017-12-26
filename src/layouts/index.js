import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'

import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import '../assets/styles/main.scss'

import messages from './messages'

import twitterLogo from '../assets/img/social/twitter.svg'
import githubLogo from '../assets/img/social/github.svg'
import instagramLogo from '../assets/img/social/instagram.svg'
import linkedinLogo from '../assets/img/social/linkedin.svg'


addLocaleData([...en, ...pt,])

const TemplateWrapper = ({ children }) => {
  const locale = typeof window == `undefined` ? 'en' : window.location.pathname.split('/')[1]
  const defaultLocale = 'en'
  return (
  <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
    <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
      <Helmet
        htmlAttributes={{
          lang: locale || defaultLocale
        }}
        title={messages[locale || defaultLocale].meta.title}
        meta={[
          { name: 'description', content: messages[locale || defaultLocale].meta.description },
          { name: 'keywords', content: 'frontend development, front-end, javascript, react, redux, node.js' },
        ]}>
      </Helmet>
      <header>
        <div className="container py-4 py-md-5">
          <div className="d-flex align-items-center">
            <Link to={`/${locale}/`}><h3 className="mb-0" style={{color: 'white'}}>dlbn.co</h3></Link>
            <nav style={{flex: 1}}>
              <ul className="d-flex justify-content-end list-unstyled m-0 p-0">
                <li><Link to={`/${locale}/projects`}>{messages[locale || defaultLocale].nav.projects}</Link></li>
                <li><Link to={`/${locale}/about`}>{messages[locale || defaultLocale].nav.about}</Link></li>
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
      <footer className="pt-5 pb-3">
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
  </IntlProvider>
)}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
