const Email = require('../Routes/sendingemail')
const nodemailer = require("nodemailer");
// send mail with HTML included

exports.sendEmailText = async (req, res) => {
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
            subject: "Hello,This is a mail with a text ✔",   // Subject line
            text: "I'm sending this email to test nodemailer using text.", // plain text body
        });
        res.send({ message: 'Votre mail est envoyé avec succés' });
    } catch (error) {
        res.status(500).send({ message: error || 'erreur serveur' })
    }

}

