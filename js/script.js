let bienvenido = document.querySelector("#bienvenido");
let registrarN = document.querySelector("#registrarN");
let registrarM = document.querySelector("#registrarM");
let listoN = document.querySelector("#listoN");
let listoM = document.querySelector("#listoM");
let elegirP = document.querySelector("#elegirP");
let inputM = document.querySelector("#monedasU");
let pokeContainer = document.querySelector(".pokeContainer");
let listoP = document.querySelector("#listoP");
let aviso1 = document.querySelector("#aviso1");
let aviso2 = document.querySelector("#aviso2");
let aviso3 = document.querySelector("#aviso3");
let arrayInputs = document.getElementsByTagName("input");
let contenedorUsuario = document.querySelector("#contenedorUsuario");
let continuarTienda = document.querySelector("#next");
let continuarContenedor = document.querySelector("#continuar");
let seccionTienda = document.querySelector(".seccion-tienda");
let contenedorTienda = document.querySelector("#tienda-container");
let botonCarrito = document.querySelector("#carrito-boton-seccion");
let piedraFuego = document.querySelector("#piedra-fuego");
let piedraAgua = document.querySelector("#piedra-agua");
let piedraHoja = document.querySelector("#piedra-hoja");
let usuarioN;
let usuarioM;
let usuarioP;
let usuario = [];




/////////////////////////////////////////// CLASE.
class Usuario {

    static id = 0;
    static monedasDisponibles;
    static starterP;
    constructor(nombre, monedasDisponibles, starterP) {
        this.id = ++Usuario.id;
        this.nombre = nombre;
        this.monedasDisponibles = monedasDisponibles;
        this.starterP = starterP;

    }

    agregarMonedas = (n) => {
        this.monedasDisponibles + n;

    }

    quitarMonedas = ((totalRestar) => {
        this.monedasDisponibles = this.monedasDisponibles - totalRestar;
    })

}

/////////////////////////////////////////////////////////////////////////////////Metodo para crear usuario.
crearUsuario = () => {
    const usuarioNew = new Usuario(usuarioN, usuarioM, usuarioP);
    usuario.push(usuarioNew);
    localStorage.setItem("usuario", JSON.stringify(usuario))
}

///////////////////////////////////////////////////////////////////////////////// Validacion de numeros.

//////////////////////////////////////////////////////////////////////////////////card de bienvenida

let tarjetaBienvenido = () => {
    const contenedor = document.createElement("div");
    const boton = document.createElement("button")
    boton.type = "button";
    boton.innerHTML = "Empecemos"
    boton.id = "start"
    boton.className = "button-styles"
    contenedor.innerHTML = `
    <h1>Bienvenidx al Centro Pokemon!</h1>
    <img src="https://64.media.tumblr.com/2ebf328e6e4a2bc57b0dc5c1b1004a5b/tumblr_pyffs3pYjQ1ywnabyo1_640.png" alt="">
    <p id="parrafo1"> Primero tenemos que ingresarte... ¿Empezamos?</p>
    `
    boton.addEventListener("click", () => {
        tarjetaNombre()
    })
    bienvenido.appendChild(boton)
    bienvenido.insertBefore(contenedor, bienvenido.firstChild);
}

tarjetaBienvenido()

let tarjetaNombre = () => {

    const boton = document.createElement("button")
    const inputN = document.createElement("input")
    inputN.type = "text";
    boton.type = "button";
    boton.innerHTML = "Listo!";
    boton.className = "button-styles"
    let contenedor = document.createElement("div");
    if (registrarN.firstChild || bienvenido.firstChild) {

        bienvenido.removeChild(bienvenido.firstChild)
        bienvenido.removeChild(start)
    }

    contenedor.innerHTML = `
        <h2>Vamos a ingresarte.!</h2>
        <p id="parrafo1"> Empecemos con tu nombre</p>
        <p class="hidden" id="aviso1"> Ingresá un nombre</p>
                    `
    registrarN.appendChild(contenedor);
    contenedor.appendChild(inputN);
    contenedor.appendChild(boton)






    boton.addEventListener("click", () => {
        usuarioN = inputN.value;
        tarjetaMonedas()
    })


}



let tarjetaMonedas = () => {
    const boton = document.createElement("button")
    const inputM = document.createElement("input")
    const aviso = document.createElement("p")
    aviso.id = "aviso2"
    aviso.innerHTML = `Ingresá una cantidad válida de monedas`
    inputM.type = "number";
    inputM.pattern = "^[0-9]+"
    boton.type = "button";
    boton.innerHTML = "Listo!";
    boton.className = "button-styles"
    let contenedor = document.createElement("div");
    if (registrarN.firstChild) {

        registrarN.removeChild(registrarN.firstChild)

    }

    contenedor.innerHTML = `       
        <h2>Vamos a ingresarte.</h2>
        <p id="parrafo1"> Ingresa cantidad de monedas disponibles</p>
        <p class="hidden" id="aviso2"> Ingresá una cantidad válida de monedas!</p>
         `

    registrarM.appendChild(contenedor);
    contenedor.appendChild(inputM);
    contenedor.appendChild(boton);




    boton.addEventListener("click", () => {
        usuarioM = inputM.value;
        if (usuarioM === "") {

            contenedor.appendChild(aviso)

        } else {
            escogerPokemon();
        }
    })

    inputM.addEventListener("keypress", (k) => {
        k.preventDefault(); // previene que el navegador trabaje por default
        let codigoKey = k.keyCode;
        let valorKey = String.fromCharCode(codigoKey);
        let valor = parseInt(valorKey);
        if (valor || valorKey === "0") {
            inputM.value += valor;
        }
    })


}

let escogerPokemon = () => {
    ////boton 
    const boton = document.createElement("button")
    boton.type = "button";
    boton.innerHTML = "Listo!";



    //inputs
    const inputC = document.createElement("input")
    inputC.name = "poke"
    inputC.type = "radio"
    inputC.id = "Charmander"
    const inputS = document.createElement("input")
    inputS.name = "poke"
    inputS.type = "radio"
    inputS.id = "Squirtle"
    const inputB = document.createElement("input")
    inputB.name = "poke"
    inputB.type = "radio"
    inputB.id = "Bulbasaur"


    /// Contenedor
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<p id="parrafo1"> Elija uno de los siguientes starters: </p>`


    //contenedorPokemones
    let contenedorC = document.createElement("div")
    contenedorC.innerHTML = `<img src="https://img.itch.zone/aW1nLzI0ODQ0NjcuZ2lm/347x500m/FOj44r.gif" alt="">
                        <label for="1"> Charmander</label>`

    let contenedorB = document.createElement("div")
    contenedorB.innerHTML = `<img src="https://static.wikia.nocookie.net/pokemon-radiance/images/7/7b/226_Bulbasaur.png/revision/latest?cb=20201127011423" alt="">
                        <label for="2">Bulbasaur</label>`

    let contenedorS = document.createElement("div")
    contenedorS.innerHTML = `<img src="https://static.wikia.nocookie.net/pokemon-radiance/images/e/e9/232_Squirtle.png/revision/latest/thumbnail/width/360/height/360?cb=20201026010633" alt="">

                        <label for="3">Squirtle</label>`
  /////agregarlos al html 


    
    pokeContainer.appendChild(contenedorC);
    contenedorC.appendChild(inputC);

    
    pokeContainer.appendChild(contenedorS);
    contenedorS.appendChild(inputS);

    
    pokeContainer.appendChild(contenedorB);
    contenedorB.appendChild(inputB);

    elegirP.insertBefore(contenedor, elegirP.firstChild);

    pokeContainer.appendChild(boton)


    if (registrarM.firstChild) {

        registrarM.removeChild(registrarM.firstChild)

    }

    
    console.log(arrayInputs)

    boton.addEventListener("click", () => {
        añadirPokemon();
    })
    
}

let añadirPokemon = () => {
    
    for (const input of arrayInputs) {
        ;
         if (input.checked) {
            usuarioP = input.id
        }
     }

     crearUsuario();
     Swal.fire({
        title: 'Gracias por Registrarte!',
        text: 'Ahora pasemos a la tienda',
        icon: 'success',
        confirmButtonText: '<a href="./tienda.html"">Ok!</a>'
      })
     console.log(usuario)


     localStorage.setItem("usuario", JSON.stringify(usuario))
}



function renderUsuario(array) {
    usuario.forEach(element => {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `
        <h2>Ingreso completado!</h2>
        <h3> Hola  </h3>
        <p>${element.nombre} ! </p>
        <p>Contás con una cantidad de <b> ${element.monedasDisponibles} </b> moneditas.</p>
        <p>Elegiste tu starter, que es <b> ${element.starterP} </b></p>
        
        `
        contenedorUsuario.appendChild(contenedor);
    });

    continuar.style.display = "flex";
}