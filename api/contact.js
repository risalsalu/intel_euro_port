export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // 2. Parse payload
  const { name, email, company, projectType, budget, message, bot_field } = req.body;

  // 3. Spam Protection: Honeypot check
  if (bot_field) {
    // If bot_field is filled, silently "succeed" to deceive bots
    return res.status(200).json({ success: true, message: 'Inquiry received.' });
  }

  // 4. Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields: Name, Email, and Project Details are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format.' });
  }

  // 5. Length Validation (Abuse protection)
  if (name.length > 150 || email.length > 150 || (company && company.length > 150)) {
    return res.status(400).json({ success: false, message: 'Input length exceeded limits for standard fields.' });
  }
  
  if (message.length > 3000) {
    return res.status(400).json({ success: false, message: 'Project details exceed maximum length of 3000 characters.' });
  }

  // 6. Check Environment Setup
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.EMAIL_FROM || 'NEORIZ Solutions <onboarding@resend.dev>';

  if (!resendApiKey) {
    console.error('CRITICAL ERROR: RESEND_API_KEY is not configured in the environment.');
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error. Please contact us directly via email.' 
    });
  }

  if (!toEmail) {
    console.error('CRITICAL ERROR: CONTACT_EMAIL is not configured in the environment.');
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error. Please contact us directly via email.' 
    });
  }

  // 7. Construct Email
  const subject = `New Project Inquiry — ${projectType || 'General'} — ${name}`;
  
  const textBody = `
NEORIZ SOLUTIONS — NEW PROJECT INQUIRY

Name:
${name}

Email:
${email}

Company / Organization:
${company || 'Not provided'}

Project Type:
${projectType || 'Not specified'}

Estimated Budget:
${budget || 'Not specified'}

Project Details:
${message}

Submitted At:
${new Date().toISOString()}
  `.trim();

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
      <h2 style="color: #2E3192; border-bottom: 2px solid #EAEAEA; padding-bottom: 12px;">NEORIZ SOLUTIONS &mdash; NEW INQUIRY</h2>
      
      <p><strong>Name:</strong><br/>${name}</p>
      <p><strong>Email:</strong><br/><a href="mailto:${email}">${email}</a></p>
      <p><strong>Company / Organization:</strong><br/>${company || 'Not provided'}</p>
      <p><strong>Project Type:</strong><br/>${projectType || 'Not specified'}</p>
      <p><strong>Estimated Budget:</strong><br/>${budget || 'Not specified'}</p>
      
      <p><strong>Project Details:</strong></p>
      <div style="background: #F9F9F9; padding: 16px; border-radius: 8px; border: 1px solid #EAEAEA; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      
      <p style="font-size: 0.8em; color: #888; margin-top: 32px; border-top: 1px solid #EAEAEA; padding-top: 12px;">
        Submitted At: ${new Date().toISOString()}
      </p>
    </div>
  `;

  // 8. Dispatch Email via Resend API
  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email, // Direct replies go to the user
        subject: subject,
        text: textBody,
        html: htmlBody
      })
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API Error: Failed to dispatch email.', {
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        error: data
      });
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to dispatch email via provider. Please try again later.' 
      });
    }

    return res.status(200).json({ success: true, message: 'Inquiry received successfully.' });

  } catch (error) {
    console.error('Network or Execution Error in contact API:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An unexpected error occurred while processing your request.' 
    });
  }
}
