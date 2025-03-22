document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const toggleButton = document.getElementById("toggleView");
    let members = []; // Store fetched members data
    let isGridView = true;

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
    toggleButton.addEventListener("click", () => {
        isGridView = !isGridView;
        displayMembers(members, isGridView ? "grid" : "list");
    });

    // Set footer year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    fetchMembers();

    // Highlight active navigation link
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("#navMenu a").forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
