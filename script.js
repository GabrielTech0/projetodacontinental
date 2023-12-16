
// RELOGIO
function atualizarHora() {
    const campoHorario = document.getElementById("Hora");
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
    campoHorario.value = horarioFormatado;
}

document.addEventListener("DOMContentLoaded", function () {
    atualizarHora(); // Atualizar o horário imediatamente
    setInterval(atualizarHora, 1000); // Atualizar a cada 1 segundo (1000 milissegundos)
});

(function () {"use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel(
      {
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();



// mandar_EMAIL
document.getElementById('enviar-email').addEventListener('click', function (event) {
    event.preventDefault();

    // Coleta os dados do formulário
    var nome = document.getElementsByName('nome')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var assunto = document.getElementsByName('assunto')[0].value;
    var mensagem = document.getElementsByName('messagem')[0].value;

    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Assunto: " + assunto);
    console.log("Mensagem: " + mensagem);

    // Define os parâmetros para enviar o e-mail
    var params = {
       to_name: nome,
       from_name: email,
       reply_to: assunto,
       message: mensagem,
    };

    // Envia o e-mail
    emailjs.send("service_59sgiv8", "template_obu06m7", params)
       .then(function (response) {
          alert('E-mail enviado com sucesso!');
       }, function (error) {
          console.error('Ocorreu um erro ao enviar o e-mail:', error);
          alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
       });
});

const botaoAbrirPopup = document.getElementById('botaoAbrirPopup');
const popup = document.getElementById('popup');
const botaoFecharPopup = document.getElementById('fecharPopup');

botaoAbrirPopup.addEventListener('click', function () {
  popup.style.display = 'block';
  popup.classList.add('fadeIn');
});

botaoFecharPopup.addEventListener('click', function () {
  popup.classList.add('fadeOut');

  setTimeout(function () {
    popup.style.display = 'none';
    popup.classList.remove('fadeOut');
  }, 1000); // 1500ms (tempo da animação de fade-out)
});
