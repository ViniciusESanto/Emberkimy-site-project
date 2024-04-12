$(document).ready(function(){
    $('#carousel-imgs').slick({
        autoplay: true,
        infinite: true,
        speed: 150,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
})