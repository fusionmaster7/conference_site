console.log("Working");
$(document).ready(function () {
  $(".single-item").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
});

//SCROLL REVEAL
const invitees = document.querySelectorAll(".invitee");
const sponsors = document.querySelectorAll(".sponsor");
const config = {
  reset: true,
  duration: 2000,
};
ScrollReveal().reveal(invitees, config);
ScrollReveal().reveal(sponsors, config);
