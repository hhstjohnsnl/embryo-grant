import React, { PropTypes } from 'react'

const Clients = React.createClass({
  render () {
    const clients = this.props.clients
    const listClients = clients.map( (client, index) =>
    <li key={index}>
      <a href={client.url}>
        <h4>{client.name}</h4>
      </a>
      <p>{client.location}</p>
    </li>
  )
  return (
    <ul style={{margin: '1rem 0', padding: 0, listStyleType: 'none'}}>
      {listClients}
    </ul>
  )
}
})

export default Clients
