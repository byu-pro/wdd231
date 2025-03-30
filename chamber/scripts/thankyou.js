document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    
    document.getElementById("firstName").textContent = params.get("firstName") || "N/A";
    document.getElementById("lastName").textContent = params.get("lastName") || "N/A";
    document.getElementById("email").textContent = params.get("email") || "N/A";
    document.getElementById("phone").textContent = params.get("phone") || "N/A";
    document.getElementById("businessName").textContent = params.get("organization") || "N/A";
    document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";

    // Update the footer year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();
});
