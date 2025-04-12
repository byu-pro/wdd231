document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', function() {
      loader.style.display = 'none';
    });
  
    // Smooth scrolling to sections
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
      });
    }
  
    // Scroll to top button
    const scrollTop = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    });
  
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          menuToggle.querySelector('i').classList.remove('fa-times');
        }
      });
    });
  });