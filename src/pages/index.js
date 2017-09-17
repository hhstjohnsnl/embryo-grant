import React from 'react'
import Link from 'gatsby-link'
import Clients from '../components/Clients'
import Badges from '../components/Badges'

const IndexPage = () => (
  <div>
    <div className="separator d-md-none" />
    <section>
      <p className="lead">Escrevo interfaces precisas, interativas e consistentes</p>
      <Badges skills={['JavaScript', 'React', 'Redux', 'webpack', 'SASS', 'Git', 'Node.js']} />
    </section>
    <div className="separator"></div>
    <section>
      <h1>Clientes</h1>
      <Clients clients={[
        {name: "Quartzo Studio", url: "http://quartzostudio.com/", location: 'Juiz de Fora, BR'},
        {name: "Softin Sistemas", url: "http://softin.com.br/", location: 'Joinville, BR'},
        {name: "Lite Regal Education", url: "https://www.literegal.co.uk/", location: 'London, UK'},
        {name: "Framenet Brasil", url: "http://www.ufjf.br/framenetbr/", location: 'Juiz de Fora, BR'},
        {name: "UFJF", url: "http://ufjf.br/", location: 'Juiz de Fora, BR'},
      ]}/>
    </section>
  </div>
)

export default IndexPage
