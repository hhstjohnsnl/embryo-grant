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
  ],
  tech: {
    title: 'Technologies',
    technologies: [
      {
        icon: 'react',
        url: 'https://reactjs.org/',
        color: '#61DAFB'
      },
      {
        icon: 'redux',
        url: 'https://redux.js.org/',
        color: '#61DAFB'
      },
      {
        icon: 'nodejs',
        url: 'https://nodejs.org/',
        color: '#61DAFB'
      },
      {
        icon: 'webpack',
        url: 'https://webpack.js.org/',
        color: '#61DAFB'
      },
      {
        icon: 'sass',
        url: 'https://sass-lang.com/',
        color: '#61DAFB'
      },
      {
        icon: 'gatsby',
        url: 'https://gatsbyjs.org/',
        color: '#61DAFB'
      },
      {
        icon: 'docker',
        url: 'https://gatsbyjs.org/',
        color: '#61DAFB'
      },
      {
        icon: 'git',
        url: 'https://git-scm.com/',
        color: '#61DAFB'
      },
      {
        icon: 'graphql',
        url: 'https://graphql.org/',
        color: '#61DAFB'
      },
    ]
  },
}

export default (props) => <IndexPage messages={messages} locale='en'/>
