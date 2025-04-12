import { fetchTeam } from './modules/team.js';
import { setupContactForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Load team members
  fetchTeam('#teamMembers');
  
  // Set up contact form
  setupContactForm();
});