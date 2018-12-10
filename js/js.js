$(document).ready(function () {

    cambiarSrcCarousel()

    $(window).resize(function () {
        cambiarSrcCarousel()
    });

    $("#btn-formulary-recipe").click(function () {
        'use strict';
        const nodemailer = require('nodemailer');

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.pass // generated ethereal password
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: 'mroman@iesfbmoll.org', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
/*
        swal({
            type: "success",
            title: "Receta enviada satisfactoriamente",
            text: "Gracias por su colaboración"
        }
        ).then((value) => {
            if (value) window.open("index.html", "_self");
        });*/

    });

    $("#btn-formulary").click(function () {
        swal({
            type: "success",
            title: "Enviado satisfactoriamente",
            text: "Le atenderemos lo antes posible"
        }
        ).then((value) => {
            if (value) window.open("index.html", "_self");
        });

    });

    $(".navbar-toggler").hover(function(){
        $(".icon-bar").css("background-color", "white");
        }, function(){
        $(".icon-bar").css("background-color", "rgb(43, 158, 53)");
    });

})


function cambiarSrcCarousel() {
    if ($(window).width() > 767) {
        $("#carousel1").attr("src", "img/carousel1.png");
        $("#carousel2").attr("src", "img/carousel2.png");
        $("#carousel3").attr("src", "img/carousel3.png");

    } else {
        $("#carousel1").attr("src", "./img/carousel1-movil.png");
        $("#carousel2").attr("src", "./img/carousel2-movil.png");
        $("#carousel3").attr("src", "./img/carousel3-movil.png");
    }
}