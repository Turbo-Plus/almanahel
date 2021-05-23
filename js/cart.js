'use strict';
let table = document.getElementById('tableCart');

if (localStorage.cart) {
    let allCart = JSON.parse(localStorage.cart);
    console.log('allCart', allCart);
    for (let i = 0; i < allCart.length; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let td = document.createElement('td');
        tr.appendChild(td);
        let img = document.createElement('img');
        tr.appendChild(img);
        img.src = allCart[i].source;
        console.log('cartsource', allCart[i].source);

        img.alt = allCart[i].name;

        td.textContent = `${allCart[i].name}`;
    }

}
