document.addEventListener("DOMContentLoaded", function() {
    const favicon = document.getElementById("favicon");
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function updateFavicon() {
        if (darkModeMediaQuery.matches) {
            favicon.href = "images/byu-logo-dark.png";  // Dark mode favicon
        } else {
            favicon.href = "images/byu-logo-light.png"; // Light mode favicon
        }
    }

    // Run function on page load
    updateFavicon();

    // Listen for changes in the theme preference
    darkModeMediaQuery.addEventListener("change", updateFavicon);
});
