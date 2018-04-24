import React from 'react'
import axios from 'axios'
import Helmet from 'react-helmet'
import ReCAPTCHA from 'react-google-recaptcha'

const Field = ({ field }) => {
  const {
    id,
    className = 'col-12 col-md-6',
    label,
    options,
    required = true,
    type = 'text',
    rows,
    helper = '',
  } = field
  return (
    <div className={className}>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        {type === 'options' && (
          <select
            className="form-control"
            name={id}
            id={id}
            required={required}
          >
            {options.map((option, index) => (
              <option
                key={`${option}-${index}`}
                value={index === 0 ? '' : option}
              >
                {option}
              </option>
            ))}
          </select>
        )}
        {(type === 'text' || type === 'email') && (
          <input
            type={type}
            className="form-control"
            id={id}
            name={id}
            placeholder={helper}
            required={required}
          />
        )}
        {type === 'textarea' && (
          <textarea
            rows={rows}
            className="form-control"
            name={id}
            placeholder={helper}
            required={required}
          />
        )}
      </div>
    </div>
  )
}

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      sent: false,
      loading: false,
      recaptcha: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCaptcha = this.handleCaptcha.bind(this)
  }

  createFields = (fields = []) => {
    return fields.map(field => <Field field={field} key={field.id} />)
  }

  handleCaptcha(value) {
    this.setState({
      recaptcha: value,
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', 'Contact', 'Submit form')
    }
    const mailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (e.target.email.value.match(mailregex)) {
      this.setState({ loading: true })
      const data = {
        'g-recaptcha-response': this.state.recaptcha,
        email: e.target.email.value,
        name: e.target.name.value,
        fields: `
        Name: ${e.target.name.value || 'n/a'}
        Company: ${e.target.company.value || 'n/a'}
        Phone: ${e.target.phone.value || 'n/a'}
        Budget: ${e.target.budget.value || 'n/a'}
        Type: ${e.target.type.value || 'n/a'}
        Description: ${e.target.description.value || 'n/a'}
        `,
        _subject: '🚀 dlbn.co contact',
      }
      axios({
        method: 'post',
        url: '/mail',
        data,
      })
        .then(response => {
          if (response.data.success) {
            this.setState({
              sent: true,
            })
            if (typeof window !== 'undefined' && window.ga) {
              window.ga('send', 'event', 'Contact', 'Submit form successful')
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      this.setState({
        error: this.props.messages.form.errors.invalidMail,
      })
    }
  }
  render() {
    const { messages, fields } = this.props
    const fieldArray = this.createFields(fields)

    if (messages && fields) {
      return (
        <div>
          <Helmet>
            <title>{messages.title}</title>
          </Helmet>
          <h1>{messages.title}</h1>
          <div className="separator" />
          {this.state.sent ? (
            <p className="lead">👏🎉 {messages.form.submit.sent}</p>
          ) : (
            <form
              onSubmit={this.handleSubmit}
              className="row"
              style={{ maxWidth: 800 }}
            >
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              {this.createFields(fields)}
              <div className="col-12">
                <div className="form-group">
                  <ReCAPTCHA
                    onChange={this.handleCaptcha}
                    sitekey="6Lc-K1UUAAAAAH4xfZlcUI2UeMNT8TI7xvFodU5y"
                  />
                </div>
              </div>
              <div className="col">
                <button
                  type="submit"
                  disabled={this.state.loading || !this.state.recaptcha}
                  className="btn btn-primary"
                >
                  {!this.state.loading
                    ? messages.form.submit.label
                    : messages.form.submit.loading}
                </button>
              </div>
              {this.state.error ? (
                <div className="col-12 mt-3">⚠️ {this.state.error}</div>
              ) : null}
            </form>
          )}
        </div>
      )
    }
    return <div />
  }
}

export default Contact
