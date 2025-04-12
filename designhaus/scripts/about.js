import { initLoader } from './modules/loader.js';
import { initCursor } from './modules/cursor.js';
import { setupMobileNav } from './modules/navigation.js';
import { fetchTeamMembers } from './modules/team.js';
import { fetchTestimonials } from './modules/testimonials.js';
import { setupContactForm } from './modules/form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize loader
  initLoader();
  
  // Initialize custom cursor
  initCursor();
  
  // Setup mobile navigation
  setupMobileNav();
  
  // Load team members
  fetchTeamMembers('#teamMembers');
  
  // Load testimonials
  fetchTestimonials('#testimonialsSlider');
  
  // Setup contact form validation
  setupContactForm();
  
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});