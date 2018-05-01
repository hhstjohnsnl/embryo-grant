import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'I have an idea to',
    services: [
      'improve health efficiences',
      'build med tech enterprise',
      'innovate health technology in Newfoundland and Labrador and beyond.',
    ],
    button: `Apply now`,
  },
  services: [
    {
      emoji: '💡',
      name: 'requirements',
      title: 'What we want',
      description: (
        <p>
          <strong>Early stage ideas</strong> with relevance to the{' '}
          <strong>local health system</strong>
        </p>
      ),
    },
    {
      emoji: '💸',
      name: 'prizes',
      title: 'What we offer',
      description: (
        <p>
          <strong>Grants</strong> worth up to <strong>$45,000</strong> and{' '}
          <strong>mentorship</strong>
        </p>
      ),
    },
    {
      emoji: '🚀',
      name: 'apply',
      title: 'Apply',
      description: (
        <p>
          Submit your application by <strong>May 21, 2018</strong>
        </p>
      ),
    },
  ],
}

export default props => <IndexPage messages={messages} locale="en" />
