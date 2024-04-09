
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, // 5 seconds
    autoplayHoverPause: true,
    nav: true,
    dots: true,
   
  });
});


$(document).ready(function(){
  $('.custom-carousel').owlCarousel({
      items: 1, // Display only one item at a time
      loop: true, // Infinite loop
      margin: 15, // Margin between items (adjust as needed)
      autoplay: true, // Autoplay enabled
      autoplayTimeout: 3000, // Autoplay interval in milliseconds
      autoplayHoverPause: true,// Pause autoplay on mouse hover
  });
});

var navbar = document.getElementById("navbar");

// Listen for the scroll event on the window
window.addEventListener("scroll", function() {
  // Check if the scroll position is greater than 180px
  if (window.scrollY > 180) {
  
    navbar.style.setProperty("background-color", "#000" , "important");
    navbar.style.setProperty("transition", "all 2s ease " , "important");
    navbar.style.setProperty("position" , "fixed " ,  "important");
    navbar.classList.add("fadeInDown");
   
  } else {
    navbar.style.position = "relative";
    navbar.style.background = "#000"
    navbar.classList.remove("fadeInDown");
  }
});

$(document).ready(function(){
  // Close navbar collapse on click outside
  $(document).click(function(event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {      
      $navbar.collapse('hide');
      // Remove rotate class on navbar toggler spans
      $(".navbar-toggler .icon-container span").removeClass("rotate");
    }
  });

  // Close navbar collapse on scroll
  $(window).scroll(function() {
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("show");
    if (_opened === true) {      
      $navbar.collapse('hide');
      // Remove rotate class on navbar toggler spans
      $(".navbar-toggler .icon-container span").removeClass("rotate");
    }
  });

  // Close navbar collapse on navbar toggler click
  $(".navbar-toggler").click(function(event) {
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("show");
    if (_opened === true) {      
      $navbar.collapse('hide');
    }
    // Toggle rotate class on navbar toggler spans
    $(".navbar-toggler .icon-container span").toggleClass("rotate");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Hide the navbar-collapse initially
  var navbarCollapse = document.getElementById('navbarSupportedContent');
  navbarCollapse.classList.remove('open');

  // Get the navbar toggler button and the spans inside it
  var navbarToggler = document.querySelector(".navbar-toggler");
  var iconSpans = navbarToggler.querySelectorAll(".icon-container span");

  // Function to toggle the rotate class on spans
  function toggleRotate() {
    iconSpans.forEach(function(span) {
      span.classList.toggle("rotate");
    });
  }

  // Function to toggle navbar-collapse
  function toggleNavbar() {
    navbarCollapse.classList.toggle('open');
    
    toggleRotate(); // Call toggleRotate() here
  }

  // Event listener for clicks on navbar toggler
  navbarToggler.addEventListener('click', function() {
    toggleNavbar();
    // Call toggleRotate() here to add/remove rotate class
    toggleRotate();
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Add a delay of 3 seconds before hiding the overlay
  setTimeout(function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    document.body.classList.add("spinner-shown");
  }, 1500); // Change the delay to 3000 milliseconds (3 seconds)
});


window.addEventListener("scroll", function() {
  var containers = document.querySelectorAll(".my-container");
  var navLinks = document.querySelectorAll(".nav-link");
  var scrollPosition = window.scrollY;

  // Iterate over each container
  containers.forEach(function(container, index) {
    // Check if the scroll position is above the current container
    if (scrollPosition - 500 >= container.offsetTop) {
      // Remove 'active' class from all nav links
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      // Add 'active' class to the corresponding nav link
      navLinks[index].classList.add("active");
    }
  });

  // If the scroll position is at the top of the page, make the first nav link active
  if (scrollPosition === 0) {
    // Remove 'active' class from all nav links
    navLinks.forEach(function(link) {
      link.classList.remove("active");
    });
    // Add 'active' class to the first nav link
    navLinks[0].classList.add("active");
  }
});



// // Function to handle scroll event and move elements
// function moveElementsOnScroll() {
//   // Select all elements with the class "moving-element"
//   var movingElements = document.querySelectorAll(".moving-element");

//   // Function to handle scroll event
//   function handleScroll() {
//     // Loop through each moving element
//     movingElements.forEach(function(movingElement) {
//       // Get the current scroll position
//       var scrollPosition = window.scrollY;
//       // Get the distance of the element from the top of the viewport
//       var elementTop = movingElement.getBoundingClientRect().top;
//       // Calculate the new top position based on the scroll direction and the position of the element
//       var newTop = scrollPosition * 0.02 - elementTop * 0.02; // Adjust the multiplier to control speed
//       // Set the new top position for the moving element
//       movingElement.style.top = newTop + "px";
//     });
//   }

//   // Add scroll event listener
//   window.addEventListener("scroll", handleScroll);
// }

// // Call the function to start moving elements on scroll
// moveElementsOnScroll();
// Function to handle scroll event and move elements
function moveElementsOnScroll() {
  // Select all elements with the class "moving-element"
  var movingElements = document.querySelectorAll(".moving-element");

  // Function to handle scroll event
  function handleScroll() {
    // Loop through each moving element
    movingElements.forEach(function(movingElement) {
      // Get the current scroll position
      var scrollPosition = window.scrollY;
      // Get the distance of the element from the top of the viewport
      var elementTop = movingElement.getBoundingClientRect().top;
      // Calculate the new top position based on the scroll direction and the position of the element
      var newTop = scrollPosition * 0.02 - elementTop * 0.02; // Adjust the multiplier to control speed
      // Set the new top position for the moving element
      movingElement.style.top = newTop + "px";
    });
  }

  // Function to handle resize event
  function handleResize() {
    // Check if window width is at or below 992 pixels
    if (window.innerWidth <= 1031) {
      // Loop through each moving element and remove the class
      movingElements.forEach(function(movingElement) {
        movingElement.classList.remove("moving-element");
      });
      // Remove the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Add resize event listener
  window.addEventListener("resize", handleResize);

  // Call handleResize initially to handle the initial window width
  handleResize();
}

// Call the function to start moving elements on scroll
moveElementsOnScroll();



