'use strict';

let total = 0;
let quantity = document.getElementsByClassName('qunt');
let allCart;
let table = document.getElementById('tableCart');
if (localStorage.cart) {
  allCart = JSON.parse(localStorage.cart);
  console.log('allCart', allCart);
  for (let i = 0; i < allCart.length; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    let img = document.createElement('img');
    tr.appendChild(img);
    img.src = allCart[i].source;
    // console.log('cartsource', allCart[i].source);
    img.alt = allCart[i].name;

    quantity = document.createElement('input'); // create quantity input for the user
    tr.appendChild(quantity);
    quantity.setAttribute('type', 'number');
    quantity.setAttribute('placeholder', 'quantity');
    quantity.setAttribute('value', '1');
    quantity.setAttribute('class', 'qunt');

    let remov = document.createElement('button');
    tr.appendChild(remov);
    remov.innerHTML = 'delete';
    td.textContent = `${allCart[i].name} ${allCart[i].price}JD`;
    remov.addEventListener('click', removrow);
    // eslint-disable-next-line no-inner-declarations
    function removrow() {
      tr.remove(i);
      // الجلطة  by Hamza
      //   console.log(localStorage.cart);
      //   localStorage.removeItem('cart' ,localStorage[i]);
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  // console.log(quantity.value);

}



//////////// books Total

function booksTotal(){
  let th = document.createElement('th');
  let totalRow = document.createElement('tr'); // calculate
  for (let i = 0; i < allCart.length; i++) {

    table.appendChild(totalRow);
    totalRow.appendChild(th);
    total= total + (parseInt(allCart[i].price) * quantity.value);

  }
  th.textContent = `Total ${total}`;
}
booksTotal();

////////////////////////////////////////////// change q number
let quantityChange = document.getElementsByClassName('qunt');
for (let i = 0; i < quantityChange.length; i++) {
  let input = quantityChange[i];
  input.addEventListener('change' , inputChanged);
}
function inputChanged(event){
  let input = event.target;
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  console.log(input.value);
  console.log('total', total);
}



