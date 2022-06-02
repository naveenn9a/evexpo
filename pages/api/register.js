// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  name: "greenevolutioninitiative",
  auth: {
    user: process.env.SMTP_USER, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  }
});

export default function handler(req, res) {
  console.log("Got request", req.method)
  if (req.method == 'POST') {
    let { name, email, company, job, country, phone, type, isDownloadBrochure } = req.body;

    transporter.sendMail({
      from: '"Info" <marketing@greenevolutioninitiative.com>', // sender address
      to: "marketing@greenevolutioninitiative.com", // list of receivers
      subject: `Green Evolution Initiative | ${isDownloadBrochure ? 'Brochure Request': 'New Registration'}`, // Subject line
      html: `
        <div style="background: #eee; padding: 10px;">
            <h1>Green Evolution Initiative</h1>
            <p><b>Name:</b> ${name} </p>
            <p><b>Email:</b> ${email} </p>
            <p><b>Phone:</b> ${phone} </p>
            <p><b>Company:</b> ${company} </p>
            <p><b>Job title:</b> ${job} </p>
            <p><b>Country:</b> ${country} </p>
            <p><b>Exibitor/ Visitor/ Dealer/ Franchise:</b> ${type == 'dealorfran' ? 'Dealer/ Franchise': type} </p>
      </div>
      `
    })
      .then(e => {
        console.log("SENT: ")
        return res.status(200).json({ message: 'Sent' })
      })
      .catch(e => {
        return res.status(400).json({ message: 'Couuldnt send', error: e.message })
      })
  }
}
