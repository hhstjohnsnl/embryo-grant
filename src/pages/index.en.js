import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'I have an idea to',
    services: [
      'improve health efficiences', 
      'build med tech enterprise',
      'innovate health technology in Newfoundland and beyond'
    ],
    button: `Apply now`
  },
  services: [
    {
      emoji: '💡',
      title: 'What we want',
      description: (<p><strong>Early</strong> stage ideas, with relevance to the local health system</p>)
    },
    {
      emoji: '💸',
      title: 'What we offer',
      description: (<p>Grants worth up to <strong>$45,000</strong>, and <strong>mentorship</strong></p>)
    },
    {
      emoji: '🚀',
      title: 'Apply',
      description: (<p><strong>Submit</strong> your application by 13 May, 2018</p>)
    }
  ],
}

export default (props) => <IndexPage messages={messages} locale='en'/>
