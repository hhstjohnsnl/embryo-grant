import React from 'react'
import Badges from '../../components/Badges'
import Helmet from 'react-helmet'

const Requirements = (props) => {
  const messages = props.messages
  if (messages) {
    return (
      <div>
        <Helmet>
          <title>{messages.title}</title>
        </Helmet>
        <h1>{messages.title}</h1>
        <div className="separator"></div>
        <section className="mb-3">
          {messages.description}
        </section>
        {false &&
        <div>
        <h2>{messages.tech}</h2>
        <Badges skills={[
          {
            icon: 'react',
            name: 'React',
            url: 'https://reactjs.org/',
            color: '#61DAFB'
          },
          {
            icon: 'redux',
            name: 'Redux',
            url: 'https://redux.js.org/',
            color: '#61DAFB'
          },
          {
            icon: 'nodejs',
            name: 'Node.js',
            url: 'https://nodejs.org/',
            color: '#61DAFB'
          },
          {
            icon: 'webpack',
            name: 'webpack',
            url: 'https://webpack.js.org/',
            color: '#61DAFB'
          },
          {
            icon: 'sass',
            name: 'Sass',
            url: 'https://sass-lang.com/',
            color: '#61DAFB'
          },
          {
            icon: 'gatsby',
            name: 'Gatsby',
            url: 'https://gatsbyjs.org/',
            color: '#61DAFB'
          },
          {
            icon: 'docker',
            name: 'Docker',
            url: 'https://gatsbyjs.org/',
            color: '#61DAFB'
          },
          {
            icon: 'git',
            name: 'Git',
            url: 'https://git-scm.com/',
            color: '#61DAFB'
          },
          {
            icon: 'graphql',
            name: 'GraphQL',
            url: 'https://graphql.org/',
            color: '#61DAFB'
          },
                  ]} />
          </div>
        }
      </div>
    )
  } return (<div />)
}

export default Requirements
