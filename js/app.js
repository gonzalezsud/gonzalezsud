import data from "./data.js";
import dom from "./dom.js";


const url = "./stays.json";

const lugares = dom.$('#lugares');

const datos = await data.getData();

//const categories = data.getCategories(datos);

const huespedes = data.getHuespedes(datos);

const city = data.GetCity(datos);

//const huespedes = data.getHuespedes(datos);
console.log(city);

//console.log(guests);

//datos.forEach( Element => console.log(Element))
datos.forEach( Element =>{
 const card = dom.newcard(Element)
lugares.appendChild(card);
})



