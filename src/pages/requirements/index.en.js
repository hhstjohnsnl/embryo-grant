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
      <ul>
        <li>Applicants may compete as individuals, but are encouraged to create teams with a variety of different skill sets and strengths.</li>
        <li>Applicants are required to have at least one relevant healthcare team member. The Hacking Health St. John’s chapter will support in finding a relevant healthcare team member if they do not already have one. </li>
        <li>Individuals may participate in more than one team.</li>
        <li>Successful applicants will have formed a non-for-profit or commercial corporation in the province of Newfoundland and Labrador, prior to receiving their award. The Hacking Health St. John’s chapter will provide guidance if required for the same. </li>
        <li>Applicants must have a business idea with an element of innovation compared to the solutions that currently exist in the marketplace and/or medical sector.</li>
        <li>Nonprofits may participate in the competition but must demonstrate income generation potential beyond traditional philanthropy.  While we recognize that startup funding and initial capital for operations may come from philanthropic funds/individual donations, we view a social enterprise – regardless of the type of entity formation – as designed to operate like a for-profit business, which must include a revenue-generating income stream in addition to traditional philanthropic sources (donations, grants, foundations, etc.). All entries in the Embryo Grant will be judged on their ability to become financially self-sustaining, that is, to generate revenue more than costs.</li>
        <li>Eligibility will be determined at the sole discretion of the selection committee.</li>
      </ul>
    </div>
  ),
  tech: 'Technologies',
}

export default props => <Requirements messages={messages} />
