let carritoGuardado = localStorage.getItem("carrito")
carritoGuardado = JSON.parse(carritoGuardado)
let contenedorCarrito = document.getElementById("carrito-seccion")
let monedasGuardadas = localStorage.getItem("usuario")
monedasGuardadas = JSON.parse(monedasGuardadas)
let contenedorMonedas = document.getElementById("monedas-seccion")
let botonCompra = document.querySelector("#boton-compra")
let gracias = document.querySelector("#gracias")
let productosComprados = document.querySelector("#productos-comprados")
let bienvenido = document.querySelector("#bienvenido")
let sinMonedas = document.querySelector("#sin-monedas")
let volverEmpezar = document.querySelector("#vuelve-a-empezar");
let monedasDisponibles;
let acumuladoCarrito =[];
let total;
let vuelto;


//////////////////////////////////////////////////// Muestra los productos de carrito
function renderCarrito (carritoItems) {
    carritoItems.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <p>${producto.precio}</p>`
        contenedorCarrito.appendChild(card)
    })
}
renderCarrito(carritoGuardado);

///////////////////////////////////////////////////Muestra la cantidad de monedas disponibles
function renderMonedas(usuarioArray){
    usuarioArray.forEach(usuario => {
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML = `<p> Monedas disponibles: ${usuario.monedasDisponibles}`
        contenedorMonedas.appendChild(card);
    })
}


renderMonedas(monedasGuardadas);
//////////////////////////////////////////////////////////// Funcion que suma el total de los productos
function reducir() {
    carritoGuardado.forEach(element => {
        acumuladoCarrito.push(element.precio);
        
    });
    total = acumuladoCarrito.reduce((suma, numero) => {
        return suma + numero;
    }, 0);
    
}

////////////////////////////////////////////////////////Funcion que prueba que la compra sea válida. Y si no, te devuelve al inicio.
function validadCompra(arrayUsuario) {
    botonCompra.addEventListener("click", ()=> {
        reducir()
        for (const usuario of arrayUsuario) {
            vuelto = usuario.monedasDisponibles - total; 
            if (vuelto < 0) {
            sinMonedas.style.display = "flex"
            botonCompra.style.display = "none";

           } else {
            cancelarCompra(monedasGuardadas);
            gracias.style.display="flex";
           }
        }
       
    })
    
}
validadCompra(monedasGuardadas)


///////////////////////////////////////////////////////////////Funcion que cancela la compra e imprime el vuelto + productos comprados
 function cancelarCompra(usuarioArray) {
    productosComprados.style.display="flex";
    contenedorCarrito.style.display="none";
    botonCompra.style.display="none";
    contenedorMonedas.style.display="none";
   carritoGuardado.forEach(producto => {
     const card = document.createElement("div")
     card.innerHTML = `<h3>${producto.nombre}</h3>
                      <h5>por $ ${producto.precio}</h5>
                      `
    productosComprados.appendChild(card)
    volverEmpezar.style.display="flex";
    
 })

 usuarioArray.forEach(e => {
    let starter = e.starterP;
    const card2 = document.createElement("div");
    switch (starter) {
        case "Charmander":
            
            card2.innerHTML =  ` <h3>Te llevaste Piedra Fuego de regalo!</h3>`
            productosComprados.appendChild(card2);

            break

        case "Bulbasaur":
            
            card2.innerHTML =  ` <h3>Te llevaste Piedra Hoja de regalo!</h3>`
            productosComprados.appendChild(card2);

            break

        case "Squirtle":
            
            card2.innerHTML =  ` <h3>Te llevaste Piedra Agua de regalo!</h3>`
            productosComprados.appendChild(card2);

            break
    }

});
 const mostrarVuelto = document.createElement("div")
 mostrarVuelto.innerHTML = `<p>El total es de  ${total} <br> Tu vuelto es de: ${vuelto} <br> </p>`
 productosComprados.appendChild(mostrarVuelto)
 
 }










