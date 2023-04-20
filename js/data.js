/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

 return data;
};

const getHuespedes = (data) =>  {
  let huespedes = data.map( elem => elem.maxGuests);
  
  //huespedes = new Set(huespedes);
  console.log(huespedes);

  return huespedes;
};

const getCity = (data) => {
  const city = data.map( elem => elem.city);

  return city;

};

const filted = (arr, filtro) => {
let filtered = arr.filter( elem => elem.city === filtro)

return filtered 
}
const filthuespedes = (arr, filtro) => {
  let filtered = arr.filter( elem => elem.maxGuests >= filtro)
  
  return filtered 
  }
export default {
  getData,
  getHuespedes, 
  getCity,
  filted,
  filthuespedes
  //filtrar 
}




