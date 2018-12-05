$(document).ready(function(){

    cambiarSrcCarousel()

	$(window).resize(function () {
		cambiarSrcCarousel()
    });
})


function cambiarSrcCarousel(){
    if ($(window).width()>767) {
        $("#carousel1").attr("src","img/carousel1.png");
        $("#carousel2").attr("src","img/carousel2.png");            
        $("#carousel3").attr("src","img/carousel3.png");
        
    }else{
        $("#carousel1").attr("src","./img/carousel1-movil.png");
        $("#carousel2").attr("src","./img/carousel2-movil.png");
        $("#carousel3").attr("src","./img/carousel3-movil.png");
    }
}