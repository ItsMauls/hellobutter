const { createTransport } = require('nodemailer') 
const userEmail = require('../models/mailer')
require('dotenv').config({ path: '../.env' })
const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

exports.postEmail = async (req,res,next) => {
    const email = req.body.email
    const date = req.body.date
    const currentYear = new Date().getFullYear()
    const nextYear = currentYear + 1
    const [year, month, day] = date.split('-')

    try {
        const user = await userEmail.findOne({email : email})
        if(!user)
        {
            
            const newEmail = new userEmail
            ({   
                email : email,
                date: date
            })
                await newEmail.save()
        }
        else {
            user.date = date
            await user.save()
        }

        await new Promise((resolve, reject) => {
            transporter.sendMail({
                from: 'hallobutter@gmail.com',
                    to: email,
                    subject: 'Promo Spesial: Nikmati Diskon Menarik untuk Pembelian Kue di Hari Ulang Tahun!',
                    html : `<p>Kami sangat senang mendengar bahwa Anda akan merayakan ulang tahun Anda! Kami ingin berbagi dalam kebahagiaan Anda dengan penawaran spesial dari Hellobutter. Pada tanggal ${day}-${month}-${nextYear} kami akan memberikan diskon eksklusif untuk pembelian kue di Hari Ulang Tahun Anda. Kami berharap ini dapat menambah kesenangan pada momen spesial Anda.</p>`
            },
             (err, info) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                resolve(info);
              }
            });
          });

        return res.redirect('/')
    }
    catch(err) {
        next(err)
    }
}
