import data from "./data.js";
import dom from "./dom.js";


const url = "./stays.json";

const lugares = dom.$('#lugares');

const datos = await data.getData();

const guests = data.getGuests(datos);

console.log(datos);

//console.log(guests);

//datos.forEach( Element => console.log(Element))
datos.forEach( Element =>{
 const card = dom.newcard(Element)
lugares.appendChild(card);
})



