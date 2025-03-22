console.log("✅ Chamber scripts loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const toggleButton = document.getElementById("toggleView");
    const menuToggle = document.getElementById("menuToggle"); // Hamburger Button
    const navMenu = document.getElementById("navMenu"); // Navigation Menu
    let members = []; // Store fetched members data
    let isGridView = true;

    // Debugging Check for Menu Elements
    if (!menuToggle) {
        console.error("❌ menuToggle (hamburger button) NOT found in the DOM!");
    } else {
        console.log("✅ menuToggle found.");
    }

    if (!navMenu) {
        console.error("❌ navMenu (navigation menu) NOT found in the DOM!");
    } else {
        console.log("✅ navMenu found.");
    }

    // Mobile Menu Toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            console.log("📌 Menu Toggled:", navMenu.classList.contains("show") ? "OPEN" : "CLOSED");
        });
    }

    // Fetch Members Data
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            members = await response.json();
            displayMembers(members, "grid"); // Default to grid view
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    }

    function displayMembers(members, view) {
        if (!directory) {
            console.error("❌ Directory element not found.");
            return;
        }
        directory.innerHTML = ""; // Clear previous content
        directory.className = view;

        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member-card");

            memberElement.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            directory.appendChild(memberElement);
        });
    }

    // Toggle View
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            isGridView = !isGridView;
            displayMembers(members, isGridView ? "grid" : "list");
        });
    } else {
        console.warn("⚠️ Toggle button not found in the document.");
    }

    // Set Footer Year and Last Modified Date
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("lastModified");

    if (yearElement) yearElement.textContent = new Date().getFullYear();
    if (lastModifiedElement) lastModifiedElement.textContent = document.lastModified;

    fetchMembers();

    // Highlight Active Navigation Link
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("#navMenu a").forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
        }
    });
});
