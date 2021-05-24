'use strict';



//// global array to store book name and src
let allBookImg = [];
// console.log(allBookImg);
// add counter to cart and localstorg
let cartArray = [];

function CartItem(name, source, price) {
  this.name = name;
  this.source = source;
  this.price = price;
  cartArray.push(this);
  this.quantity = 0;
}

// constractor for images
function BooksImg(name, source, price) {
  this.name = name;
  this.source = source;
  this.price = price;
  allBookImg.push(this);
  this.quantity = 0;
}

new BooksImg('Beautiful maind', 'img/beautifulmaind.jpg', '14');
new BooksImg('Time of white hores', 'img/timeofwhithores.png', '17');
new BooksImg('Wakeup', 'img/wakeup.jpg', '34');
new BooksImg('Evil panicmin', 'img/evilpanicmin.jpg', '24');
new BooksImg('Minbanana', 'img/minbanana.jpg', '27');
new BooksImg('Golden book', 'img/goldenbook.jpg', '31');
new BooksImg('Css book', 'img/cssbook.jpg', '40');
new BooksImg('Html book', 'img/htmlbook.jpg', '19');
new BooksImg('Javabook', 'img/javabook.PNG', '25');

// call element from html by class name
let addToCartBtn = document.getElementsByClassName('btn');
console.log(addToCartBtn);

// test table
// let table = document.getElementById('tableCart');

//////// variable for adding the book to the cart
let addBookSrc;
let addBookName;
let addBtn;

function addBooks() {

  for (let i = 0; i < addToCartBtn.length; i++) {
    addBtn = addToCartBtn[i];

    addBtn.addEventListener('click', userClick);

    // eslint-disable-next-line no-inner-declarations
    function userClick() {
      // the books aray
      addBookSrc = allBookImg[i];
      // console.log(addBookSrc);

      // to get the src from the array
      addBookSrc.src = allBookImg[i].source;

      // to get the name
      addBookName = allBookImg[i].name;

      // ===========================================
      // push the img source and name to the array
      new CartItem(addBookName, addBookSrc.src, allBookImg[i].price);
      console.log(cartArray);
      // console.log('src ', addBookSrc.src);
      // console.log('book name ', addBookName);

      // render image and add data
      // let tr = document.createElement('tr');
      // table.appendChild(tr);
      // let td = document.createElement('td');
      // tr.appendChild(td);
      // let img = document.createElement('img');
      // tr.appendChild(img);
      // img.src = cartArray[i].source;
      // console.log('cartsource', cartArray[i].source);

      // // img.alt = allBookImg[i].name;

      // td.textContent = `${addBookName}`;

      setBookdata();
      countCart();

    }

  }

}



// function to count the books user choosed
function countCart() {
  let count = document.getElementById('cartid');
  count.textContent = cartArray.length;
  // console.log(count);
}


// function to set the data in the local storage
function setBookdata() {
  let localdata = JSON.stringify(cartArray);
  // console.log('string', localdata);
  localStorage.setItem('cart', localdata);
}

// getting local storage function
function getBookStorage() {
  let strIngs = localStorage.getItem('cart');
  let backToNormal = JSON.parse(strIngs);
  console.log('back ', backToNormal);
  if (backToNormal !== null) {
    cartArray = backToNormal;
  }
}

// add quantity function
let quantArry = [];
let quantityForm = document.querySelectorAll('.inputform');
console.log(quantityForm);
for (let i = 0; i < quantityForm.length; i++) {
  quantityForm[i].addEventListener('submit', quantityinput);

  function quantityinput(event) {
    // for(let i =0; i< allBookImg.length;i++){
    let formIn = 
    event.preventDefault();
    formIn = event.target.childNodes[0].parentNode[1].value
    // .target.childnode.text.perntNode.input.attributes.value.childnodes.nodeValue;
    
    console.log(formIn);

  }
}
// }
addBooks();
getBookStorage();

