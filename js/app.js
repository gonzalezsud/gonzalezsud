import data from "./data.js";
import dom from "./dom.js";


const url = "./stays.json";


const datos = await data.getData();

const city = data.getCity(datos);

dom.addCity(city);

// const catList = [...dom.$('#city').children];

// console.log(catList);

const huespedes = data.getHuespedes(datos);

console.log(city);

dom.muestraCard(datos);

let ciudadSeleccionada = "";
let filtrado = null;

const listcity = [...dom.$('#list-city').children]
listcity.forEach(elem => {
    elem.addEventListener("click", () => {
    if (elem.textContent.includes("Helsinki")) {
        ciudadSeleccionada = "Helsinki" 
    } else if  (elem.textContent.includes("Turku")) {
        ciudadSeleccionada = "Turku" 
    } else if  (elem.textContent.includes("Oulu")) {
        ciudadSeleccionada = "Oulu" 
    }  else  {
        ciudadSeleccionada = "Vaasa" 
    }   
        console.log(elem);
    })
})

const filtroboton = dom.$('#filtro-boton');
filtroboton.addEventListener("click", () => {
    if (ciudadSeleccionada != ""){
        filtrado = data.filted(datos, ciudadSeleccionada);
        console.log(filtrado);
        dom.muestraCard(filtrado)
    } 
       else if (total > 0) {
        filtrado = data.filthuespedes(datos, total)
        dom.muestraCard(filtrado)
        
    }
        contadultos = 0;

        contniños = 0;
        contadoradultos.innerHTML = contadultos; 
        contadorniños.innerHTML = contniños;

    }) ;


// filtro de los huespedes

const menosadultos = dom.$('#menos-adultos');
const contadoradultos = dom.$('#contador-adultos');
const masadultos = dom.$('#mas-adultos');
const menosniños = dom.$('#menos-niños');
const contadorniños = dom.$('#contador-niños');
const masniños = dom.$('#mas-niños');

let contadultos = 0;
let contniños = 0;
let total = 0;

menosadultos.addEventListener('click', () => {
    if (contadultos > 0 ){
        contadultos = contadultos -1;
      contadoradultos.innerHTML = contadultos;  
      total = total - 1;
    } 
}) ;
masadultos.addEventListener('click', () => {
    if (contadultos < 10 ){
        contadultos = contadultos +1;
      contadoradultos.innerHTML = contadultos;  
      total = total + 1;
    } 
} )

menosniños.addEventListener('click', () => {
    if (contniños > 0) {
        contniños = contniños -1;
        contadorniños.innerHTML = contniños;
        total = total - 1;
    }
});

masniños.addEventListener('click', () => {
    if (contniños < 10) {
        contniños = contniños +1;
        contadorniños.innerHTML = contniños;
        total = total + 1;
    }
})

