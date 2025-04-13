document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', function() {
      setTimeout(function() {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
      }, 500);
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
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
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
      });
    }
  
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(item => {
      item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          menuToggle.querySelector('i').classList.remove('fa-times');
          document.body.style.overflow = '';
        }
      });
    });
  
    // Scroll to top button
    const scrollTop = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    });
  
    // Form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(function() {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
          
          setTimeout(function() {
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 2000);
        }, 1500);
      });
    }
  
    // Keyboard navigation focus styles
    document.addEventListener('keyup', function(e) {
      if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList) {
          focusedElement.classList.add('keyboard-focus');
          
          focusedElement.addEventListener('blur', function() {
            this.classList.remove('keyboard-focus');
          }, { once: true });
        }
      }
    });
  });
  