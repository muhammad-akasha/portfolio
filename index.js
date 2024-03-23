document.addEventListener("DOMContentLoaded", function() {
  var loadingScreen = document.getElementById("loading-screen");
  
  setTimeout(function() {
    loadingScreen.style.backgroundColor = "#145122"; // Change color to green after 3 seconds
    setTimeout(function() {
      loadingScreen.style.display = "none"; // Hide loading screen after another 3 seconds
    }, 3500); // 3000 milliseconds = 3 seconds
  }, 0); // 3000 milliseconds = 3 seconds
});



const navbarToggle = document.getElementById('navbar-toggle');
const navbarCollapse = document.getElementById('navbarSupportedContent');

navbarToggle.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (!navbarCollapse.contains(event.target) && event.target !== navbarToggle) {
    navbarCollapse.classList.remove('show');
  }
});

window.addEventListener('scroll', () => {
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }
});




const texts = ["feelings", "future", "life"];
const textContainer = document.getElementById("texttype");
const blinkingLine = document.getElementById("blinking-line");
let index = 0;
let charIndex = 0;

function typeText() {
  textContainer.textContent = texts[index].substring(0, charIndex++);
  if (charIndex > texts[index].length) {
    charIndex = 0;
    index = (index + 1) % texts.length;
    setTimeout(typeText, 3500); // Adjust typing speed (milliseconds)
  } else {
    setTimeout(typeText, 100); // Adjust typing speed (milliseconds)
  }
}

typeText();

window.addEventListener("load", function() {
  let navbar = document.querySelector(".navbar"); // Assuming the navbar has the class "navbar"
  navbar.style.setProperty("background-color", "transparent", "important");
});

window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar"); // Assuming the navbar has the class "navbar"

  if (window.scrollY >= 130) {
    navbar.style.setProperty("background-color", "white", "important");
    navbar.style.setProperty("color", "white", "important");
    navbar.style.position = "fixed";
    navbar.style.width = "100%";
    navbar.style.transition = "all ease-in-out 0.2s";
    navbar.style.zIndex = "1000000";
    navbar.classList.add("fadeInDown");

  } else {
    navbar.style.setProperty("background-color", "transparent", "important");
    navbar.style.setProperty("color", "white", "important");
    navbar.style.position = "relative";
    navbar.classList.remove("fadeInDown");

  }
});

// Function to update navigation link colors based on scroll position
function updateNavLinksColor() {
  var navlinks = document.querySelectorAll(".nav-link");
  navlinks.forEach(function(navlink) {
    if (window.scrollY >= 130) {
      navlink.style.setProperty("color", "black", "important");
    } else {
      navlink.style.setProperty("color", "white", "important");
    }
  });
}

// Call the function when the page loads
window.addEventListener("load", function() {
  updateNavLinksColor();
});

// Call the function when the window is scrolled
window.addEventListener("scroll", function() {
  updateNavLinksColor();
});

// Function to set initial state of logos
function setInitialLogoState() {
  let firstlogo = document.getElementById("firstlogo");
  let secondlogo = document.getElementById("secondlogo");
  // Ensure only first logo is displayed and others are hidden
  firstlogo.style.display = "unset";
  secondlogo.style.display = "none";
}

// Call the function to set the initial state of logos when the page loads
window.addEventListener("load", setInitialLogoState);

window.addEventListener("scroll", function() {
  let firstlogo = document.getElementById("firstlogo"); // white
  let secondlogo = document.getElementById("secondlogo"); // black

  if (window.scrollY < 130) {
    firstlogo.style.display = "unset";
    secondlogo.style.display = "none";
  } else {
    firstlogo.style.display = "none";
    secondlogo.style.display = "unset";
    secondlogo.style.color = "black";
    secondlogo.style.width = "165px";
  }
});

// Select all elements with the class .nav-link
const navLinks = document.querySelectorAll(".nav-link");

// Loop through each .nav-link element
navLinks.forEach((link) => {
  // Add event listener for mouseenter
  link.addEventListener("mouseenter", function() {
    // Apply hover effect (change color to red)
    link.style.color = "red";
  });

  // Add event listener for mouseleave
  link.addEventListener("mouseleave", function() {
    // Revert to original color
    if (scrollY >= 130) {
      link.style.color = "black";
    } // Reverts to default or whatever is set in CSS
    else {
      link.style.color = "white";
    }
  });
});

