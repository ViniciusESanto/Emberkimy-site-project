$(document).ready(function(){
    $('#carousel-imgs').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
})