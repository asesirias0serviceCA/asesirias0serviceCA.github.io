document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío normal del formulario

    // Obtenemos los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const phone = document.getElementById("phone").value;

    // Detectamos la página o sección desde la que se envía
    const currentPage = "Oferta de Microempresa"; // Título específico para esta sección

    // Creamos el objeto para enviar con los parámetros de EmailJS                                                      /// esta es la oferta de pyme 
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        from_phone: phone,                                                                   // hago que el java reconozca las variables introducidas desde el formulario
        page_info: `${name} solicita hablar contigo por la oferta de pyme. 
        Mensaje: ${message} 
        Correo electrónico: ${email} 
        Teléfono: ${phone}`
    };

    // Enviamos el correo usando EmailJS
    emailjs
        .send("service_y041zfq", "template_1prnij5", templateParams)
        .then(function(response) {
            console.log("Correo enviado con éxito:", response);
            window.location.href = "confirmation.html?status=success"; // Redirige en caso de éxito
        })
        .catch(function(error) {
            console.error("Error al enviar el correo:", error);
            window.location.href = "confirmation.html?status=error"; // Redirige en caso de error
        });
});
