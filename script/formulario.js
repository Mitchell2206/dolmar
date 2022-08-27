
const inputNombre = document.querySelector("#nombre")

const btn = document.getElementById('button');

const clientes = []


class cliente {
    constructor(nombre, apellido, telefono, mail, comentario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.mail = mail;
        this.comentario = comentario;
        
    }
   
}



document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_obped7g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar Mensaje';
        swal("GENIAL!", "Gracias " + inputNombre.value + " tu compra se enviara mañana", "success")
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});



