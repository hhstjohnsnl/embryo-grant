import React from 'react'
import About from '../about'

const messages = {
  title: 'About',
  description: (
    <div>
      <p className="lead">Front-end developer. Co-founder of <a href="http://tripby.org">tripby.org</a></p>
      <p>I love technology and how it drives human evolution. I'm excited to be part of this.</p>
      <p>I'm currently living as a nomad, backpacking through South America.</p>
    </div>
  ),
  tech: 'Technologies'
}

export default (props) => <About messages={messages} />
