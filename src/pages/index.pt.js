import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'Eu crio',
    services: [
      'websites', 'webapps', 'belas interfaces'
    ]
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
  ]
}

export default (props) => <IndexPage messages={messages} />
