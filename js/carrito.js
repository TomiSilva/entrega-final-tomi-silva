let carritoGuardado = localStorage.getItem("carrito")
carritoGuardado = JSON.parse(carritoGuardado)
let pokeGuardado = localStorage.getItem("pokemon");
pokeGuardado =  JSON.parse(pokeGuardado);
let contenedorCarrito = document.getElementById("carritoSeccion")
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
let acumuladoCarrito = [];
let total;
let vuelto;
let contenedorPrincipal = document.getElementById("contenedorPrincipal")



//////////////////////////////////////////////////// Muestra los productos de carrito
function renderCarrito(carritoItems) {
    const card = document.createElement("div")
    const result = Map.groupBy(carritoItems, ({ nombre }) => nombre)
    console.log(result)
    result.forEach(element => {
        console.log("Producto comprado", element[0].nombre)
        console.log("x", element.length)
        
        card.innerHTML = `<h3>${element[0].nombre} $ ${element[0].precio}  </h3>
        <p> Cantidad de unidades <b>${element.length} </b></p>`

        contenedorCarrito.appendChild(card)
    });

    const boton = document.createElement("button")
    boton.type = "button";
    boton.innerHTML = "Realizar Compra";  
    boton.className = "button-styles"
    card.appendChild(boton)

    boton.addEventListener("click", () => {
        validarCompra(monedasGuardadas)
        if (contenedorCarrito.firstChild || contenedorMonedas.firstChild) {

            contenedorMonedas.removeChild(contenedorMonedas.firstChild)
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
         
        }

   
    })
    
}
renderCarrito(carritoGuardado);



///////////////////////////////////////////////////Muestra la cantidad de monedas disponibles
function renderMonedas(usuarioArray) {
    usuarioArray.forEach(usuario => {
        const card = document.createElement("div");
        card.className = "card";
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
function validarCompra(arrayUsuario) {
    reducir() 

   for (const usuario of arrayUsuario) {
       vuelto = usuario.monedasDisponibles - total;
       let contenedor = document.createElement("div")
      
           if (vuelto < 0) {
            Swal.fire({
                title: 'Tenés monedas insuficientes!',
                text: 'Tendrás que volver a empezar :(',
                icon: 'fail',
                confirmButtonText: '<a href="./index.html">Ok!</a>'
            })
       
         } else {
             cancelarCompra(monedasGuardadas);
               contenedor.innerHTML = `<h3> Gracias por tu compra </h3>
               <button class="button-styles" > <a href="./random-play.html">Quiero jugar un juego!</a> </button>`
               
            }
productosComprados.appendChild(contenedor);
     
    }
       

}









///////////////////////////////////////////////////////////////Funcion que cancela la compra e imprime el vuelto + productos comprados
function cancelarCompra() {
   

     pokeGuardado.forEach(e => {
        let starter = e.nombre;
        const card2 = document.createElement("div");
        switch (starter) {
            case "Charmander":

                card2.innerHTML = ` <h3>Te llevaste Piedra Fuego de regalo!</h3>`
                productosComprados.appendChild(card2);

                 break

            case "Bulbasaur":

                card2.innerHTML = ` <h3>Te llevaste Piedra Hoja de regalo!</h3>`
                productosComprados.appendChild(card2);

                 break

             case "Squirtle":

                 card2.innerHTML = ` <h3>Te llevaste Piedra Agua de regalo!</h3>`
                 productosComprados.appendChild(card2);

                break
        }

     });
     const mostrarVuelto = document.createElement("div")
     mostrarVuelto.innerHTML = `<p>El total es de  ${total} <br> Tu vuelto es de: ${vuelto} <br> </p>`
     productosComprados.appendChild(mostrarVuelto)
 }










