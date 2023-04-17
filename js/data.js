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

//const getCategories = (data) => {
//const categories = data.map( elem => elem.maxGuests);
//console.log(categories);

//return categories;

//};

const getHuespedes = (data) =>  {
  const huespedes = data.map( elem => elem.maxGuests);
  console.log(huespedes);

  return huespedes;
};

const GetCity = (data) => {
  const city = data.map( elem => elem.city);

  return city;

}
export default {
  getData,
  //getCategories,
  getHuespedes, 
  GetCity
}




