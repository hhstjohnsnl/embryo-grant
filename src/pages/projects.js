import React from 'react'
import Clients from '../components/Clients'

const Projects = () => (
  <div>
    <h1>Featured projects</h1>
    <section>
      <Clients clients={[
        {name: "Corinthians Guarulhos", url: "http://corinthiansguarulhos.com/", location: 'Juiz de Fora, BR'},
        {name: "Softin Sistemas", url: "http://softin.com.br/", location: 'Joinville, BR'},
        {name: "Framenet Brasil", url: "http://www.ufjf.br/framenetbr/", location: 'Juiz de Fora, BR'},
        {name: "UFJF", url: "http://ufjf.br/", location: 'Juiz de Fora, BR'},
      ]}/>
    </section>
  </div>
)

export default Projects
