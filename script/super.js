
const carrito = document.querySelector(".super")
const agregar = document.querySelector(".button")


function carritoSuper() {
    carrito.forEach(elemento => {
        carrito.innerHTML +=
            `
          <div class="super">
          
          <img src=${prendas.img}>
     
             <p>${prendas.title}</p>

           <p>$${prendas.description}</p> 

            <p>Precio: $${prendas.price}</p>
            <button class="eliminarbtn" id="${prendas.id}">Añadir</button>
          </div>
          `
    })
}

