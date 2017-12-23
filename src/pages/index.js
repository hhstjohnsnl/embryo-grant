import React from 'react'
import Link from 'gatsby-link'
import Typist from 'react-typist';
import Clients from '../components/Clients'
import Badges from '../components/Badges'

import 'react-typist/dist/Typist.css'

const IndexPage = () => (
  <div>
    <section className="py-4 py-md-5">
      <div className="d-flex align-items-end">
        <h1 className="">
        <Typist>
          I build<br className="d-md-none"/> <strong>websites</strong>
          <Typist.Backspace count={8} delay={1000}/>
          <strong>webapps</strong>
          <Typist.Backspace count={7} delay={1000}/>
          <strong>beautiful UIs</strong>
        </Typist>
      </h1>
      </div>
      {/* <button className="btn btn-primary mt-3" style={{fontSize: '1.1rem'}}>Let's talk!</button> */}
    </section>
    <div className="separator"></div>
    <section>
      <div className="row">
        <div className="col-12 col-md-4">
          <h3>📱</h3>
          <h3>Responsive layouts</h3>
          <p>Looks great on <strong>any screen</strong></p>
        </div>
        <div className="col-12 col-md-4">
          <h3>🚀</h3>
          <h3>Fast loading</h3>
          <p><strong>90+ score</strong> guarantee on PageSpeed</p>
        </div>
        <div className="col-12 col-md-4">
          <h3>🔌</h3>
          <h3>Integrations</h3>
          <p><strong>Any API integrations</strong> you need</p>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
