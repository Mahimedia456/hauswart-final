module.exports = function otpEmailTemplate({ otp, expiresInMinutes = 10 }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Password Reset OTP</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 12px;">
        <table width="520" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:16px;
          box-shadow:0 8px 30px rgba(0,0,0,0.08);overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#F38B14;padding:24px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">
                Hauswart Security Code
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 12px;color:#111;font-size:15px;">
                You requested to reset your password.
              </p>

              <p style="margin:0 0 20px;color:#444;font-size:14px;">
                Use the OTP below. This code expires in
                <strong>${expiresInMinutes} minutes</strong>.
              </p>

              <div style="
                margin:24px 0;
                padding:18px;
                border-radius:12px;
                background:#f8f8f8;
                text-align:center;
                letter-spacing:6px;
                font-size:28px;
                font-weight:700;
                color:#111;
              ">
                ${otp}
              </div>

              <p style="margin:0;color:#666;font-size:13px;">
                If you did not request this, ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px;text-align:center;background:#fafafa;
              color:#999;font-size:12px;">
              © ${new Date().getFullYear()} Hauswart
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
