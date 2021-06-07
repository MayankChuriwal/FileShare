const nodemailer = require('nodemailer');

function sendMail({from, to, subject, text, html}) {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cr7egend@gmail.com',
            pass: 'Ronaldo@legend'
        }
    });
      
    let mailDetails = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: html
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}

module.exports = sendMail;