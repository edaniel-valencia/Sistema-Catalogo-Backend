import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

// Configurar el transporte del correo electrónico
const transporter = nodemailer.createTransport({
    host: 'mail.teampichincha.com', // Servidor SMTP
    port: 465, // Puerto SMTP
    secure: true, // Conexión SSL
    auth: {
        user: 'evalencia@teampichincha.com', // Correo del remitente
        pass: '3dxuy3lvxl398@TP', // Contraseña del remitente
    },
});

// Función para enviar correo electrónico
export const SendEmail = async (req: Request, res: Response) => {
    
    console.log("Estoy Aca");
    
    try {
        const { name, lastname, whatssap, email, subject, } = req.body;
        console.log(req.body);

        // Validar que los parámetros requeridos estén presentes
        // if (!to || !subject || !text) {
        //     return res.status(400).json({ error: 'Faltan parámetros requeridos: to, subject, text' });
        // }

        // Opciones del correo
        // const mailOptions = {
        //     from: 'evalenciavalenciam@gmail.com',
        //     to: 'to',
        //     subject: subject, 
        //     text: text,
        // };
        // const mailOptions = {
        //     to: 'evalencia@teampichincha.com', // Dirección del remitente
        //     from: 'edanielvalenciam@gmail.com', // Cambia esto a una dirección válida
        //     subject: 'Test email from Node.js with TypeScript', // Asunto del correo
        //     // text: 'Hello from Node.js with TypeScript!', // Cuerpo del correo

        //     html: `
        //     <div style="font-family: Arial, sans-serif; color: #333;">
        //         <h1 style="color: #007bff;">¡Bienvenido a nuestro servicio!</h1>
        //         <p>Estamos encantados de que te hayas unido. A continuación, te dejamos algunos detalles importantes:</p>
        //         <ul>
        //             <li>Acceso a nuestros recursos exclusivos</li>
        //             <li>Soporte técnico 24/7</li>
        //             <li>Promociones y ofertas especiales</li>
        //         </ul>
        //         <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
        //         <p style="font-size: 14px; color: #555;">Saludos,<br>El equipo de soporte</p>
        //     </div>
        // `,
        // };

        const mailOptions = {
            from: 'evalencia@teampichincha.com',
            to: 'edanielvalenciam@gmail.com',
            subject: 'Mensaje desde la Web',
            html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <img src="https://www.software.com.ec/assets/logo.f8e0acb1.png" width="25%">
                <h1 style="color: #007bff;">¡Bienvenido a nuestro servicio!</h1>
                <p>Te ha enviado este correo ${name} ${lastname}, y esto son los contactos mas comunicarse:
                <br><b>Correo: </b> ${email}
                <br><b>Whatssap: </b> ${whatssap}
                <br><b>Mensaje: </b>${subject}</p>
                <img src="https://img.freepik.com/vector-premium/conjunto-ilustraciones-3d-gestion-tiempo-caracter-usando-recordatorio-notificacion-seguimiento-tiempo_808510-1476.jpg" width="25%">
                <p style="font-size: 14px; color: #555;">Saludos,<br>El equipo de soporte</p>
            </div>
        `,
        };
        
        // Enviar el correo
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);

        // Responder exitosamente
        res.status(200).json({ message: 'Correo enviado exitosamente', info: info.response });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
};
