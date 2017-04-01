import React, { PropTypes } from 'react'

const Badges = React.createClass({
  render () {
    const skills = this.props.skills.map( function(skill) { //yes, I don't like that fat arrow (:
      return <div className="badge badge-pill badge-default">{skill}</div>
    })
    return (
      <div style={{margin: '1rem 0'}}>
        {skills}
      </div>
    )
  }
})

export default Badges
