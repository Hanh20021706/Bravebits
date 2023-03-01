// products main

function openItem(itemName) {
  var i;
  var x = document.getElementsByClassName("item-main");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(itemName).style.display = "block";
}

// categories

function openCate(cateName) {
  var i;
  var x = document.getElementsByClassName("category-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cateName).style.display = "flex";
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// menu

function functionToggle() {
  var x = document.getElementById("navMain");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);


// const tabs = $$(".category-discover-btn");
// const panes = $$(".category-2__product-list");


// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     console.log(tab)
//     $(".category-discover-btn.category-discover-btn--active").classList.remove("category-discover-btn--active");
//     $(".category-2__product-list.category-2__product-list--active").classList.remove("category-2__product-list--active");
    
//     this.classList.add("category-discover-btn--active");
//     pane.classList.add("category-2__product-list--active");
//   };
// });