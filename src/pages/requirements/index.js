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
        <div className="d-flex align-items-center">
          <h1 style={{ alignSelf: 'flex-start' }}>{messages.title}</h1>
          <div style={{ flex: 1, justifyContent: 'flex-end'}}>
            <ul className="d-flex justify-content-end list-unstyled m-0 p-0" style={{ flexDirection: 'column'}} >
              <li style={{ marginLeft: 'auto', padding: 0 }} >Questitons? Join us on <a href="https://slack.hhstjohnsnl.com">slack</a></li>
              <li style={{ marginLeft: 'auto', padding: 0 }} >or email stjohnsnl@hackinghealth.ca</li>
            </ul>
          </div>
        </div>
        <div className="separator" />
        <section className="mb-3">{messages.description}</section>
      </div>
    )
  }
  return <div />
}

export default Requirements
