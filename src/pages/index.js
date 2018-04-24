import React from 'react'
import Link from 'gatsby-link'
import Typist from 'react-typist'
import { withPrefix } from 'gatsby-link'
import SimpleIcon from '../components/SimpleIcon'

import 'react-typist/dist/Typist.css'

class IndexPage extends React.Component {
  constructor() {
    super()
  }
  trackCta() {
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', 'Contact', 'Click CTA to go to contact page')
    }
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      if (window.location.pathname === '/') {
        if (navigator.language === 'pt-BR' || navigator.language === 'pt') {
          window.___history.replace('/pt/')
        } else {
          window.___history.replace('/en/')
        }
      }
    }
  }
  render() {
    const messages = this.props.messages
    if (messages) {
      return (
        <div>
          <section className="py-4 py-md-5">
            <div className="d-flex align-items-end">
              <h1>
                <Typist>
                  {messages.tagline.title}&nbsp;
                  <br className="d-md-none" />
                  {messages.tagline.services.map((service, index) => (
                    <div className="d-inline" key={index}>
                      <strong>{service}</strong>
                      {index === messages.tagline.services.length - 1 ? null : (
                        <Typist.Backspace count={service.length} delay={1000} />
                      )}
                    </div>
                  ))}
                </Typist>
              </h1>
            </div>
            <Link
              to={`/${this.props.locale}/contact`}
              className="btn btn-primary mt-3"
              style={{ fontSize: '1.1rem' }}
              onClick={this.trackCta}
            >
              {messages.tagline.button}
            </Link>
          </section>
          <div className="separator" />
          <section>
            <div className="row" style={{ lineHeight: 2 }}>
              {messages.services.map((service, index) => (
                <div className="col-12 col-md-4" key={index}>
                  <h3>{service.emoji}</h3>
                  <h3>
                    <Link to={`/${this.props.locale}/requirements`}>
                      {service.title}
                    </Link>
                  </h3>
                  {service.description}
                </div>
              ))}
            </div>
          </section>
        </div>
      )
    }
    return <div />
  }
}
export default IndexPage
