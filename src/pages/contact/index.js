import React from 'react'

class Contact extends React.Component {
  constructor() {
    super()
  }
  handleSubmit(e) {
    e.preventDefault()

  }
  render() {
    const messages = this.props.messages
    return (
      <div>
        <h1>{messages.title}</h1>
        <div className="separator" />
        <form onSubmit={this.handleSubmit} className="row" style={{maxWidth: 800}}>
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
              <textarea rows="10" className="form-control" placeholder={messages.form.description.helper} required />
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              {messages.form.submit.label}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
