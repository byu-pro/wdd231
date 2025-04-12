document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', function() {
      setTimeout(function() {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
      }, 500);
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
          
          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, this.getAttribute('href'));
          } else {
            location.hash = this.getAttribute('href');
          }
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
          document.body.style.overflow = '';
        }
      });
    });
  
    // Form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(function() {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
          
          // Reset form after 2 seconds
          setTimeout(function() {
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 2000);
        }, 1500);
      });
    }
  
    // Add focus styles for keyboard navigation
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