import data from "./data.js";
import dom from "./dom.js";


const url = "./stays.json";

const lugares = dom.$('#lugares');

const datos = await data.getData();

const city = data.getCity(datos);

dom.addCity(city);

const catList = dom.$('#city');

console.log(catList);

const huespedes = data.getHuespedes(datos);

console.log(city);

datos.forEach( Element =>{
 const card = dom.newcard(Element)
lugares.appendChild(card);
})



