
const carrito = document.querySelector(".carrito")

let carritoParseado = JSON.parse(localStorage.getItem("carritols"))



function localStoreCarrito (){
    carritoParseado.forEach(prendas => {
        carrito.innerHTML +=


            `
          <div class="cardsuper">
           
          <img src=${prendas.img}>
     
             <p>${prendas.title}</p>

            <p>Precio: $ ${prendas.price}</p>
            
          </div>
          `
        ""
        
    }) 

    let totalImporte = carritoParseado.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    let totalCompra = document.createElement("p")
    totalCompra.getAttribute("class", "total")
    totalCompra.innerHTML = ("total: $ " + totalImporte )
    carrito.append(totalCompra) 

    

    let finalizarCompra = document.createElement("botton")
    finalizarCompra.setAttribute("class", "finalizarCompra")
    finalizarCompra.innerHTML=("finalizar Compra")
    carrito.append(finalizarCompra)

    finalizarCompra.addEventListener("click", ()=>{
       window.location.href="contacto.html"
    })

    for (borrarBtnDos of btnDos) {
    borrarBtnDos.addEventListener("click", sacarArticulosDos)}
    
}
const btnDos = document.getElementsByClassName("btnxdos")
localStoreCarrito()


function sacarArticulosDos(e){
    carrito.innerHTML = ""
    let borrarBtnDos = e.target;
    let borrarbtnuno = borrarBtnDos.getAttribute("id");
    let eliminaPrenda = carritols.findIndex(Element => Element.id === borrarbtnuno)
    carritols.splice(eliminaPrenda, 1)
    console.log(eliminaPrenda)
    localStorage.removeItem("carritols")
    localStorage.setItem("carritols", JSON.stringify(carritols))
    localStoreCarrito(carritols)
    swal( "" ,"Eliminaste un articulo del carrito","success");
    
}


