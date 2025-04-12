import { fetchProjects } from "./modules/projects.js";
import { setupFilterButtons } from "./modules/filters.js";
import { initModal } from "./modules/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  // Load all projects
  fetchProjects("all", "#projectsContainer");

  // Set up filtering functionality
  setupFilterButtons();

  // Initialize project modal
  initModal();
});
