import React from 'react'
import Prizes from '../prizes'

const messages = {
  title: 'Prizes',
  description: (
    <div>
      <p className="lead">Pre-seed funding</p>
      <ul>
        <li>Up to three $15,000 prizes of funding are available. The number of recipients will depend on the quality of applicants and is at the discretion of the selection committee.</li>
        <li>The funding will be awarded by NATI.</li>
        <li>The funding winner, will receive funding on a reimbursement basis. And would need to incur expenses within the stipulated funding period. (for example after being awarded a funding of $15,000 in phase I, the awardee would have to incur the expense within the Phase I period between May 28 and July 31)</li>
        <li>Expense claims need to be submitted within 45 days of the respective phase end date.</li>
        <li>All expenses need to be pre-approved by NATI.</li>
      </ul>
      <p className="lead">Co-working space and mentorship</p>
      <ul>
        <li>Teams are invited to use Bounce Labs (co-working space in the Faculty of Medicine) starting in April 2018.</li>
        <li>Winning teams with a technology-based business idea will have free registration to the Genesis Centre’s Evolution Program.</li>
        <li>Winning teams will have access to the MaRS market intelligence reporting ($50k worth of reports).</li>
      </ul>
    </div>
  ),
  tech: 'Technologies',
}

export default props => <Prizes messages={messages} />
