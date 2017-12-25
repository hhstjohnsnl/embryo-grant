import React from 'react'
import About from '../about'

const messages = {
  title: 'Sobre',
  description: (
    <div>
      <p className="lead">Desenvolvedor front-end. Co-fundador do <a href="http://tripby.org">tripby.org</a></p>
      <p>Eu amo tecnologia e como ela conduz a evolução humana. É animador fazer parte disto.</p>
      <p>Atualmente estou vivendo como nômade, mochilando pela América do Sul.</p>
    </div>
  ),
  tech: 'Tecnologias'
}

export default (props) => <About messages={messages} />
