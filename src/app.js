
/* toggle active navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/* scroll sections active links */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; /*  */
    let height  = sec.offsetHeight; /* giá trị chiều cao của phần tử offset đang xét hiện tại */
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
  /* sticky navbar */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* remove toggle icon and navbar when click navbar links (scroll) */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

/* scroll reveal */
/* https://scrollrevealjs.org/guide/customization.html */
ScrollReveal({ 
  // reset: true, ko cần rs lại
  distance: '80px',
  duration: 2000,
  delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-container h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-container p, .about-content', { origin: 'right' });

 /* typed js, https://github.com/mattboldt/typed.js */
 const typed = new Typed ('.multiple-text', {
  strings: ['Fullstack Developer', 'Gamer', 'Blogger'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true
 })


