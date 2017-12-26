import React from 'react'
import Badges from '../../components/Badges'

const About = (props) => {
  const messages = props.messages
  if (messages) {
    return (
      <div>
        <h1>{messages.title}</h1>
        <div className="separator"></div>
        <section className="mb-3">
          {messages.description}
        </section>
        <h2>{messages.tech}</h2>
        <Badges skills={['React', 'GraphQL', 'Apollo', 'Redux',  'Jest', 'webpack', 'SASS', 'Git', 'Node.js']} />
      </div>
    )
  } return (<div />)
}

export default About
