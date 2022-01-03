//Burger menu > < Navigation Menu
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

//Hiding nav bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNavtoggle").style.top = "0";
  } else {
    document.getElementById("myNavtoggle").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//Back-to-top Arrow
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down n px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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
