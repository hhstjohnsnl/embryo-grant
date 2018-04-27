import React from 'react'
import Requirements from '../requirements'

const messages = {
  title: 'Requirements',
  description: (
    <div>
      <p className="lead">Got an idea that solves a health related problem? Get the ball rolling with up to $45,000 in funding</p>
      <p>
        The Embryo Grant supports the development of health-related innovation that
        demonstrates potential to grow into a sustainable
        enterprise.        
      </p>
      <p>
        The Embryo Grant is a seed fund made available by the <strong>Health
        Innovation Initiative</strong>.
        The <strong>Health Innovation Iniitiative</strong> aims to build a thriving medical
        technology entrepreneurial ecosystem within the province of Newfoundland
        and Labrador. The <strong>Health Innovation Initiative</strong> is supported by Newfoundland
        Association of Technology Industries, Memorial Centre for
        entrepreneurship, Memorial University of Newfoundland, Eastern Health, and
        the Atlantic Canada Opportunities Agency.
      </p>
      <p className="lead">Elgibility crieteria</p>
      <ul>
        <li>Applicants may compete as individuals, but are encouraged to create teams with a variety of different skill sets and strengths.</li>
        <li>Applicants are required to have at least one relevant healthcare team member. The Hacking Health St. John’s chapter will support in finding a relevant healthcare team member if they do not already have one. </li>
        <li>Individuals may participate in more than one team.</li>
        <li>Successful applicants will have formed a non-for-profit or commercial corporation in the province of Newfoundland and Labrador, prior to receiving their award. The Hacking Health St. John’s chapter will provide guidance if required for the same. </li>
        <li>Applicants must have a business idea with an element of innovation compared to the solutions that currently exist in the marketplace and/or medical sector.</li>
        <li>Nonprofits may participate in the competition but must demonstrate income generation potential beyond traditional philanthropy. All entries in the Embryo Grant will be judged on their ability to become financially self-sustaining</li>
        <li>Eligibility is determined at the discretion of the selection committee.</li>
      </ul>
    </div>
  ),
  tech: 'Technologies',
}

export default props => <Requirements messages={messages} />
