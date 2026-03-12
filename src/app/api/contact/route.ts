import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialiser Resend avec ta clé API
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Email pour toi (notification)
    const emailToYou = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'hanaemessaoudi0@gmail.com',
      subject: `📧 Nouveau message de ${name} - ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #3b82f6; border-radius: 5px; }
              .label { font-weight: bold; color: #3b82f6; }
              .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 5px; border: 1px solid #e5e7eb; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">📧 Nouveau Message</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Quelqu'un vous a contacté via votre portfolio</p>
              </div>
              <div class="content">
                <div class="info-box">
                  <p><span class="label">👤 Nom:</span> ${name}</p>
                </div>
                <div class="info-box">
                  <p><span class="label">📧 Email:</span> <a href="mailto:${email}">${email}</a></p>
                </div>
                <div class="info-box">
                  <p><span class="label">📝 Sujet:</span> ${subject}</p>
                </div>
                <div class="message-box">
                  <p class="label">💬 Message:</p>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
                <p style="text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px;">
                  Répondez directement à ${email} pour continuer la conversation
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Email de confirmation pour le visiteur
    const emailToVisitor = await resend.emails.send({
      from: 'Hanae Messaoudi <onboarding@resend.dev>',
      to: email,
      subject: '✅ Message bien reçu - Hanae Messaoudi',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 5px; border: 1px solid #e5e7eb; }
              .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">✅ Message bien reçu!</h1>
              </div>
              <div class="content">
                <p>Bonjour <strong>${name}</strong>,</p>
                <p>Merci de m'avoir contactée via mon portfolio. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
                
                <div class="message-box">
                  <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">Récapitulatif de votre message:</p>
                  <p><strong>Sujet:</strong> ${subject}</p>
                  <p style="white-space: pre-wrap;"><strong>Message:</strong><br>${message}</p>
                </div>

                <p>À très bientôt,</p>
                <p><strong>Hanae Messaoudi</strong><br>
                Développeuse Full Stack</p>

                <div class="footer">
                  <p>📧 hanaemessaoudi0@gmail.com</p>
                  <p>🔗 <a href="https://linkedin.com/in/hanae-messaoudi" style="color: #3b82f6;">LinkedIn</a> | 
                  <a href="https://github.com/hanaems" style="color: #3b82f6;">GitHub</a></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès!',
      emailToYou,
      emailToVisitor,
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
