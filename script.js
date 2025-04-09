$(document).ready(function() {
  $('.valentines-day').click(function() {
    // Animación del sobre (cae y desaparece)
    $('.envelope').css({
      'animation': 'fall 3s linear forwards',
      '-webkit-animation': 'fall 3s linear forwards'
    }).fadeOut(800);

    // Oculta elementos del sobre
    $('.heart, .text, .front').fadeOut(500);

    // Muestra la carta con efecto
    setTimeout(function() {
      $('#card').addClass('show');
      
      // Desplázate suavemente a la carta (solo en móvil)
      if ($(window).width() < 768) {
        $('html, body').animate({
          scrollTop: $('#card').offset().top - 20
        }, 800);
      }
    }, 1000);
  });
});