import { fetchProjects } from './modules/projects.js';
import { initTestimonials } from './modules/testimonials.js';
import { setupMobileNav } from './modules/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize mobile navigation
  setupMobileNav();
  
  // Load featured projects
  fetchProjects('featured', '#featuredProjects');
  
  // Initialize testimonial slider
  initTestimonials();
  
  // Add scroll effect to header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
});