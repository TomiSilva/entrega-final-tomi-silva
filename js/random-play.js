let container = document.getElementById("poke-card-container")
let btn = document.getElementById("random-card")
let pokeData = [] // donde guardo la URL para la data del poke
let randomized
/////////////////////////////////////////////////////////////////////////////////////////

const showCard = async () => {
    const errorC = "<span>Semething's wrong :(</span>"
   let render = "";
try {
    let r = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=150")
    let response = await r.json()
    .then (data => {
        let url ="";
        pokeData.push(data.results)   
        randomL(pokeData)
    })
} catch (error) {
        render = errorC;
} finally {
console.log("ok")
}
   
}


            


function randomL(array){
    let arr = array[0]
   let newUrlF
   let urlF
   let type1 = "";
   let type2 = "";
   let sprite ="";

   urlF = arr[Math.floor(Math.random() * arr.length)]
   newUrlF= urlF.url
 
   fetch(newUrlF)
   .then(res => res.json())
   .then(data => {  
    console.log(data)      
    type1 = data.types[0].type.name   
    sprite = data.sprites.front_default           
     if (data.types.length === 1){
          type2 = "not found"        
     }  else {
        type2 = data.types[1].type.name
     }

     const card = document.createElement("div")
     card.className += "first-child"
        card.innerHTML = `
        <img class="card-image" src="${sprite}"> </img>
        <h2> ${data.name} </h2>
        <div><h3> Type 1: <p> ${type1} </p> </h3>
        <h3> Type 2: <p> ${type2}</p> </h3> </div>
        `
        
        container.appendChild(card)
   })
}

btn.addEventListener("click", () => {
    if (container.firstChild) {
        container.removeChild(container.firstChild)
    }
showCard()

})
////////////////////////////

