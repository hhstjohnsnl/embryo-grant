import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'I build',
    services: [
      'websites', 'webapps', 'beautiful UIs'
    ],
    button: `Let's talk!`
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
  ]
}

export default (props) => <IndexPage messages={messages} locale='en'/>
