
const tienda = ["Campera", "Vestido", "CampZara", "CampTigre", "CampNegra"]

tienda.unshift("Saco")



class tienda2 {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const nuevos = []

nuevos.push(new tienda2(0, "vestido2", 17000))
nuevos.push(new tienda2(1, "Vestido", 12000))
nuevos.push(new tienda2(2, "CampZara", 20000))
nuevos.push(new tienda2(3, "CampTigre", 19000))
nuevos.push(new tienda2(4, "CampNegra", 18000))

const soloCamperas = nuevos.slice(2, 5)

const soloVestido = nuevos.slice(0, 2)


const prenda = prompt("Tenemos Vestido y Campera")


nuevos.forEach((_nuevos, i) => {
    if (prenda == "campera") {
        console.log(soloCamperas)
    } else if (prenda == "vestido") {
        console.log(soloVestido)
    }
})




/*
for (let i = 4; i < nuevos.length; i++) {

    if (prenda == "campera") {
        console.log(soloCamperas)
    } else if (prenda =="vestido"){
        console.log(soloVestido)
    }

}*/

/*const camperas = tienda2.find(tienda2 => camperas.nombre > 'camp');
console.log(camperas);

const camperas = nuevos.find(nuevos => camperas.nombre == 'vestido');
console.log(camperas)*/





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
 const saludo = document.querySelector(".bienvenido")
 
 function SaludoDeIngreso (){
    saludo.innerHTML = `Bienvenido ${inputNombre.value} ${inputApellidos.value}, te estaremos contactando`
    
}
    
 


 formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    clientes.push(new cliente(inputNombre.value, inputApellidos.value, inputTelefono.value, inputMail.value, inputComentario.value))
    console.log(clientes)
    localStorage.setItem("clientes", JSON.stringify(clientes));
    const otrosClientes = JSON.parse(localStorage.getItem("clientes"));
    console.log(otrosClientes)
    SaludoDeIngreso()
}

  

    
    





