import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json({ error: 'Mail service configuration error' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'mazen.mohsen.dev@gmail.com',
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #09090B; color: #FAFAFA; border-radius: 12px;">
          <h2 style="color: #BAE6FD; margin-bottom: 24px; font-size: 20px; letter-spacing: -0.5px;">New Contact from Portfolio</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #71717A; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #FAFAFA; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717A; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #BAE6FD; font-size: 14px;">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #71717A; font-size: 13px;">Company</td><td style="padding: 8px 0; color: #FAFAFA; font-size: 14px;">${company}</td></tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #71717A; font-size: 13px;">Subject</td>
              <td style="padding: 8px 0; color: #FAFAFA; font-size: 14px;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #18181B; border-radius: 8px; border-left: 2px solid #BAE6FD;">
            <p style="color: #71717A; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <p style="color: #FAFAFA; font-size: 14px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
          </div>

          <p style="margin-top: 24px; color: #52525B; font-size: 12px;">Sent from Built-By-Mazzin portfolio</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
