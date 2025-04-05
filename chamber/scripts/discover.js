document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".discover-grid");
    const visitMsg = document.querySelector(".visit-message");
  
    // Load and display JSON data
    fetch("data/discover.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          const card = document.createElement("section");
          card.classList.add("card");
  
          card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
              <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
              <figcaption>${item.name}</figcaption>
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button class="learn-more">Learn More</button>
          `;
  
          container.appendChild(card);
        });
      })
      .catch((err) => console.error("Error loading discover data:", err));
  
    // Visit message using localStorage
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
  
    if (!lastVisit) {
      visitMsg.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
      if (daysDiff < 1) {
        visitMsg.textContent = "Back so soon! Awesome!";
      } else {
        visitMsg.textContent = `You last visited ${daysDiff} day${daysDiff === 1 ? "" : "s"} ago.`;
      }
    }
  
    localStorage.setItem("lastVisit", now);
  });
  