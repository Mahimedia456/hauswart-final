require("dotenv").config();

const sendMail = require("./mailer");

console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP PORT:", process.env.SMTP_PORT);

(async () => {
  try {
    await sendMail({
      to: "aamir@mahimediasolutions.com",
      subject: "Hauswart OTP Test",
      html: "<h2>OTP Test</h2><p>This is a test email.</p>",
    });

    console.log("✅ Mail sent successfully");
  } catch (err) {
    console.error("❌ Mail failed:", err);
  }
})();
