import React from 'react'
import Requirements from '../requirements'

const messages = {
  title: 'Requirements',
  description: (
    <div>
      <p className="lead">Pre-seed funding</p>
      <p>
        The Embryo Grant helps anyone interested in developing a health-related
        innovation, that has the potential to translate into a sustainable
        enterprise (e.g. products or services that address issues related to
        inefficiencies in the healthcare industry, increase the quality of care
        of patients, etc.).
      </p>
      <p>
        The Embryo Grant is a seed/early stage fu​​nd, under the Health
        Innovation Initiative, which is a project to build a thriving medical
        technology entrepreneurial ecosystem within the province of Newfoundland
        and Labrador. The Health Innovation Initiative is co-led by Newfoundland
        Association of Technology Industries (NATI), Memorial Centre for
        entrepreneurship(MCE), Memorial University and Eastern Health, and is
        funded by the Atlantic Canada Opportunities Agency (ACOA)
      </p>
    </div>
  ),
  tech: 'Technologies',
}

export default props => <Requirements messages={messages} />
