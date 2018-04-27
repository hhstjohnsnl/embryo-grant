import React from 'react'
import Requirements from '../requirements'

import phase1Figure from '../../assets/img/figures/phase-1.svg'
import phase2Figure from '../../assets/img/figures/phase-2.svg'
import phase3Figure from '../../assets/img/figures/phase-3.svg'

const messages = {
  title: 'Requirements',
  description: (
    <div>
      <p className="lead">
        About the grant
      </p>
      <p>
        The Embryo Grant supports development of health-related innovation
        that demonstrates potential to grow into a sustainable enterprise.
      </p>
      <p className="lead">
        How it works
      </p>
      <p>The Embryo Grant takes place from June through November and is
         comprised of three competitive phases.</p>
      <p className="lead">
        Phase one
      </p>
      <figure>
      <img src={phase1Figure} alt="Phase one figure" width="600" className="figure" />
      <figcaption>Three teams are selected from the applicants. Each team receives up to $15,000
        in funding to develop their idea over the next two months. At the end of phase one, 
        each team submits a progress reports and prepares to pitch their product.</figcaption>
      </figure>
      <figure>
        <p className="lead">
          Phase two
        </p>
      <img src={phase2Figure} alt="Phase two figure" width="600" className="figure" />
      <figcaption>Two teams are selected from the product pitch and progress ports. These two
        teams each receive up to an additional $15,000 to develop their product
        over the next two months. At the end of phase two, each team submits a progress
        report and prepairs to demo their product.</figcaption>
      </figure>
      <p className="lead">
        Phase three
      </p>
      <figure>
      <img src={phase3Figure} alt="Phase three figure" width="600" className="figure" />
      <figcaption>One team is selected from the product demo and progress reports. This
        team receives up to  an additional $15,000 to develop their product 
        into a sustainable business over the next two months. At the end of
        phase three, the team submits a final progress report.</figcaption>
      </figure>
      <p className="lead">Elgibility crieteria</p>
      <ul>
        <li>
          Applicants may compete as individuals, but are encouraged to create
          teams with a variety of different skill sets and strengths.
        </li>
        <li>
          Applicants are required to have at least one relevant healthcare team
          member. The Hacking Health St. John’s chapter will support in finding
          a relevant healthcare team member if they do not already have one.{' '}
        </li>
        <li>Individuals may participate in more than one team.</li>
        <li>
          Successful applicants will have formed a non-for-profit or commercial
          corporation in the province of Newfoundland and Labrador, prior to
          receiving their award. The Hacking Health St. John’s chapter will
          provide guidance if required for the same.{' '}
        </li>
        <li>
          Applicants must have a business idea with an element of innovation
          compared to the solutions that currently exist in the marketplace
          and/or medical sector.
        </li>
        <li>
          Nonprofits may participate in the competition but must demonstrate
          income generation potential beyond traditional philanthropy. All
          entries in the Embryo Grant will be judged on their ability to become
          financially self-sustaining
        </li>
        <li>
          Eligibility is determined at the discretion of the selection
          committee.
        </li>
      </ul>
      <p>
        The Embryo Grant is a seed fund made available by the{' '}
        <strong>Health Innovation Initiative</strong>. The{' '}
        <strong>Health Innovation Initiative</strong> aims to build a thriving
        medical technology entrepreneurial ecosystem within the province of
        Newfoundland and Labrador. The{' '}
        <strong>Health Innovation Initiative</strong> is supported by the{' '}
        <a href="http://www.nati.net/" target="_blank">Newfoundland Association of Technology Industries</a>, <a href="https://mce.mun.ca/" target="_blank">Memorial Centre for
          Entrepreneurship</a>, <a href="https://www.mun.ca/" target="_blank">Memorial University of Newfoundland</a>, <a href="http://www.easternhealth.ca/" target="_blank">Eastern Health</a>,
    and the <a href="http://www.acoa-apeca.gc.ca" target="_blank">Atlantic Canada Opportunities Agency</a>.
      </p>
    </div>
  ),
  tech: 'Technologies',
}

export default props => <Requirements messages={messages} />
