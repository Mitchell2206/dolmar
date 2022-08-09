const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#nombre")
const inputApellidos = document.querySelector("#apellidos")
const inputTelefono = document.querySelector("#telefono")
const inputMail = document.querySelector("#mail")
const inputComentario = document.querySelector("#modif02")
const submit = document.querySelector("#submit")



const clientes = []


class cliente {
    constructor( nombre, apellido, telefono, mail, comentario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.mail = mail;
        this.comentario = comentario;
    }
  
}




formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    clientes.push(new cliente(inputNombre.value, inputApellidos.value, inputTelefono.value, inputMail.value, inputComentario.value))
    console.log(clientes)
    localStorage.setItem("clientes", JSON.stringify(clientes));
    const otrosClientes = JSON.parse(localStorage.getItem("clientes"));
    console.log(otrosClientes)
    swal("GENIAL!", "Gracias " +  inputNombre.value + " te estaremos contactando", "success")
    formulario.reset()
}