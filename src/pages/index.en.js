import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'I have an idea to',
    services: [
      'improve health inefficiences', 
      'build med tech enterprise',
      'innovate health technology in Newfoundland and beyond'
    ],
    button: `Apply now`
  },
  services: [
    {
      emoji: '📱',
      title: 'Responsive layouts',
      description: (<p>Looks great on <strong>any screen</strong></p>)
    },
    {
      emoji: '🚀',
      title: 'High performance',
      description: (<p>90+ score guarantee on PageSpeed for <strong>better speed and Google rank</strong></p>)
    },
    {
      emoji: '🔌',
      title: 'Integrations',
      description: (<p><strong>Any API Integrations</strong> you need</p>)
    }
  ],
}

export default (props) => <IndexPage messages={messages} locale='en'/>
