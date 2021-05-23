'use strict';



//// global array to store book name and src
let allBookImg = [];
// console.log(allBookImg);
// add counter to cart and localstorg
let cartArray = [];
// console.log('cartArray', cartArray);
// constractor for images
function BooksImg(name, source) {
  this.name = name;
  this.source = source;
  allBookImg.push(this);
}

new BooksImg('Beautiful maind', 'img/beautifulmaind.jpg');
new BooksImg('Time of white hores', 'img/timeofwhithores.png');
new BooksImg('Wakeup', 'img/wakeup.jpg');
new BooksImg('Evil panicmin', 'img/evilpanicmin.jpg');
new BooksImg('Minbanana', 'img/minbanana.jpg');
new BooksImg('Golden book', 'img/goldenbook.jpg');
new BooksImg('Css book', 'img/cssbook.jpg');
new BooksImg('Html book', 'img/htmlbook.jpg');
new BooksImg('Javabook', 'img/javabook.PNG');

// call element from html by class name
let addToCartBtn = document.getElementsByClassName('btn');
// console.log(addToCartBtn);

// test table
let table = document.getElementById('tableCart');

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
      cartArray.push([addBookSrc.src, addBookName]);
      console.log(cartArray);
      // console.log('src ', addBookSrc.src);
      // console.log('book name ', addBookName);

      // render image and add data
      let tr = document.createElement('tr');
      table.appendChild(tr);
      let td = document.createElement('td');
      tr.appendChild(td);
      let img = document.createElement('img');
      tr.appendChild(img);
      img.src = cartArray[0[0]];

      // img.alt = allBookImg[i].name;

      td.textContent = `${addBookName}`;

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
  console.log('string', localdata);
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

addBooks();
getBookStorage();

