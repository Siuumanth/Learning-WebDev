// fetch is a functin used to make http requests to fetch resources.
// json data, images, files can be fetched
// simplified async data fetching in js and used for interacting with APIs to retrieve and send data asynchronously over the web

//    fetch(url, {method : "POST", "GET"})


//its a future function, it has a promise

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    if(!response.ok){          //seeing if response is success
    throw new Error("Could not fetch resourse")
    }
    else{
        return response.json();
    }
})
.then(data => console.log(data))
.catch(error=>console.error(error)); */

// converting the respoonse to json

//By using async



async function fetchData(){
    try{
        const name = document.getElementById("PokemonName").value;
const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
if(!response.ok){
    throw new Error("Could not fetch resource");
}
const data = await response.json();
const sprite = data.sprites.front_default;
const imageElement=document.getElementById("sprite")

 imageElement.src=sprite;   //updating the src attribute
 imageElement.style.display = "block"; //displaying data

console.log(data);
    }catch(error){
        console.error(error);
    }
}