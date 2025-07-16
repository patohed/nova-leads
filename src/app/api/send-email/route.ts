import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, message, service } = await request.json();

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configurar el email que se enviará
    const mailOptions = {
      from: process.env.SMTP_FROM || email,
      to: 'contacto@agencia-nova.com.ar',
      subject: `Nuevo contacto desde la web - ${service || 'Consulta General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%); padding: 20px; color: white; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🚀 Nuevo Contacto - Agencia Nova</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: #dc2626; margin-top: 0;">Información del Cliente</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #dc2626;">
              <p><strong>📝 Nombre:</strong> ${name}</p>
              <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #dc2626;">${email}</a></p>
              <p><strong>🏢 Empresa:</strong> ${company || 'No especificado'}</p>
              <p><strong>📱 Teléfono:</strong> <a href="tel:${phone}" style="color: #dc2626;">${phone || 'No especificado'}</a></p>
              <p><strong>🎯 Servicio de Interés:</strong> ${service || 'No especificado'}</p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #dc2626; margin-top: 0;">💬 Mensaje:</h3>
              <p style="line-height: 1.6; background: #f9fafb; padding: 15px; border-radius: 5px; border-left: 3px solid #dc2626;">
                ${message}
              </p>
            </div>

            <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">🚀 Acciones Recomendadas:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Responder en las próximas 2 horas</li>
                <li>Agendar una llamada de descubrimiento</li>
                <li>Enviar propuesta personalizada</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                Email enviado desde <strong>agencia-nova.com.ar</strong><br>
                Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Email de confirmación para el cliente
    const clientMailOptions = {
      from: process.env.SMTP_FROM || 'contacto@agencia-nova.com.ar',
      to: email,
      subject: '✅ Hemos recibido tu consulta - Agencia Nova',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%); padding: 20px; color: white; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🚀 ¡Gracias por contactarnos!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <p style="font-size: 18px; color: #dc2626;"><strong>Hola ${name},</strong></p>
            
            <p style="line-height: 1.6;">
              Hemos recibido tu consulta y te contactaremos <strong>dentro de las próximas 24 horas</strong> 
              para comenzar a trabajar en el crecimiento de tu negocio.
            </p>

            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
              <h3 style="color: #dc2626; margin-top: 0;">📋 Resumen de tu consulta:</h3>
              <p><strong>Servicio:</strong> ${service || 'Consulta General'}</p>
              <p><strong>Empresa:</strong> ${company || 'No especificado'}</p>
              <p><strong>Mensaje:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
            </div>

            <div style="background: #dc2626; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="margin: 0 0 15px 0;">🎯 Mientras tanto...</h3>
              <p style="margin: 0;">¿Tienes una consulta urgente?</p>
              <a href="https://wa.me/5491112345678?text=Hola, tengo una consulta urgente sobre los servicios de Agencia Nova" 
                 style="display: inline-block; background: white; color: #dc2626; padding: 10px 20px; border-radius: 25px; text-decoration: none; font-weight: bold; margin-top: 10px;">
                📱 Escríbenos por WhatsApp
              </a>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                <strong>Agencia Nova</strong> - Marketing Digital que Convierte<br>
                📧 contacto@agencia-nova.com.ar | 📱 +54 911 1234 5678<br>
                🌐 agencia-nova.com.ar
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Enviar ambos emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado correctamente' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al enviar el email' 
      },
      { status: 500 }
    );
  }
}
