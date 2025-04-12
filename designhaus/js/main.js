document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling to sections
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Mobile menu toggle (Optional if you need it)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
  });
  