
/*function palabra  ( perfume ) {

    for (let i = 0; i >= perfume; i++){
     if ( i === perfume){
        console.log(`son siete digitos`)
     } else if ( i >= perfume){
        console.log(`es agua`)
     }
    } 
    
    }

 palabra.perfume()

class Clientes {
    constructor(nombre, apellido, edad, domicilio, codigoPostal, ciudad, pais, estadoCivil) {
        this.nombre = nombre
            this.apellido = apellido
            this.edad = edad
            this.domicilio = domicilio
            this.codigoPostal = codigoPostal
            this.ciudad = ciudad
            this.pais = pais
            this.estadoCivil = estadoCivil
    }

   mostrandoClientes () {
    console.log (cliente1)
}  }

const cliente1 = new Clientes ("Raul", "Davila", 28, "Lobos1254", 4547, "caracas", "Venezuela", "Viudo" )
const cliente2 = new Clientes("Juan" , "Suarez", 23, "Belgrano 224", "4000", "tucuman", "argentina" , "soltero")
const cliente3 = new Clientes ("Juan", "Sánchez", 19, "Rosales", 231, "Caballito", "Argentina", "Casado")
const cliente4 = new Clientes ("maria", "Pereyra",26, "bucardo 142", 5221, "cordoba", "argentina", "casada")
const cliente5 = new Clientes ("Emilio", "Ansaldi", 35, "Córdoba 1234", "Santa Fe", "Argentina", "Casado")


cliente1.mostrandoClientes()*/


/*function palabra (perfume) {

    for (let i = 0; i >= perfume; i++){
     if ( i === perfume){
        console.log(`son siete digitos`)
     } else if ( i <= perfume){
        console.log(i)
     }
    } 
    
    }

 palabra.perfume()*/


/*function perfume  (burberry) {

    for( let i = 0; i <= burberry; i++){

        if (i === burberry){
        
        console.log(“son siete dígitos”)
        
        }
    }
}

console.log(perfume)



for( let i = 0; i <= burberry; i++){

if (i === burberry){

console.log(“son siete dígitos”)

}
}

burberry()*/



/*
var perfume = "burberry"
var digito = perfume.length
var marcas = "channel"
console.log(digito)


for (let i = 0; i < perfume.length; i++) {

    if (perfume.length >= marcas.length) {
        console.log("tiene ocho caracteres")
    } else {
        console.log(" no tiene ocho caracteres")
    }

}


const expensas = function (cuota, cuota2) {

    for (let i = 0; i <= cuota; i++) {
        if (cuota >= cuota2) {
            console.log("el max de cuota son 20, tenemos un error asi que te sale gratis")
        } else if (cuota <= cuota2) {
            console.log(`El precio correspondiente: ${cuota2}`)

        }

    }

}

expensas(19, 20)




const tarjetas = POKEMON.pokemon.reduce((acc, elemento) => {

    return acc + `
      <div class="tarjetas">
         <div class="img-container">
            <img src=${elemento.img} alt=${elemento.name}>
            </div>
            <p>
              ${elemento.name}
           </p>
       
    </div>
    `
},"")

const tarjetasAlfin = document.querySelector(".tarjetas")

console.log(tarjetas)

*/



const tienda = ["Campera", "Vestido", "CampZara", "CampTigre", "CampNegra"]

console.log(tienda)

tienda.unshift("Saco")

console.log(tienda)



class tienda2 {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const nuevos = []

console.log(nuevos)

nuevos.push(new tienda2(0, "vestido2", 17000))
nuevos.push(new tienda2(1, "Vestido", 12000))
nuevos.push(new tienda2(2, "CampZara", 20000))
nuevos.push(new tienda2(3, "CampTigre", 19000))
nuevos.push(new tienda2(4, "CampNegra", 18000))

console.log(nuevos)

const soloCamperas = nuevos.slice(2, 5)
console.log(soloCamperas)

const soloVestido = nuevos.slice(0, 2)
console.log(soloVestido)


const prenda = prompt("Tenemos Vestido y Campera")


for (let i = 4; i < nuevos.length; i++) {

    if (prenda == "campera") {
        console.log(soloCamperas)
    } else if (prenda =="vestido"){
        console.log(soloVestido)
    }

}

/*const camperas = tienda2.find(tienda2 => camperas.nombre > 'camp');
console.log(camperas);*/

const camperas = nuevos.find(nuevos => camperas.nombre == 'vestido');
console.log(camperas)