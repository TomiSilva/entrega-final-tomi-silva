let usuarioInfo = document.querySelector("#usuarioInfo");
let contenedorUsuario = document.querySelector("#contenedorUsuario");
let seccionTienda = document.querySelector(".seccion-tienda");
let contenedorTienda = document.querySelector("#tienda-container");
let botonCarrito = document.querySelector("#carrito-boton-seccion");
let piedraFuego = document.querySelector("#piedra-fuego");
let piedraAgua = document.querySelector("#piedra-agua");
let piedraHoja = document.querySelector("#piedra-hoja");

let carrito = [];


let usuarioGuardado = localStorage.getItem("usuario");
usuarioGuardado = JSON.parse(usuarioGuardado)

function renderUsuario(array) {
    array.forEach(element => {
        
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
        boton.innerHTML= "Agregar"
    
        let contenedor = document.createElement("div");
        contenedor.className = "card";
        contenedor.innerHTML = `
         <span> <img src="https://ghostwalker186.wordpress.com/wp-content/uploads/2013/10/potion.png"> </img> </span>
         <span>${producto.nombre}</span>
         <span> <br> $ ${producto.precio}</span>
        
         `
         contenedor.appendChild(boton)
         contenedorTienda.appendChild(contenedor);

         boton.addEventListener("click", () => {
            const productoId = boton.id
            
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
                onClick: function(){} // Callback after click
              }).showToast();
        
         } )



     }); 
  })
  

    }

    

renderProductos();






// let getProductos = () => {
//     const boton = document.createElement("button");
//     boton.type = "button"
//     boton.innerHTML = "Agregar"
//     boton.className = "productoAgregar"
 
//     fetch("./db/data.JSON")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             data.forEach(product => {              
            
//                 const card = document.createElement("div")
//                 card.innerHTML = `
            
//             <h2> Producto: ${product.nombre} </h2>
//             <h3> Precio ${product.precio}</h3>
//             `
               
//                 contenedorTienda.appendChild(card)
//                 card.appendChild(boton)
//             });

//         })

    
//    // añadirBoton.forEach(boton => {
//     //     boton.onclick = (e) => {
//     //         console.log("click")
//     //         const productoId = e.currentTarget.id
//     //         const productoSeleccionado = productos.find(producto => producto.id == productoId)

//     //         carrito.push(productoSeleccionado);
//     //         console.log(carrito);



//     //         localStorage.setItem("carrito", JSON.stringify(carrito))
//     //     }
//     // })
// }

// getProductos()



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Tienda pokemon.
///////////// Array de productos.


// const productos = [
//     {
//         id: 1,
//         nombre: "Poción",
//         precio: 500,
//         puntosVida: 500
//     },

//     {
//         id: 2,
//         nombre: "Super Poción",
//         precio: 1000,
//         puntosVida: 2000
//     },

//     {
//         id: 3,
//         nombre: "Hiper Poción",
//         precio: 1500,
//         puntosVida: 2500
//     }
// ]
// let carrito = []

// /////////////////////////////////////////////////////////// imrpime los productos para comprar
// continuarTienda.addEventListener("click", () => {
//     seccionTienda.style.display = "flex";
//     contenedorUsuario.style.display = "none";

//     renderProductos(productos);

// })

// //////////////añadir productos al carrito
// function renderProductos(array) {
//     continuarContenedor.style.display = "none"
//     productos.forEach(producto => {
//         let contenedor = document.createElement("div");
//         contenedor.className = "card";
//         contenedor.innerHTML = `
//         <span> <img src="https://ghostwalker186.wordpress.com/wp-content/uploads/2013/10/potion.png"> </img> </span>
//         <span>${producto.nombre}</span>
//         <span> <br> $ ${producto.precio}</span>
//         <span> <button class="productoAgregar" id="${producto.id}">Agregar</button></span>
//         `
//         contenedorTienda.appendChild(contenedor);



//     });

//     usuario.forEach(e => {
//         let starter = e.starterP;
//         switch (starter) {
//             case "Charmander":
//                 piedraFuego.style.display = "flex";

//                 break

//             case "Bulbasaur":
//                 piedraHoja.style.display = "flex";

//                 break

//             case "Squirtle":
//                 piedraAgua.style.display = "flex";

//                 break
//         }

//     });

//     añadirCarrito();
// }



// function añadirCarrito() {
//     añadirBoton = document.querySelectorAll(".productoAgregar")

//     añadirBoton.forEach(boton => {
//         boton.onclick = (e) => {
//             botonCarrito.style.display = "flex";
//             const productoId = e.currentTarget.id
//             const productoSeleccionado = productos.find(producto => producto.id == productoId)

//             carrito.push(productoSeleccionado);
//             console.log(carrito);



//             localStorage.setItem("carrito", JSON.stringify(carrito))
//         }
//     })
// }















