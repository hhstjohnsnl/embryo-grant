import React from 'react'
import Apply from '../apply'

const messages = {
  title: 'Apply',
  description: (
    <div>
      <p className="lead">
        Got an idea that solves a health related problem? Get the ball rolling
        with up to $45,000 in funding.
      </p>
    </div>
  ),
  button: 'Start an application',
  form: {
    name: {
      label: 'Name of primary applicant*',
      type: 'text',
    },
    email: {
      label: 'Email of primary applicant',
      type: 'email',
    },
    company: {
      label: 'Company',
    },
    companyUrl: {
      label: 'Company url',
      helper: 'optional',
      required: false,
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
        'Other',
      ],
    },
    description: {
      label: 'Description',
      helper: 'Describe your project and goals',
    },
    budget: {
      label: 'Have you received fundning?',
      options: [
        'Yes, from the government',
        'Yes, from private sources',
        'Yes, from government and private sources',
        'No',
        'Other',
      ],
    },
    submit: {
      label: 'Submit',
      loading: 'Sending...',
      sent: 'Message sent! We will return to you soon.',
    },
    errors: {
      invalidMail: 'Please use a valid email address',
    },
  },
}

const fields = [
  {
    id: 'name',
    label: 'Name of primary applicant',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email of primary applicant',
    type: 'email',
  },
  {
    id: 'company',
    label: 'Company',
  },
  {
    id: 'companyUrl',
    label: 'Company url',
    helper: 'optional',
  },
  {
    id: 'teamMembers',
    label: 'Team members and expertise',
    helper: 'List your team members and their areas of expertise',
    className: 'col-12',
    type: 'textarea',
    rows: 5,
  },
  {
    id: 'problem',
    label: 'Problem',
    helper:
      'What is the problem? Who experiences it? Who cares about it? How often does it happen? ',
    className: 'col-12',
    type: 'textarea',
    rows: 10,
  },
  {
    id: 'impact',
    label: 'Impact',
    helper:
      'What would be the impact on your customers if this problem is solved? What will be the impact on Newfoundland and Labrador? Will it scale outside  the province?',
    className: 'col-12',
    type: 'textarea',
    rows: 10,
  },
  {
    id: 'innovation',
    label: 'Innovation',
    helper: 'What is your health related innovation or solution?',
    className: 'col-12',
    type: 'textarea',
    rows: 10,
  },
  {
    id: 'duration',
    label: 'Duration',
    helper: 'How long have you worked on this idea?',
    className: 'col-12',
    type: 'textarea',
    rows: 5,
  },
  {
    id: 'ideation',
    label: 'Ideation',
    helper: 'Why did you pick this idea?',
    className: 'col-12',
    type: 'textarea',
    rows: 5,
  },
  {
    id: 'competitiveEdge',
    label: 'Competitive edge',
    helper: 'How is your approach different and innovative?',
    className: 'col-12',
    type: 'textarea',
    rows: 10,
  },
  {
    id: 'competitors',
    label: 'Competitors',
    helper: 'List your competitors or alternatives',
    className: 'col-12',
    type: 'textarea',
    rows: 10,
  },
  {
    id: 'users',
    label: 'Users',
    helper: 'Your plan to attract users',
    className: 'col-12',
    type: 'textarea',
    rows: 10,
  },
  {
    id: 'validation',
    label: 'Validation',
    helper:
      'Provide user validation (e.g. revenues, early-customers, interviews, surveys)',
    className: 'col-12',
    type: 'textarea',
    rows: 10,
  },
  {
    id: 'funding',
    label: 'Have you received funding?',
    type: 'options',
    options: [
      'Yes, from the government',
      'Yes, from private sources',
      'Yes, from government and private sources',
      'No',
      'Other',
    ],
  },
  {
    id: 'type',
    label: 'Have you incorporated',
    helper: 'Incorporation is optional',
    type: 'options',
    options: [
      'Yes, in Newfoundland and Labrador',
      'Yes, in another Canadian province',
      'Yes, federally in Canada',
      'Yes, in another country',
      'No',
      'Other',
    ],
  },
  {
    id: 'video',
    label: 'Video pitch url',
    helper:
      'Record a 2 minute video pitch, upload to the internets, and provide the url',
    className: 'col-12',
    type: 'textarea',
    rows: 3,
  },
]

export default props => <Apply messages={messages} fields={fields} />
