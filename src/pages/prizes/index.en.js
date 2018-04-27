import React from 'react'
import Prizes from '../prizes'

const messages = {
  title: 'Prizes',
  description: (
    <div>
      <p className="lead">Pre-seed funding</p>
      <ul>
        <li>
          Up to three $15,000 prizes of funding are available.
        </li>
      </ul>
      <p className="lead">Co-working space and mentorship</p>
      <ul>
        <li>
          Teams are invited to use Bounce Labs (co-working space in the Faculty
          of Medicine) starting in April 2018.
        </li>
        <li>
          Winning teams with a technology-based business idea will have free
          registration to the Genesis Centre’s Evolution Program.
        </li>
        <li>
          Winning teams will have access to the MaRS market intelligence
          reporting ($50k worth of reports).
        </li>
      </ul>
    </div>
  ),
  tech: 'Technologies',
}

export default props => <Prizes messages={messages} />
