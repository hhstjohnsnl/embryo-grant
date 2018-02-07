import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'Eu crio',
    services: [
      'websites', 'webapps', 'belas interfaces'
    ],
    button: 'Vamos conversar!'
  },
  services: [
    {
      emoji: '📱',
      title: 'Layouts responsivos',
      description: (<p>Funcionam perfeitamente em <strong>qualquer tela</strong></p>)
    },
    {
      emoji: '🚀',
      title: 'Alta performance',
      description: (<p>Nota 90+ garantida no PageSpeed para <strong>maior performance e melhor rankeamento no Google</strong></p>)
    },
    {
      emoji: '🔌',
      title: 'Integrações',
      description: (<p><strong>Qualquer integração</strong> via API que você queira</p>)
    }
  ],
  tech: {
    title: 'Tecnologias',
    technologies: [
      {
        icon: 'react',
        url: 'https://reactjs.org/',
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
        icon: 'graphql',
        url: 'https://graphql.org/',
        color: '#61DAFB'
      },
      {
        icon: 'git',
        url: 'https://git-scm.com/',
        color: '#61DAFB'
      },
    ]
  },
}

export default (props) => <IndexPage messages={messages} locale='pt'/>
