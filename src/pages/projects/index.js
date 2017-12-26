import React from 'react'
import Project from '../../components/Project'

const Projects = (props) => {
  const messages = props.messages
  const projects = props.projects
  if (messages && projects) {
    return (
      <div>
        <h1>{messages.title}</h1>
        <div className="separator"></div>
        <section>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-12 col-md-6" key={index}>
                <Project title={project.title} url={project.url}>
                  {project.description}
                </Project>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  } return (<div/>)
}
export default Projects
