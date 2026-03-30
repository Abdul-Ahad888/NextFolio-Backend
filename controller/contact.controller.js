const sendMail = require("../utils/sendMail")
const dotenv = require("dotenv")

dotenv.config()

const contactMail = async (req, res) => {
  const { name, email, subject, message } = req.body

  try {
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `
    })

    res.status(200).json({ msg: "Message sent successfully!" })
  } catch (err) {
    res.status(500).json({ msg: "Failed to send message" })
  }
}