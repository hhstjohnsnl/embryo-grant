import React from 'react'
import Icon from 'react-simple-icons'

const SimpleIcon = (props) => (
  <div className="d-inline-flex">
    <Icon name={props.icon} fill={props.color || '#212121'} size={props.size || 16} />
  </div>
)

export default SimpleIcon
