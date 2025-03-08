function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("last-update").textContent = "Last Update: " + document.lastModified;
});