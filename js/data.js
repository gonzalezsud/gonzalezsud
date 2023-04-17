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

const getGuests = (data) => {
let guests = data.map( elem => elem.maxGuests[0]);
// guests = new Set(guests);

guests  = [...guests];
console.log(guests);
return guests
} 

export default {
  getData,
  getGuests
}




