import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, phoneNumber, plotLocation } = await req.json();
  console.log("-------", { name, phoneNumber, plotLocation });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'gomaterial.development@gmail.com', // Replace with your dummy email
      pass: 'ouci hmui ixnt igax', // Replace with your dummy email password
    },
  });

  const mailOptions = {
    from: 'gomaterial.development@gmail.com', // Replace with your dummy email
    to: 'support@housebanao.com', // Replace with recipient email
    subject: 'New Lead Generated',
    text: `Name: ${name}\nPhone Number: ${phoneNumber}\nPlot Location: ${plotLocation}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
