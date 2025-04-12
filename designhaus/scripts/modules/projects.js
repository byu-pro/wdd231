export async function fetchProjects(type = 'all', containerSelector) {
    try {
      const response = await fetch('data/projects.json');
      const projects = await response.json();
      
      const filteredProjects = type === 'featured' 
        ? projects.filter(project => project.featured)
        : projects;
      
      renderProjects(filteredProjects, containerSelector);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }
  
  function renderProjects(projects, containerSelector) {
    const container = document.querySelector(containerSelector);
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