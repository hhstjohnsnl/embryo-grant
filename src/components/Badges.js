import React, { PropTypes } from 'react'

const Badges = React.createClass({
  render () {
    const skills = this.props.skills.map( (skill, index) =>
    <li className="col-4 col-md-2 col-lg-1 mb-4" key={index}>
      <a href={skill.url} className="d-flex flex-column align-items-center">
        <img className="mb-2" style={{filter: 'invert(100%)'}} src={`https://unpkg.com/simple-icons@latest/icons/${skill.icon}.svg`} width="48" height="48" />
        <p>{skill.name}</p>
      </a>
    </li>
  )
  return (
    <ul className="row list-unstyled p-0 mt-4">
      {skills}
    </ul>
  )
}
})

export default Badges
