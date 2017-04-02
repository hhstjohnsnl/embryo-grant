import React, { PropTypes } from 'react'
import tripbyLogo from '../assets/img/logos/tripby.svg'

const projects = [
  {"name": "TRIPBY", "url": "http://tripby.org", "logo": tripbyLogo},
]

const Projects = React.createClass({
  render () {
    const listProjects = projects.map( function(project) { //yes, I don't like that fat arrow (:
      return (
        <li><a className="project" href={project.url}><img src={project.logo} alt={project.name} height="32"/></a></li>
      )
    })
    return (
      <ul style={{margin: '1rem 0', padding: 0, listStyleType: 'none'}}>
        {listProjects}
      </ul>
    )
  }
})

export default Projects
