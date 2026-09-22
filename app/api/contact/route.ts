import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, address, message } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Curtain Cleaning Website" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_EMAIL,
      replyTo: email,
      subject: `New Contact Enquiry — ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0f4c4c; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Enquiry</h1>
            <p style="color: #a8d5c2; margin: 4px 0 0; font-size: 13px;">Curtain Cleaning Brisbane</p>
          </div>
          <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; width: 140px; font-weight: 600;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">
                  <a href="mailto:${email}" style="color: #0f4c4c;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">
                  <a href="tel:${phone}" style="color: #0f4c4c;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600;">Address</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${address || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #111827; white-space: pre-wrap;">${message || "—"}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #ecfdf5; border-radius: 6px; font-size: 12px; color: #065f46;">
              Reply directly to this email to respond to ${fullName}.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] email error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
