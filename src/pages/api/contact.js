import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("Received request method:", req.method);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  console.log("Received form data:", req.body); // ✅ Log the received data

  const { name, tel, email, message } = req.body;

  // Ensure all fields are present
  if (!name || !tel || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Exists" : "Not found");
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Not found");


  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },

    tls: {
      rejectUnauthorized: false // Disable certificate validation
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // Your recipient email
      subject: "New Contact Form Message",
      text: `Name: ${name}\nTel: ${tel}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Tel:</strong> ${tel}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("✅ Email sent successfully!"); // Debugging
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending failed:", error); // Log the full error
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
}
