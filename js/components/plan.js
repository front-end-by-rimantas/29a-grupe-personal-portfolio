"use strict";
function planCards(data) {
    let HTML = '';
    const DOM = document.querySelector('#plans-block');
    for (let {number, title, description, p1, p2, p3, price} of data)
    {
        HTML += `<div class="col-12 col-md-6 col-lg-3 cards">
         <h1 class="num">${number}</h1>
         <h4 class="title">${title}</h4>
         <p>${description}</p>
         <p class="p1">${p1}</p>
         <p class="p2">${p2}</p>
         <p class="p3">${p3}</p>
         <h2>${price}</h2>
        <a href="#" class="btn">BUY NOW</a>
                </div>`
    }
    DOM.innerHTML += HTML;
}
export { planCards };