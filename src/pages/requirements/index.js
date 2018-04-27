import React from 'react'
import Badges from '../../components/Badges'
import Helmet from 'react-helmet'

const Requirements = props => {
  const messages = props.messages
  if (messages) {
    return (
      <div>
        <Helmet>
          <title>{messages.title}</title>
        </Helmet>
        <h1>{messages.title}</h1>
        <div className="separator" />
        <section className="mb-3">{messages.description}</section>
      </div>
    )
  }
  return <div />
}

export default Requirements
