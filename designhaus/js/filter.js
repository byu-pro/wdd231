document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('#portfolio-filter li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
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

  // Modal functionality
  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.querySelector('.modal-category');
  const modalDescription = document.getElementById('modal-description');
  const modalLink = document.getElementById('modal-link');
  const closeModal = document.querySelector('.close-modal');
  
  // Project data - replace with your actual project details
  const projects = {
      'project-1': {
          title: 'E-Commerce Website',
          category: 'Web Design',
          description: 'A fully responsive e-commerce platform built with modern web technologies. Features include product filtering, cart functionality, and secure checkout process.',
          image: 'images/project-1-full.webp',
          link: 'project-1.html'
      },
      'project-2': {
          title: 'Corporate Branding',
          category: 'Branding',
          description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines for a corporate client.',
          image: 'images/project-2-full.webp',
          link: 'project-2.html'
      },
      'project-3': {
          title: 'Digital Illustrations',
          category: 'Illustration',
          description: 'Series of digital illustrations created for various clients, showcasing different styles and techniques in digital art.',
          image: 'images/project-3-full.webp',
          link: 'project-3.html'
      },
      'project-4': {
          title: 'Digital Illustrations Vol.2',
          category: 'Illustration',
          description: 'Second collection of digital illustrations featuring more advanced techniques and experimental styles.',
          image: 'images/project-4-full.webp',
          link: 'project-4.html'
      },
      'project-5': {
          title: 'Digital Illustrations Vol.3',
          category: 'Illustration',
          description: 'Third installment of digital illustrations with focus on character design and storytelling.',
          image: 'images/project-5-full.webp',
          link: 'project-5.html'
      },
      'project-6': {
          title: 'Digital Illustrations Vol.4',
          category: 'Illustration',
          description: 'Latest collection of digital illustrations showcasing refined techniques and personal style.',
          image: 'images/project-6-full.webp',
          link: 'project-6.html'
      }
  };
  
  // Add click event to all portfolio links
  document.querySelectorAll('.portfolio-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const projectId = this.getAttribute('href');
          const project = projects[projectId];
          
          if (project) {
              modalImage.src = project.image;
              modalImage.alt = project.title;
              modalTitle.textContent = project.title;
              modalCategory.textContent = project.category;
              modalDescription.textContent = project.description;
              modalLink.href = project.link;
              
              // Show modal
              modal.classList.add('show');
              document.body.style.overflow = 'hidden';
          }
      });
  });
  
  // Close modal
  closeModal.addEventListener('click', function() {
      modal.classList.remove('show');
      document.body.style.overflow = '';
  });
  
  // Close when clicking outside modal content
  modal.addEventListener('click', function(e) {
      if (e.target === modal) {
          modal.classList.remove('show');
          document.body.style.overflow = '';
      }
  });
  
  // Close with ESC key
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
          modal.classList.remove('show');
          document.body.style.overflow = '';
      }
  });
  
  // Force show all items on window resize to prevent layout issues
  window.addEventListener('resize', function() {
      portfolioItems.forEach(item => {
          item.style.display = 'block';
          item.style.opacity = '1';
      });
  });
});