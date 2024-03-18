
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
      margin: 10, // Margin between items (adjust as needed)
      autoplay: true, // Autoplay enabled
      autoplayTimeout: 3000, // Autoplay interval in milliseconds
      autoplayHoverPause: true,// Pause autoplay on mouse hover
  });
});
