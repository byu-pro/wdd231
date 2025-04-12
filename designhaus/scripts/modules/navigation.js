export function setupMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        nav.setAttribute('data-visible', !isExpanded);
      });
      
      // Close mobile menu when clicking on a link
      const navLinks = document.querySelectorAll('.nav__link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (nav.getAttribute('data-visible') === 'true') {
            navToggle.setAttribute('aria-expanded', 'false');
            nav.setAttribute('data-visible', 'false');
          }
        });
      });
    }
  }