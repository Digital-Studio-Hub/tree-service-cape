interface EmailOptions {
  to: string;
  toName?: string;
  subject: string;
  htmlBody: string;
  textBody?: string;
}

interface LeadNotificationData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ZEPTOMAIL_API_URL = "https://api.zeptomail.com/v1.1/email";
const ADMIN_EMAIL = "matizhaadmire6@gmail.com";
const FROM_EMAIL = "noreply@admiretreefellingservice.co.za";
const FROM_NAME = "Admire Tree Service";

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const token = process.env.ZEPTOMAIL_TOKEN;
  
  if (!token) {
    console.error("ZEPTOMAIL_TOKEN is not configured");
    return false;
  }

  try {
    const response = await fetch(ZEPTOMAIL_API_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({
        from: {
          address: FROM_EMAIL,
          name: FROM_NAME,
        },
        to: [
          {
            email_address: {
              address: options.to,
              name: options.toName || options.to,
            },
          },
        ],
        subject: options.subject,
        htmlbody: options.htmlBody,
        textbody: options.textBody || options.htmlBody.replace(/<[^>]*>/g, ""),
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("ZeptoMail API error:", response.status, errorData);
      return false;
    }

    console.log("Email sent successfully to:", options.to);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}

export async function sendAdminNotification(lead: LeadNotificationData): Promise<boolean> {
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #2d5a27; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Lead Received</h1>
      </div>
      <div style="padding: 30px; background: #f9f9f9;">
        <h2 style="color: #2d5a27; margin-top: 0;">Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${lead.email}">${lead.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="tel:${lead.phone}">${lead.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Service:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${lead.service}</td>
          </tr>
        </table>
        <h3 style="color: #2d5a27; margin-top: 20px;">Message:</h3>
        <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
          ${lead.message.replace(/\n/g, "<br>")}
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          This lead was submitted via the Admire Tree Service website.
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: ADMIN_EMAIL,
    toName: "Admire Tree Service",
    subject: `New Lead: ${lead.service} - ${lead.name}`,
    htmlBody,
  });
}

export async function sendUserConfirmation(lead: LeadNotificationData): Promise<boolean> {
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #2d5a27; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Thank You for Contacting Us</h1>
      </div>
      <div style="padding: 30px; background: #f9f9f9;">
        <p style="font-size: 16px;">Dear ${lead.name},</p>
        <p style="font-size: 16px; line-height: 1.6;">
          Thank you for reaching out to Admire Tree Service! We have received your enquiry 
          regarding <strong>${lead.service}</strong> and will get back to you as soon as possible.
        </p>
        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0;">
          <h3 style="color: #2d5a27; margin-top: 0;">Your Request Summary:</h3>
          <p><strong>Service:</strong> ${lead.service}</p>
          <p><strong>Message:</strong> ${lead.message}</p>
        </div>
        <p style="font-size: 16px; line-height: 1.6;">
          If you need immediate assistance, please don't hesitate to call or WhatsApp us at 
          <a href="tel:0672903024" style="color: #2d5a27; font-weight: bold;">067 290 3024</a>.
        </p>
        <p style="font-size: 16px; line-height: 1.6;">
          Best regards,<br>
          <strong>Admire Tree Service Team</strong><br>
          Cape Town, South Africa
        </p>
      </div>
      <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
        © ${new Date().getFullYear()} Admire Tree Service. All rights reserved.
      </div>
    </div>
  `;

  return sendEmail({
    to: lead.email,
    toName: lead.name,
    subject: "Thank you for contacting Admire Tree Service",
    htmlBody,
  });
}
