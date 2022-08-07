const carrito = document.querySelector(".carrito")
const agregar = document.querySelector(".button")


function agregarAlCarrito(e){

carrito.innerHTML = ""
const boton = e.click;
const idBoton = boton.getAttribute("id")
let prendasclick = tiendas.find(prenda => prenda.id === idBoton)
carritols.push(prendasclick)

localStorage.setItem("carritols"), JSON.stringify(carrito)

alert("Agregaste" + prendasclick.name +  " al carrito")


}