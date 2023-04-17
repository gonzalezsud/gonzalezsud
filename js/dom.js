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
};

const huespedes  = (huespedes) => {
 const list = $('#huespedes');

 huespedes.forEach( elemn => {
  const li = newE('li');
  li.className = `pointer py-1 px-3 ${elemn === 'ALL' ? 'acc-categorie' : '' }`;
  li.innerHTML = `<a href="#${elemn}"> ${elemn}</a>`;
  list.appendChild(li);
 })

};


export default {
    huespedes,
    newcard,
    $,
}