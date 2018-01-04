import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      sent: false,
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const mailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (e.target.email.value.match(mailregex)) {
      this.setState({loading: true})
      const data = {
        contact: `
        Name: ${e.target.name.value || 'n/a'}
        Company: ${e.target.company.value || 'n/a'}
        Phone: ${e.target.phone.value || 'n/a'}
        Budget: ${e.target.budget.value || 'n/a'}
        Type: ${e.target.type.value || 'n/a'}
        Description: ${e.target.description.value || 'n/a'}
        `,
        _subject: '🚀 dlbn.co contact',

      }
      if (e.target.email.value !== '') {
        data.email = e.target.email.value
      }
      if (e.target._gotcha.value !== '') {
        data._gotcha = e.target._gotcha.value
      }
      axios({
        method: 'post',
        url: 'https://formspree.io/mateus@dalbinaco.com',
        headers: {
          'Accept': 'application/json'
        },
        data
      }).then((response) => {
        if (response.data.success && response.data.success === 'email sent') {
          this.setState({
            sent: true
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      this.setState({
        error: this.props.messages.form.errors.invalidMail
      })
    }
  }
  render() {
    const messages = this.props.messages
    if (messages) {
      return (
        <div>
          <h1>{messages.title}</h1>
          <div className="separator" />
          {this.state.sent ? (
            <p className="lead">👏 {messages.form.submit.sent}</p>
          ) : (
            <form onSubmit={this.handleSubmit} className="row" style={{maxWidth: 800}}>
              <input type="text" name="_gotcha" style={{display:'none'}} />
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="name">{messages.form.name.label}</label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="company">{messages.form.company.label}</label>
                  <input type="text" className="form-control" id="company" name="company" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="email">{messages.form.email.label}*</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">{messages.form.phone.label}</label>
                  <input type="phone" className="form-control" id="phone" name="phone" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="budget">{messages.form.budget.label}*</label>
                  <select className="form-control" name="budget" id="budget" required>
                    {messages.form.budget.options.map((option, index) => (
                      <option key={`${option}-${index}`} value={index === 0 ? '' : option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="type">{messages.form.type.label}*</label>
                  <select className="form-control" name="type" id="type" required>
                    {messages.form.type.options.map((option, index) => (
                      <option key={`${option}-${index}`} value={index === 0 ? '' : option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="description">{messages.form.description.label}*</label>
                  <textarea rows="10" className="form-control" name="description" placeholder={messages.form.description.helper} required />
                </div>
              </div>
              <div className="col">
                <button type="submit" disabled={this.state.loading} className="btn btn-primary">
                  {!this.state.loading ? messages.form.submit.label : messages.form.submit.loading}
                </button>
              </div>
              {this.state.error ? (<div className="col-12 mt-3">⚠️ {this.state.error}</div>) : null}
            </form>
          )}
        </div>
      )
    } return (<div />)
  }
}

export default Contact
