function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_llaiv6c", "template_4i03s19", params)
    .then((res) => {
      console.log(res);
      alert("Email enviado com sucesso!");
    })

    .cath((err) => console.log(err));
}
