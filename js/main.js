document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensaje enviado. Nos pondremos en contacto pronto.");
    form.reset();
  });

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');  // Cambié 'active' por 'open'
  });
});
 
 document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');

    track.addEventListener('mouseenter', () => {
      track.classList.add('paused');
    });

    track.addEventListener('mouseleave', () => {
      track.classList.remove('paused');
    });
  });