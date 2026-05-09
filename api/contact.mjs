import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs manquants." });
  }

  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "✓ présent" : "✗ manquant");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "alainmomeni01@gmail.com",
      replyTo: email,
      subject: `📩 Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;
                    background: #060c1a; color: #fff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #60A5FA; margin-bottom: 24px;">
            Nouveau message depuis ton portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9ca3af; width: 100px;">Nom</td>
              <td style="padding: 10px 0; color: #fff; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9ca3af;">Email</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #60A5FA;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px;
                      background: #07101f; border-radius: 8px;
                      border-left: 3px solid #60A5FA;">
            <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 13px;">Message</p>
            <p style="color: #fff; margin: 0; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="margin-top: 24px; color: #4b5563; font-size: 12px;">
            Réponds directement à cet email pour contacter ${name}.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Erreur envoi email:", error);
    return res.status(500).json({ error: "Échec de l'envoi. Réessaie plus tard." });
  }
}