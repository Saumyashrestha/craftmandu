import expressAsyncHandler from "express-async-handler";
import { config } from "dotenv";
import { createTransport } from "nodemailer";
config();

let transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, subject, message } = req.body;
  console.log(email, subject, message);

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: "saumyashrestha3112@gmail.com",
    subject: "New order placed",
    text: "check admin dashboard for more details",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

export default { sendEmail };