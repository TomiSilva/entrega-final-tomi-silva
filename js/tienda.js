let usuarioInfo = document.querySelector("#usuarioInfo");
let contenedorUsuario = document.querySelector("#contenedorUsuario");
let seccionTienda = document.querySelector(".seccion-tienda");
let contenedorTienda = document.querySelector("#tienda-container");
let botonCarrito = document.querySelector("#carrito-boton-seccion");
let carritoContainer = document.querySelector("#carritoContainer")
let piedraFuego = document.querySelector("#piedra-fuego");
let piedraAgua = document.querySelector("#piedra-agua");
let piedraHoja = document.querySelector("#piedra-hoja");

let carrito = [];


let usuarioGuardado = localStorage.getItem("usuario");
usuarioGuardado = JSON.parse(usuarioGuardado)

function renderUsuario(array) {
  array.forEach(element => {
  console.log(element)
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `
        <h2>Ingreso completado!</h2>
         <h3> Hola,<p>${element.nombre}! </p> </h3>
        
        <p>Contás con una cantidad de <b> ${element.monedasDisponibles} </b> moneditas.</p>
        <p>Elegiste tu starter, que es <b> ${element.starterP} </b></p>
        
        `
    usuarioInfo.appendChild(contenedor);
  });
}

renderUsuario(usuarioGuardado)


function renderProductos() {
  fetch("./db/data.JSON")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.forEach(producto => {
        let boton = document.createElement("button");
        boton.id = producto.id;
        boton.innerHTML = "Agregar"

        let contenedor = document.createElement("div");
        contenedor.className = "card";
        contenedor.innerHTML = `
         <span> <img src="https://ghostwalker186.wordpress.com/wp-content/uploads/2013/10/potion.png"> </img> </span>
         <span>${producto.nombre}</span>
         <span> <br> $ ${producto.precio}</span>
        
         `
        contenedor.appendChild(boton)
        contenedorTienda.appendChild(contenedor);

        añadirProductos(boton, data);
      



      });
    })


}



renderProductos();


let añadirProductos = (btn, data) => {
  btn.addEventListener("click", () => {
    const productoId = btn.id

    console.log(productoId)

    const productoSeleccionado = data.find(producto => producto.id == productoId);
    carrito.push(productoSeleccionado);
    localStorage.setItem("carrito", JSON.stringify(carrito))


    Toastify({
      text: "Producto agregado",
      duration: 1500,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: false, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();

  })
}

let carritoG = localStorage.getItem("carrito");
carritoGuardado = JSON.parse(carritoG)













