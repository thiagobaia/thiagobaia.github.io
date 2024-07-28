function sendMail() {
  let captchaToken = grecaptcha.getResponse();
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    "g-recaptcha-response": captchaToken,
  };


emailjs.send(serviceID, templateID, params)

  const serviceID = "service_llaiv6c";
  const templateID = "template_4i03s19";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      
      // Mostra o parágrafo de sucesso
      var successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";

      // Esconde o parágrafo após 6 segundos
      setTimeout(function() {
        successMessage.style.display = "none";
      }, 6000); // 6000 milissegundos = 6 segundos
    })
    .catch(err => console.log(err));
}



