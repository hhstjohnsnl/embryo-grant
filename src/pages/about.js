import React from 'react'
import Badges from '../components/Badges'

const About = () => (
  <div>
    <h1>About</h1>
    <section className="mb-3">
          <p className="lead">Front-end developer. Co-founder of <a href="http://tripby.org">tripby.org</a></p>
          <p>I love technology and how it drives human evolution. I'm excited to be part of this.</p>
          <p></p>
    </section>
    <h2>Skills</h2>
    <Badges skills={['React', 'GraphQL', 'Apollo', 'Redux',  'Jest', 'webpack', 'SASS', 'Git', 'Node.js']} />
  </div>
)

export default About
