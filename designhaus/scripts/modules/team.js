export async function fetchTeamMembers(containerSelector) {
    try {
      const response = await fetch('data/team.json');
      const team = await response.json();
      
      renderTeamMembers(team, containerSelector);
    } catch (error) {
      console.error('Error loading team members:', error);
    }
  }
  
  function renderTeamMembers(team, containerSelector) {
    const container = document.querySelector(containerSelector);
    
    if (container) {
      container.innerHTML = team.map(member => `
        <div class="team-member" data-aos="fade-up">
          <img src="${member.image}" alt="${member.name}" class="team-member__image" loading="lazy">
          <div class="team-member__content">
            <h3 class="team-member__name">${member.name}</h3>
            <p class="team-member__role">${member.role}</p>
            <p class="team-member__bio">${member.bio}</p>
            <div class="team-member__social">
              ${member.social.map(social => `
                <a href="${social.url}" aria-label="${social.name}">
                  <i class="fab fa-${social.icon}"></i>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }
  }