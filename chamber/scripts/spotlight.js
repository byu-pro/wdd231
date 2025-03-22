document.addEventListener("DOMContentLoaded", function () {
    const spotlightContainer = document.getElementById("spotlight-container"); // Correct container

    if (!spotlightContainer) {
        console.error("Spotlight container not found!");
        return;
    }

    // Fetch chamber members data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error("Invalid or empty members data");
            }

            // Filter only Gold & Silver members
            let spotlightMembers = data.filter(member => 
                member.membership_level === "Gold" || member.membership_level === "Silver"
            );

            if (spotlightMembers.length === 0) {
                throw new Error("No Gold or Silver members found");
            }

            // Shuffle and pick 2 or 3 random members
            spotlightMembers = shuffleArray(spotlightMembers).slice(0, Math.floor(Math.random() * 2) + 2);

            // Generate HTML for selected members
            spotlightContainer.innerHTML = "";
            spotlightMembers.forEach(member => {
                spotlightContainer.innerHTML += `
                    <div class="spotlight-card">
                        <img src="images/${member.image_file_name}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p><strong>Membership:</strong> ${member.membership_level}</p>
                        <p><strong>📍 Address:</strong> ${member.address}</p>
                        <p><strong>📞 Phone:</strong> ${member.phone}</p>
                        <p><strong>🔗 Website:</strong> <a href="${member.website_url}" target="_blank">${member.website_url}</a></p>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error("Error fetching spotlight members:", error);
            spotlightContainer.innerHTML = "<p>⚠️ Unable to load spotlight members.</p>";
        });

    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
