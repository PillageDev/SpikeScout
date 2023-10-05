import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 587,
  secure: true,
  auth: {
    user: 'incbom@recondev.net',
    pass: 'Fireship101/202'
  }
});

function sendVerificationEmail(email, verificationToken) {
  const mailOptions = {
    from: 'incbom@recondev.net',
    to: email,
    subject: 'Email Verification',
    text: `Click the following link to verify your email: http://localhost:3000/verify?token=${verificationToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

export default sendVerificationEmail;
