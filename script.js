var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menuClose');

    menuIcon.addEventListener('click', function () {
        menu.style.display = 'flex';
        menuIcon.classList.add('open');
    });

    menuClose.addEventListener('click', function () {
        menu.style.display = 'none';
        menuIcon.classList.remove('open');
    });
});
