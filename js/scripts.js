//BURGER MENU TO NAVBAR W/ LABELS
// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//HIDDING NAVBAR
// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var lastScrollTop;
navbar = document.getElementById("navigation");
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-95px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

//SLIDING EFFECT TO COMPARE BEFORE/AFTER USABILITY TEST


//BACK-TO-TOP ARROW
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down n px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 625 || document.documentElement.scrollTop > 625) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
