'use strict';

let allProduct = [];

function setProduct() {
  let productdata = JSON.stringify(allProduct);
  console.log(productdata);
  localStorage.setItem('cart', productdata);
}


function gitProduct() {
  let stringdata = localStorage.getItem('cart');
  allProduct = JSON.parse(stringdata);
  if (stringdata) {
    allProduct = JSON.parse(stringdata);
    // localStorage.cart = allproduct;
    // console.log(allProduct);
  }
}



let sectionTable = document.getElementById('section');
let table = document.getElementById('tableCart');
let tr;
let th;
let remov;

function renderTable() {
  gitProduct();
  // console.log(allProduct);
  // if (allProduct.length) {

  for (let i = 0; i < allProduct.length; i++) {
    tr = document.createElement('tr');
    tr.setAttribute('id', i);
    // console.log(tr);
    table.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    let tdImg = document.createElement('td');
    tr.appendChild(tdImg);
    let img = document.createElement('img');
    tdImg.appendChild(img);
    img.src = allProduct[i].source;
    // console.log('cartsource', allCart[i].source);
    img.alt = allProduct[i].name;
    td.textContent = `${allProduct[i].name}`;
    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = `${allProduct[i].price}JD`;
    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = `Quantity :${allProduct[i].quantity}`;
    let tdRemov = document.createElement('td');
    tr.appendChild(tdRemov);
    remov = document.createElement('button');
    remov.setAttribute('class', 'removebutton');
    remov.id = i;
    tdRemov.appendChild(remov);
    remov.innerHTML = 'delete';
  }
  booksTotal();

}
// }

let total = 0;
function booksTotal() {
  th = document.createElement('th');
  let totalRow = document.createElement('tr'); // calculate
  // table.appendChild(totalRow);
  totalRow.appendChild(th);
  for (let i = 0; i < allProduct.length; i++) {

    total = total + (parseInt(allProduct[i].price * allProduct[i].quantity));
    console.log(total);
  }
  th.textContent = `Total ${total}`;
  if (allProduct.length){
    table.appendChild(totalRow);
  }
}

// booksTotal();





// window.onload = function () {
table.addEventListener('click', removrow);

function removrow(event) {
  // event.preventDefault();
  let deleteId;
  console.log(event.target.className);
  console.log(event.target.id);
  if (event.target.className === 'removebutton') {
    deleteId = event.target.id;
    console.log(deleteId);
    allProduct.splice(deleteId, 1);
    console.log('after', allProduct);
    // localStorage.clear();
  }
  setProduct();
  clearTable();
  // location.reload();
  renderTable();
}
// }

function clearTable() {
  if (allProduct.length) {
    table.innerHTML = '';
    // renderTable();
  } else {
    table.innerHTML = '<div><h2>The cart is empty</h2></div>';
  }
}

renderTable();













// let th;
// let tr;
// let remov;
// let total = 0;
// let quantity = document.getElementsByClassName('qunt');
// let allCart;
// let table = document.getElementById('tableCart');
// function rendercart() {
//   if (localStorage.cart) {
//     allCart = JSON.parse(localStorage.cart);
//     console.log('allCart', allCart);
//     for (let i = 0; i < allCart.length; i++) {
//       tr = document.createElement('tr');
//       tr.setAttribute('id', i);
//       table.appendChild(tr);
//       let td = document.createElement('td');
//       tr.appendChild(td);
//       let img = document.createElement('img');
//       tr.appendChild(img);
//       img.src = allCart[i].source;
//       // console.log('cartsource', allCart[i].source);
//       img.alt = allCart[i].name;

//       quantity = document.createElement('input'); // create quantity input for the user
//       tr.appendChild(quantity);
//       quantity.setAttribute('type', 'number');
//       quantity.setAttribute('placeholder', 'quantity');
//       quantity.setAttribute('value', '1');
//       quantity.setAttribute('class', 'qunt');

// remov = document.createElement('button');
// remov.setAttribute('class', 'removebutton');
// tr.appendChild(remov);
// remov.innerHTML = 'delete';
// td.textContent = `${allCart[i].name} ${allCart[i].price}JD`;

//       // eslint-disable-next-line no-inner-declarations

//       th = document.createElement('th');
//       let totalRow = document.createElement('tr'); // calculate
//       table.appendChild(totalRow);
//       totalRow.appendChild(th);
//       // removrow();
//     }

//     // console.log(quantity.value);

//   }

// }
// // rendercart();
// //////////// books Total
// remov.getElementsByClassName('removebutton');
// remov.addEventListener('click', removrow);
// function removrow() {
//   for (let i = 0; i <allCart.length; i++) {
//   tr.remove(i);
//   // الجلطة  by Hamza
//   //   console.log(localStorage.cart);
//   //   localStorage.removeItem('cart' ,localStorage[i]);
//   let cart = JSON.parse(localStorage.getItem('cart'));
//   cart.splice(i, 1);
//   localStorage.setItem('cart', JSON.stringify(cart));
// }
// }
// function booksTotal() {
//   // let th = document.createElement('th');
//   // let totalRow = document.createElement('tr'); // calculate
//   // table.appendChild(totalRow);
//   // totalRow.appendChild(th);
//   for (let i = 0; i < allCart.length; i++) {

//     total = total + (parseInt(allCart[i].price) * quantity.value);
//     console.log(quantity.value);
//   }
//   th.textContent = `Total ${total}`;
// }
// booksTotal();

// ////////////////////////////////////////////// change q number
// let quantityChange = document.getElementsByClassName('qunt');
// for (let i = 0; i < quantityChange.length; i++) {
//   let input = quantityChange[i];
//   input.addEventListener('change', inputChanged);
// }
// function inputChanged(event) {
//   let input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   // booksTotal();
//   // console.log(input.value);
//   console.log('total', total);
// }


// function setProduct() {
//   let productdata = JSON.stringify(localStorage.cart);
//   console.log(productdata);
//   localStorage.setItem('cart', productdata);
// }

// let allproduct =[];

// function gitProduct() {
//   let stringdata = localStorage.getItem('cart');
//   allproduct = JSON.parse(stringdata);
//   if (stringdata) {
//     allproduct= JSON.parse(stringdata)
//     // localStorage.cart = allproduct;
//     console.log(allproduct);
//   }

// }
// gitProduct();
