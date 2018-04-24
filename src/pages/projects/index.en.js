import React from 'react'
import Projects from '../projects'

const messages = {
  title: 'Featured projects',
}

const projects = [
  {
    title: 'Panthera',
    url: 'https://panthera.dlbn.co',
    description: (
      <div>
        <p>
          Panthera is a website development service focused on simplicity and
          speed. The whole process takes 3 days or less, from hiring to
          delivery.
        </p>
        <p>
          The client has to spend just 30 minutes in a phone call so we can
          understand how to build the website and it's content. It's best suited
          to freelancers and small companies.
        </p>
      </div>
    ),
  },
  {
    title: 'TRIPBY',
    url: 'http://tripby.org',
    description: (
      <div>
        <p>
          TRIPBY is a drug harm reduction project which focuses on providing
          information about psychoactive drugs.
        </p>
        <p>
          The live version was developed several years ago on WordPress. Now we
          are working to launch a new version as a{' '}
          <a href="https://reactjs.org/">React</a> +{' '}
          <a href="https://www.apollographql.com/">Apollo</a> progressive web
          app which uses <a href="https://www.graph.cool/">Graphcool</a> as the
          backend.
        </p>
      </div>
    ),
  },
  {
    title: 'Corinthians-Guarulhos',
    url: 'http://corinthiansguarulhos.com',
    description: (
      <div>
        <p>Volleyball team in São Paulo, Brazil.</p>
        <p>
          In the website, the user can check next matches, current competitions,
          team members and news articles.
        </p>
        <p>
          The website is built on <a href="https://www.gatsbyjs.org/">Gatsby</a>{' '}
          and all content is managed through{' '}
          <a href="https://www.contentful.com/">Contentful CMS</a>. Everytime
          new articles are created or updated, a pipeline is triggered to
          compile the pages and redeploy the website.
        </p>
        <p>
          This project was developed together with{' '}
          <a href="http://quartzostudio.com">Quartzo Studio</a> which provided
          UI/UX guidelines.
        </p>
      </div>
    ),
  },
  {
    title: 'Softin Sistemas',
    url: 'http://softin.com.br',
    description: (
      <div>
        <p>Software company in Joinville, Brazil.</p>
        <p>
          This is a marketing website to showcase the company's main products
          and services. It also allows potential customers to request a custom
          quote through an email form. The form is directly connected to a{' '}
          <a href="https://mailchimp.com">MailChimp</a> mailing list.
        </p>
        <p>
          In this project I had the pleasure to work with an artist which drew
          original illustrations and icons that compose the website. Built on<a href="https://www.gatsbyjs.org/">
            Gatsby
          </a>.
        </p>
      </div>
    ),
  },
]

export default props => <Projects messages={messages} projects={projects} />
