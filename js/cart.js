'use strict';

let allProduct = [];
let total = 0;

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


let trHead = ['Name','Img','Price', 'Quantity',''];
let sectionTable = document.getElementById('section');
let table = document.getElementById('tableCart');
let tr;
let th;
let remov;

function renderTable() {
  gitProduct();
  // console.log(allProduct);
  if (!allProduct.length || allProduct == null) {
    table.innerHTML = '<div><img id="emptycart" src="img/emptycart.png" alt="emptycart.png"></div>';
  }else {
    tableHEad();
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
      tdImg.setAttribute('class','bokimage');
      img.src = allProduct[i].source;
      // console.log('cartsource', allCart[i].source);
      img.alt = allProduct[i].name;
      td.textContent = `${allProduct[i].name}`;
      let td2 = document.createElement('td');
      tr.appendChild(td2);
      td2.textContent = `${allProduct[i].price}JD`;
      let td3 = document.createElement('td');
      tr.appendChild(td3);
      td3.textContent = `${allProduct[i].quantity}`;
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
}

function booksTotal() {
  th = document.createElement('th');
  let totalRow = document.createElement('tr'); // calculate
  // table.appendChild(totalRow);
  totalRow.appendChild(th);
  for (let i = 0; i < allProduct.length; i++) {

    total = total + (parseInt(allProduct[i].price));
    console.log(total);
  }
  th.textContent = `Total ${total}`;
  if (allProduct.length){
    table.appendChild(totalRow);
  }
}

// booksTotal();

function tableHEad(){
  for (let i =0 ; i< trHead.length ; i++) {
    let trH=document.createElement('th');
    table.appendChild(trH);
    trH.textContent=trHead[i];
  }
}





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
  }
}

renderTable();

