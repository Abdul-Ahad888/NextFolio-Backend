const sendMail = require("../utils/sendMail")
const dotenv = require("dotenv")

dotenv.config()

const contactMail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Form Submission",
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    res.json({ msg: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to send message" });
  }
};

module.exports = contactMail;