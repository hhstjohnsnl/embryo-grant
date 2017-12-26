import React from 'react'
import Contact from '../contact'

const messages = {
  title: 'Contato',
  form: {
    name: {
      label: 'Nome'
    },
    company: {
      label: 'Empresa'
    },
    email: {
      label: 'Email'
    },
    phone: {
      label: 'Telefone'
    },
    type: {
      label: 'Tipo de projeto',
      options: [
        'Selecione um serviço',
        'Website',
        'Webapp',
        'Loja virtual',
        'Template para email',
        'Outro'
      ]
    },
    budget: {
      label: 'Investimento',
      options: [
        'Selecione o orçamento disponível',
        'até R$1000',
        'R$1000 a R$2500',
        'R$2500 to R$5000',
        'R$5000+'
      ]
    },
    description: {
      label: 'Descrição',
      helper: 'Descreva o projeto e seus objetivos'
    },
    submit: {
      label: 'Enviar'
    }
  }
}

export default (props) => <Contact messages={messages} />
