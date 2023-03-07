const Email = require('../Routes/sendingemail')
const nodemailer = require("nodemailer");
// send mail with HTML included

exports.sendEmailHtml = async (req, res) => {

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.user,
                pass: process.env.auth
            }
        });
        // send mail with HTML included

        let info = await transporter.sendMail({
            from: process.env.user,   // sender address
            to: req.body.email,   // list of receivers
            subject: "Hello This is a mail using html",   // Subject line
            html: "<b>I'm sending this email to test nodemailer using html</b>",// html body
        });
        res.send({ message: 'Votre mail est envoyé avec succés' });

    } catch (error) {
        res.status(500).send({ message: error || 'erreur serveur' })
    }

}

