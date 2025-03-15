function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("last-update").textContent = "Last Update: " + document.lastModified;
});
// Get the current page filename
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll("#nav-menu a");

// Loop through links and add 'active' class to the matching one
navLinks.forEach(link => {
    if (link.getAttribute("href").includes(currentPage)) {
        link.classList.add("active");
    }
});
