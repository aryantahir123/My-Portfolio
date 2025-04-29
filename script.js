// Menu toggle functionality
const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.Menu');

menuIcon.onclick = () => {
  menu.classList.toggle('active');
  menuIcon.classList.toggle('fa-xmark');
};

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.Menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.text-center');
  preloader.style.opacity = '0';
  preloader.style.visibility = 'hidden';
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.percentage li p span');
const skillsSection = document.querySelector('.container2');

function animateSkills() {
  if (window.scrollY + window.innerHeight > skillsSection.offsetTop) {
    skillBars.forEach(bar => {
      const width = bar.parentElement.previousElementSibling.querySelector('span').textContent;
      bar.style.width = width;
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);