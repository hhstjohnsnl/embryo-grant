import React from 'react'
import Contact from '../contact'

const messages = {
  title: 'Contact',
  form: {
    name: {
      label: 'Name'
    },
    company: {
      label: 'Company'
    },
    email: {
      label: 'Email'
    },
    phone: {
      label: 'Telephone'
    },
    type: {
      label: 'Project type',
      options: [
        'Select a service',
        'Website',
        'Webapp',
        'E-commerce',
        'Email template',
        'Other'
      ]
    },
    budget: {
      label: 'Budget',
      options: [
        'Select your budget range',
        'up to $300',
        '$300 to $1000',
        '$1000 to $2000',
        '$2000+'
      ]
    },
    description: {
      label: 'Description',
      helper: 'Describe your project and goals'
    },
    submit: {
      label: 'Submit',
      loading: 'Sending...',
      sent: 'Message sent! We will return to you soon.'
    },
    errors: {
      invalidMail: 'Please use a valid email address'
    }
  }
}

export default (props) => <Contact messages={messages} />
