
const agregar = document.querySelectorAll("#id")
const todoropa = document.querySelector(".todoropa")
const carrito = document.querySelector(".super")

let carritols = JSON.parse(localStorage.getItem("carritols")) || []

function tiendaDolmar(array) {
    array.forEach(prendas => {

        todoropa.innerHTML +=
            `<div class="card">

    <img src=${prendas.img}>
     
    <p>${prendas.title}</p>

    <p>$${prendas.description}</p> 

    <p>Precio: $${prendas.price}</p>   
    
    <button class="button" id="${prendas.id}">Añadir</button>
</div>`
    });
}

tiendaDolmar(tiendas)

// aqui esta funcion de tiendaDolmar me la envia al html en columna e hice de todo para ponerlas en grupos de tres y no consegui manera. en el html lo las pondria en grupos de tres y usaba flex, pero como hago aqui si todas salen de un mismo maquetado en js//

/*agregar.forEach((botonCompra)=>{
    botonCompra.addEventListener('click', () => console.log('click'));
});*/ //aqui queria ver si podia dar click al boton pero no me da respuesta//




function agregarAlCarrito(e) {

    carrito.innerHTML = ""
    let button = e.target;
    const idBoton = button.getAttribute("id");
    let prendasclick = tiendas.find(elemento => elemento.id === idBoton);
    carritols.push(prendasclick);

    localStorage.setItem("carritols", JSON.stringify(carrito));

    alert("Agregaste" + prendasclick.name + " al carrito");

    console.log(prendasclick);

}



//aca abajo llamo al button de arriba para hacer una funcion con el click y no me lo lee//