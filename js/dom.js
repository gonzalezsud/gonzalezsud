/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $ = (selector) => document.querySelector(selector);


const newcard = (obj) => {
    const div = document.createElement('div');
    div.className = 'col';

    //insertar los elementos del card

    div.innerHTML = `
    
    <div class="img card-img-modified">
      <img class="w-100 h-100 rounded-4"src="${obj.photo}" alt="${obj.city}">
      </div>
      <div class="info d-flex justify-content-between mt-3">
      <p class="d-flex flex-column">
      <span class="">${obj.superHost[true]}</span>
      <span>${obj.type}</span>
      <span class="material-symbols-outlined">star</span>
      <span>${obj.rating}</span>
        </p>
        <div>
        <h6>${obj.title}</67>
        </div>
      </div>
    
  
    
    `
    return div;
}
export default {
    newcard,
    $,
}