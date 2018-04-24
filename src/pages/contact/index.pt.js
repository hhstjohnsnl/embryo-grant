import React from 'react'
import Contact from '../contact'

const messages = {
  title: 'Apply',
  form: {    
    name: {
      label: 'Name of primary applicant'
    },
    email: {
      label: 'Email of primary applicant'
    },
    company: {
      label: 'Company'
    },
    companyUrl: {
      label: 'Company url',
      helper: 'optional'
    },
    type: {
      label: 'Have you incorporated',
      helper: 'Incorporation is optional',
      options: [
        'Yes, in Newfoundland and Labrador',
        'Yes, in another Canadian province',
        'Yes, federally in Canada',
        'Yes, in another country',
        'No',
        'Other'
      ]
    },
    description: {
      label: 'Description',
      helper: 'Describe your project and goals'
    },
    budget: {
      label: 'Have you received fundning?',
      options: [
        'Yes, from the government',
        'Yes, from private sources',
        'Yes, from government and private sources',
        'No',
        'Other'
      ]
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
