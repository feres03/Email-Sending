const Email = require('../Routes/sendingemail')
const nodemailer = require("nodemailer");
const ejs = require('ejs');


// // Send mail with EJS
exports.sendEmailEjs = async (req, res) => {


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
        // ejs usage
        ejs.renderFile('./template/welcome.ejs', { name: req.body.name }, function (err, data) {
            console.log(data)
            if (err) {
                res.status(400).send({ message: 'Email not sent' })
            } else {
                var mainOptions = {
                    from: process.env.user,
                    to: req.body.email,
                    subject: 'Hello, world',
                    html: data
                };

                transporter.sendMail(mainOptions, function (err, info) {
                    if (err) {
                        res.status(400).send({ message: 'Email not sent' })
                    } else {
                        res.send({ message: 'Votre mail est envoyé avec succés' });
                    }
                });
            }

        });
    } catch (error) {
        res.status(500).send({ message: error || 'erreur serveur' })
    }

}




// code Minimized

// exports.sendEmailEjs = async (req, res) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true, // use SSL
//             auth: {
//                 user: process.env.user,
//                 pass: process.env.auth
//             }
//         });

//         const html = await ejs.renderFile('./template/welcome.ejs', { name: req.body.name });

//         const mainOptions = {
//             from: process.env.user,
//             to: req.body.email,
//             subject: 'Hello, world',
//             html: html
//         };

//         transporter.sendMail(mainOptions, function (err, info) {
//             if (err) {
//                 res.status(400).send({ message: 'Email not sent' })
//             } else {
//                 res.send({ message: 'Votre mail est envoyé avec succés' });
//             }
//         });
//     } catch (error) {
//         res.status(500).send({ message: error || 'erreur serveur' })
//     }
// }






