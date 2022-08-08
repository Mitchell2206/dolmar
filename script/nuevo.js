

const todoropa = document.querySelector(".todoropa")
const carrito = document.querySelector(".carrito")
let carritols = JSON.parse(localStorage.getItem("carritols")) || []


function tiendaDolmar(array) {
    array.forEach(prendas => {

        todoropa.innerHTML +=
            `<div class="card">

    <img src=${prendas.img}>
     
    <p>${prendas.title}</p>

    <p>${prendas.description}</p> 

    <p>Precio: $${prendas.price}</p>   
    
    <button class="button" id="${prendas.id}">Añadir</button>
</div>`
    });
}

tiendaDolmar(tiendas)


const buttonagregar = document.getElementsByClassName("button")




function agregarAlCarrito(e) {
    carrito.innerHTML = ""
    var btn = e.target;
    var idBoton = btn.getAttribute("id");
    let prendasclick = tiendas.find(elemento => elemento.id === idBoton)
    console.log(prendasclick)

    carritols.push("carritols", prendasclick)
    localStorage.setItem("carritols", JSON.stringify(carritols));
    alert("Agregaste " + prendasclick.category + " al carrito");

    carritoSuper()
}

for (btn of buttonagregar) {
    btn.addEventListener("click", agregarAlCarrito)
}






function carritoSuper() {
    carritols.forEach(elemento => {
        carrito.innerHTML +=


            `
          <div class="cardsuper">
           
          <img src=${elemento.img}>
     
             <p>${elemento.title}</p>

            <p>Precio: $${elemento.price}</p>
            <button class="eliminarbtn" id="${elemento.id}">borrar</button>
          </div>
          `
        ""
    })  
    let totalImporte = carritols.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    let totalCompra = document.createElement("p")
    totalCompra.getAttribute("class", "total")
    totalCompra.innerHTML = ("total: " + totalImporte )
    carrito.append(totalCompra)
    
    
}
localStorage.removeItem("carritols")

 
 
 /*let totalCompra = document.createElement("p")
    totalCompra.setAttribute("class", "total")
    totalCompra.innerHTML = ("total:" + total)
    carrito.append(totalCompra)
    console.log(totalCompra)*/


