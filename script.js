console.log("script is running");

window.onscroll = function() {sticky_nav()};

let navbar = document.getElementById("navbar");
let ham = document.getElementById("ham");
cross = document.getElementById("cross")

let sticky = navbar.offsetTop;

function sticky_nav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function responsive(){
  if(navbar.classList.contains("responsive")){
    navbar.classList.remove("responsive");
    ham.style.display = "block"
    cross.style.display = "none"
  }else{
    navbar.classList.add("responsive")
    cross.style.display = "block"
    ham.style.display = "none"


}


}
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();