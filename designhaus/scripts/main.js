import { initLoader } from './modules/loader.js';
import { initCursor } from './modules/cursor.js';
import { setupMobileNav } from './modules/navigation.js';
import { fetchFeaturedProjects } from './modules/projects.js';
import { fetchTestimonials } from './modules/testimonials.js';
import { setupBackToTop } from './modules/back-to-top.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize loader
  initLoader();
  
  // Initialize custom cursor
  initCursor();
  
  // Setup mobile navigation
  setupMobileNav();
  
  // Load featured projects
  fetchFeaturedProjects('#featuredProjects');
  
  // Load testimonials
  fetchTestimonials('#testimonialsSlider');
  
  // Setup back to top button
  setupBackToTop();
  
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Add scroll effect to header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
});