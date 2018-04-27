import React from 'react'
import Prizes from '../prizes'

const messages = {
  title: 'Prizes',
  description: (
    <div>
      <p className="lead">Money 💸</p>
      <ul>
        <li>
          Up to three $15,000 prizes of funding are available for each team
          (that's up to $45,000 to the overall winner).
        </li>
      </ul>
      <p className="lead">Co-working space 🏢 </p>
      <ul>
        <li>
          Access to the Bounce Lab co-working space in the Faculty
          of Medicine starting in June 2018.
        </li>
      </ul>
      <p className="lead">Mentorship 👩‍🔬⚕👨</p>
      <ul>
        <li>
          Free registration to the Genesis Centre’s <a href="http://www.genesiscentre.ca/evolution-program/" target="_blank">Evolution Program</a>.
        </li>
        <li>
          Access to the MaRS <a href="https://www.marsdd.com/market-intelligence/" target="_blank">market intelligence</a> reporting ($50k worth of reports).
        </li>
      </ul>
    </div>
  ),
  tech: 'Technologies',
}

export default props => <Prizes messages={messages} />
