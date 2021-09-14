document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollpos && prevScrollpos > 80) {
    document.getElementById("navbar").style.top = "-5rem";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

// bulmaCarousel.attach('#home-slider-1', {
//   slidesToScroll: 1,
//   slidesToShow: 3,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   navigation: true,
//   navigationKeys: false,
//   navigationSwipe: true,
//   pagination: false,
//   pauseOnHover: true,
//   breakpoints: [{ changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }, { changePoint: 1023, slidesToShow: 2, slidesToScroll: 1 } ]
// });

if('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register('/serviceworker.js', { scope: '/' })
      .then(function(registration) {
          console.log('Service Worker Registered');
      });

  navigator.serviceWorker
      .ready
      .then(function(registration) {
          console.log('Service Worker Ready');
      });
}