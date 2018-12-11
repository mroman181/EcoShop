var itemActive = 0; // image of the carousel activated

var timer = null; //timer to change the image of the carousel


$(document).ready(function () {

    //initializing the timer
    timer = setInterval(function () { nextSlide(); }, 5000);

    //changethe source image of the carousel
    cambiarSrcCarousel()

    //When the window is resized change the image source
    $(window).resize(function () {
        cambiarSrcCarousel()
    });

    //next arrow pressed
    $("#next").click(function () {

        //next image
        nextSlide();

        //Reiniciar timer
        clearInterval(timer);
        timer = setInterval(function () { nextSlide(); }, 5000);
    });

    //previous arrow pressed
    $("#prev").click(function () {

        //Previous image
        previousSlide();

        //Reiniciar timer
        clearInterval(timer);
        timer = setInterval(function () { nextSlide(); }, 5000);
    });

    //An icon pressed
    $(".icon-item").click(function (e) {

        //obtaining the id icon
        var itemid = e.target.id;
        itemActive = itemid;

        //removing active classes
        $(".carousel-item").removeClass("active");
        $(".icon-item").removeClass("active");

        //adding active classes to the icon pressed
        $("#" + itemid).addClass("active");
        $("#c" + itemid).addClass("active");

        //Reiniciar timer
        clearInterval(timer);
        timer = setInterval(function () { nextSlide(); }, 5000);
    });

    $("#btn-formulary-recipe").click(function () {
        //Send button pressed

        /*'use strict';
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
        });*/

        //Launch sweetAlert
        swal({
            type: "success",
            title: "Receta enviada satisfactoriamente",
            text: "Gracias por su colaboración"
        }
        ).then((value) => {
            //When Ok button is pressed, open the home page
            if (value) window.open("index.html", "_self");
        });

    });

    $("#btn-formulary").click(function () {
        //Send button pressed

        //Launch sweetAlert
        swal({
            type: "success",
            title: "Enviado satisfactoriamente",
            text: "Le atenderemos lo antes posible"
        }
        ).then((value) => {
            //When Ok button is pressed, open the home page
            if (value) window.open("index.html", "_self");
        });

    });

    //Change the color when the bars of the dropdown button is on hover
    $(".navbar-toggler").hover(function () {
        $(".icon-bar").css("background-color", "white");
    }, function () {
        $(".icon-bar").css("background-color", "rgb(43, 158, 53)");
    });

})


function cambiarSrcCarousel() {

    if ($(window).width() > 767) {
        //window is bigger than 767 px, change corresponging images
        $("#carousel1").attr("src", "img/carousel1.png");
        $("#carousel2").attr("src", "img/carousel2.png");
        $("#carousel3").attr("src", "img/carousel3.png");

    } else {
        //window is small, change corresponging images
        $("#carousel1").attr("src", "./img/carousel1-movil.png");
        $("#carousel2").attr("src", "./img/carousel2-movil.png");
        $("#carousel3").attr("src", "./img/carousel3-movil.png");
    }
}

function nextSlide() {

    //We obtain the list of images and icons
    var carouselItems = $(".carousel-item");
    var iconItem = $(".icon-item");

    //Remove the elements activated
    $(carouselItems[itemActive]).toggleClass("active");
    $(iconItem[itemActive]).toggleClass("active");

    //Next image
    itemActive = (itemActive + 1) % 3;

    //Add classes to the next elements
    $(carouselItems[itemActive]).toggleClass("active");
    $(iconItem[itemActive]).toggleClass("active");
}

function previousSlide() {

    //We obtain the list of images and icons
    var carouselItems = $(".carousel-item");
    var iconItem = $(".icon-item");

    //Remove the elements activated
    $(carouselItems[itemActive]).toggleClass("active");
    $(iconItem[itemActive]).toggleClass("active");

    //Previous image
    itemActive = itemActive - 1;
    if (itemActive < 0) itemActive = 2;

    //Add classes to the previous elements
    $(carouselItems[itemActive]).toggleClass("active");
    $(iconItem[itemActive]).toggleClass("active");
}
