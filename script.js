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

    $('#telefone').mask('(00) 00000-0000')
    
    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            interesse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Porfavor, insira seu nome!',
            telefone: 'Este campo é obrigatorio!',
            email: 'Este campo é obrigatorio!'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos) {
                alert(`Exitem ${camposIncorretos} a serem preenchidos`)
            }
        }
    })
})