'use strict';
let total = 0;
let quantity;
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

        quantity = document.createElement('input'); // create quantity input for the user 
        tr.appendChild(quantity);
        quantity.setAttribute('type', 'number');
        quantity.setAttribute('placeholder', 'quantity');
        quantity.setAttribute('value', '2');
        quantity.setAttribute('class', 'qunt');

        let remov = document.createElement('button');
        tr.appendChild(remov);
        remov.innerHTML = 'delete';
        td.textContent = `${allCart[i].name} ${allCart[i].price}JD`;
        remov.addEventListener('click', removrow);
        function removrow(event) {
            // tr.remove(i);

            // الجلطة
            localStorage.removeItem(allCart[i]);
            
            console.log(i);
        }
    }

    // console.log(quantity.value);
    let th = document.createElement('th');
    let totalRow = document.createElement('tr');  // calculate 
    for (let i = 0; i < allCart.length; i++) {
      
        table.appendChild(totalRow);
        totalRow.appendChild(th);
        total += parseInt(allCart[i].price) * quantity.value;

    }
    th.textContent = `Total ${total}`;
}