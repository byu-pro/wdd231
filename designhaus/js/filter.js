document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('#portfolio-filter li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const gridContainer = document.querySelector('.grid');
  
  // Initialize Isotope if available
  if (typeof Isotope !== 'undefined') {
      const iso = new Isotope(gridContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows',
          transitionDuration: '0.7s'
      });
      
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              // Remove active class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active'));
              
              // Add active class to clicked button
              this.classList.add('active');
              
              const filterValue = this.getAttribute('data-filter');
              iso.arrange({ 
                  filter: filterValue === 'all' ? '*' : `[data-category="${filterValue}"]`
              });
          });
      });
  } else {
      // Fallback filter functionality
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              // Remove active class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active'));
              
              // Add active class to clicked button
              this.classList.add('active');
              
              const filterValue = this.getAttribute('data-filter');
              
              portfolioItems.forEach(item => {
                  item.style.opacity = '0';
                  item.style.transform = 'scale(0.95)';
                  item.style.transition = 'all 0.3s ease';
                  
                  setTimeout(() => {
                      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                          item.style.display = 'block';
                          setTimeout(() => {
                              item.style.opacity = '1';
                              item.style.transform = 'scale(1)';
                          }, 50);
                      } else {
                          item.style.display = 'none';
                      }
                  }, 100);
              });
          });
      });
  }
  
  // Force show all items on window resize to prevent layout issues
  window.addEventListener('resize', function() {
      portfolioItems.forEach(item => {
          item.style.display = 'block';
          item.style.opacity = '1';
      });
  });
});