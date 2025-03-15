// Fetch member data and display it
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const container = document.getElementById('memberContainer');
  
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      container.appendChild(card);
    });
  }
  
  // Toggle between grid and list view
  document.getElementById('toggleView').addEventListener('click', () => {
    const container = document.getElementById('memberContainer');
    container.classList.toggle('list-view');
  });
  
  // Update copyright year and last modified date
  document.getElementById('copyrightYear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
  
  // Load members on page load
  fetchMembers();
  