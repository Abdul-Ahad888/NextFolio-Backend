const transporter = require("../config/mail");
const dotenv = require("dotenv")

dotenv.config()

const sendMail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"NextFolio" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Email error:", err);
    throw err;
  }
};

module.exports = sendMail;