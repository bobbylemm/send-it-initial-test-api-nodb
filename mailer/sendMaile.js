// import nodemailer from 'nodemailer';
// import smtpTransport from 'nodemailer-smtp-transport';

// const mailTransport = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     secure: 'true',
//     port: '587',
//     auth: {
//         user: 'senditbootcamp@gmail.com',
//         pass: 'bobbylemm12345'
//     }
// }));
// mailTransport.sendMail({
//     from: 'SendIt',
//     to: 'chidozienwoga@gmail.com',
//     subject: 'your parcel status update',
//     text: 'there was an update on your parcel status'
// },(err) => {
//     if(err) {
//         console.log(`there was an error and the error is ${err}`)
//     }
// });
// export default mailTransport;