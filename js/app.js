'use strict';

//// global array to store book name and src
let allBookImg = [];
console.log(allBookImg);

// constractor for images
function BooksImg ( name , source){
  this.name = name;
  this.source = source;
  allBookImg.push(this);
}

new BooksImg ('Book1' , 'img/image1.jpg');
new BooksImg ('Book2' , 'img/image2.jpg');
new BooksImg ('Book3' , 'img/image3.webp');
new BooksImg ('Book4' , 'img/image4.jpg');
new BooksImg ('Book5' , 'img/image5.PNG');
new BooksImg ('Book6' , 'img/image6.jpg');
new BooksImg ('Book7' , 'img/image7.jpg');

// call element from html by class name
let addToCartBtn = document.getElementsByClassName('btn');
console.log (addToCartBtn);

// test table
let table = document.getElementById('tableCart');

//////// variable for adding the book to the cart
let addBookSrc;
let addBookName;
let addBtn;

function addBooks() {

  for (let i = 0; i < addToCartBtn.length; i++) {
    addBtn = addToCartBtn[i];

    addBtn.addEventListener('click' , userClick);

    // eslint-disable-next-line no-inner-declarations
    function userClick(event){
    // the books aray
      addBookSrc = allBookImg[i];
      // console.log(addBookSrc);
      // to get the src from the array
      addBookSrc.src = allBookImg[i].source;
      // to get the name
      addBookName = allBookImg[i].name;
      console.log('src ' ,addBookSrc.src);
      console.log('book name ',addBookName);
      // render image and add data
      let tr =document.createElement('tr');
      table.appendChild(tr);
      let td = document.createElement('td');
      tr.appendChild(td);
      let img = document.createElement('img');
      tr.appendChild(img);
      img.src = allBookImg[i].source;
      console.log(img);
      td.textContent = `${addBookName}`;

    }
  }
}

addBooks();
