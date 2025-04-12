export async function fetchFeaturedProjects(containerSelector) {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();
    const featuredProjects = projects.filter(project => project.featured);
    
    renderProjects(featuredProjects, containerSelector);
  } catch (error) {
    console.error('Error loading featured projects:', error);
  }
}

export async function fetchAllProjects(containerSelector) {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();
    
    renderProjects(projects, containerSelector);
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

function renderProjects(projects, containerSelector) {
  const container = document.querySelector(containerSelector);
  
  if (container) {
    container.innerHTML = projects.map(project => `
      <div class="project-card" data-category="${project.category}" data-id="${project.id}">
        <img src="${project.image}" alt="${project.title}" class="project-card__image" loading="lazy">
        <div class="project-card__content">
          <h3 class="project-card__title">${project.title}</h3>
          <div class="project-card__tags">
            ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
          </div>
          <p class="project-card__description">${project.description}</p>
          <button class="btn btn--primary view-project">View Project</button>
        </div>
      </div>
    `).join('');
  }
}

export function setupProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectSearch = document.getElementById('projectSearch');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        filterProjects(filterValue);
      });
    });
  }
  
  if (projectSearch) {
    projectSearch.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      searchProjects(searchTerm);
    });
  }
}

function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    if (category === 'all' || project.getAttribute('data-category') === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

function searchProjects(term) {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    const title = project.querySelector('.project-card__title').textContent.toLowerCase();
    const description = project.querySelector('.project-card__description').textContent.toLowerCase();
    const tags = Array.from(project.querySelectorAll('.project-card__tag')).map(tag => tag.textContent.toLowerCase());
    
    if (title.includes(term) || description.includes(term) || tags.some(tag => tag.includes(term))) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

export function setupProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalBody');
  const closeModal = document.querySelector('.close-modal');
  
  if (modal) {
    // Open modal when clicking on project cards
    document.addEventListener('click', (e) => {
      const viewProjectBtn = e.target.closest('.view-project');
      if (viewProjectBtn) {
        const projectCard = viewProjectBtn.closest('.project-card');
        const projectId = projectCard.getAttribute('data-id');
        
        // Fetch project details and populate modal
        fetchProjectDetails(projectId).then(project => {
          if (project) {
            modalContent.innerHTML = `
              <img src="${project.image}" alt="${project.title}" class="modal-project__image">
              <h2 class="modal-project__title">${project.title}</h2>
              <div class="modal-project__details">
                <div class="detail-group">
                  <h4>Client</h4>
                  <p>${project.details.client}</p>
                </div>
                <div class="detail-group">
                  <h4>Year</h4>
                  <p>${project.details.year}</p>
                </div>
                <div class="detail-group">
                  <h4>Services</h4>
                  <ul>
                    ${project.details.services.map(service => `<li>${service}</li>`).join('')}
                  </ul>
                </div>
                <div class="detail-group">
                  <h4>Challenge</h4>
                  <p>${project.details.challenge}</p>
                </div>
                <div class="detail-group">
                  <h4>Solution</h4>
                  <p>${project.details.solution}</p>
                </div>
              </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
          }
        });
      }
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
}

async function fetchProjectDetails(projectId) {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();
    return projects.find(project => project.id == projectId);
  } catch (error) {
    console.error('Error loading project details:', error);
    return null;
  }
}