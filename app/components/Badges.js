import React, { PropTypes } from 'react'

const Badges = React.createClass({
  render () {
    const skills = this.props.skills.map( function(skill) { //yes, I don't like that fat arrow (:
      return <li className="badge badge-pill badge-default">{skill}</li>
    })
    return (
      <ul style={{margin: '1rem 0', padding: 0}}>
        {skills}
      </ul>
    )
  }
})

export default Badges
