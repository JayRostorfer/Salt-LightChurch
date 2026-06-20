import { Resend } from "resend";

export async function POST(req) {

  const body = await req.json();
  const { name, email, message } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_TO,
    subject: `Message from ${name}`,
    html: `
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
  });

  return Response.json({ success: true, data });
}
