const todoropa = document.querySelector(".todoropa")
const carrito = document.querySelector(".carrito")


let carritols = []


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
    let btn = e.target;
    let idBoton = btn.getAttribute("id");
    let prendasclick = tiendas.find(elemento => elemento.id === idBoton)
    carritols.push(prendasclick)
    localStorage.setItem("carritols", JSON.stringify(carritols));

    swal("Genial","Agregaste " + prendasclick.category + " al carrito","success");
    
    carritoSuper()
}

for (btn of buttonagregar) {
    btn.addEventListener("click", agregarAlCarrito)
}





function carritoSuper() {
    carritols.forEach(prendas => {
        carrito.innerHTML +=


            `
          <div class="cardsuper">
           
          <img src=${prendas.img}>
     
             <p>${prendas.title}</p>

            <p>Precio: $${prendas.price}</p>
            <button class="btnx" id="${prendas.id}">Eliminar ${prendas.category} </button>
          </div>
          `
        ""
        
    }) 
    
    

    let totalImporte = carritols.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    let totalCompra = document.createElement("p")
    totalCompra.getAttribute("class", "total")
    totalCompra.innerHTML = ("total: $ "  + totalImporte )
    carrito.append(totalCompra) 
    for (borrarBtn of btnX) {
    borrarBtn.addEventListener("click", sacarArticulos)}
    
    let finalizarCompra = document.createElement("botton") 
    finalizarCompra.setAttribute("class", "finalizarCompra")
    finalizarCompra.innerHTML=("Comprar")
    carrito.append(finalizarCompra)

    finalizarCompra.addEventListener("click", ()=>{
       window.location.href="carrito.html"
    })

   
}



const btnX = document.getElementsByClassName("btnx") 





function sacarArticulos(e){
    carrito.innerHTML = ""
    let borrarBtn = e.target;
    let borrarbtnX = borrarBtn.getAttribute("id");
    const sacarArticulo = carritols.findIndex(elemento => elemento.id === borrarbtnX)
    carritols.splice(sacarArticulo, 1)
    localStorage.removeItem("carritols")
    localStorage.setItem("carritols", JSON.stringify(carritols))
    carritoSuper(carritols)
    swal( "" ,"Eliminaste un articulo del carrito","success");
    
  

}


