import nodemailer from "nodemailer";
import { saveEmailData } from "./user.js";

export const sendEmail = async (req, res) => {
    const { from, to, subject, message } = req.body.email;
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'lowell.jakubowski65@ethereal.email',
                pass: 'GaMEVrYMZQ8suSCTtK'
            }
          });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: from,                     // sender address
            to: to,                         // list of receivers
            subject: subject,               // Subject line
            text: message,                  // plain text body
            html: "<b>Hello world?</b>",    // html body
        });
        transporter.sendMail(info, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message %s sent: %s", info.messageId, info.response);
            saveEmailData({from, to, subject, message});
            res.status(201).json(info);
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
