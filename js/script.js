// Automatic show popup after 2 seconds of page load
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
 window.onload = function(){
  setTimeout(function(){
    popup.style.display = "block"

  }, 1000)
 }
 close.addEventListener('click',() => {
  popup.style.display = "none";
 })


window.addEventListener("DOMContentLoaded", () => {
  // set countDownDate
  let countDownDate = new Date(`March 26,2022 23:59:59`).getTime();
  let countDown = setInterval(() => {
    // get current date
    let today = new Date().getTime();
    // find the diffrent between current date and countDownDate
    let dayDiff = countDownDate - today;
    // get time units
    let day = Math.floor(dayDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dayDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((dayDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dayDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent = day < 10 ? `0${day}` : day;
    document.querySelector(".hours").textContent =
      hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minuts").textContent =
      minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".seconds").textContent =
      seconds < 10 ? `0${seconds}` : seconds;
    if (countDownDate < 0) {
      clearInterval(countDown);
    }
  }, 1000);
});

$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    infinite:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
infinite:true,
            items:3
        },
        600:{
	infinite:true,
            items:3
        },
        1000:{
            items:6
        }
    }
});

 // For Slick SLider------------------------------
$(document).ready(function(){
    $('.responsive').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        pauseOnHover: false,
         autoplay: true,
         
    autoplayTimeout:1000,
  autoplayHoverPause: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

// For FAQ----------------------
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));


