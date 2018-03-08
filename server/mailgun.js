const mailgun = require('mailgun.js');

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  public_key: process.env.MAILGUN_PUBLIC_KEY
});
const send = (req, res, next) => {
  if (!req.recaptcha.error) {
    mg.messages.create('mail.dlbn.co', {
      from: `${req.body.name} <${req.body.email}>`,
      to: "mateus@dalbinaco.com",
      subject: `🚀 dlbn.co contact`,
      text: req.body.fields,
    }).then(response => {
      res.status(200)
      res.send({
        success: true
      })
    }
  )
} else {
  res.status(401)
  res.send({
    error: 'recaptcha not solved'
  })
}
}

module.exports = send
