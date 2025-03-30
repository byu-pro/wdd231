// modal.js - Handles opening and closing modals

document.addEventListener("DOMContentLoaded", () => {
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const closeButtons = document.querySelectorAll(".modal .close");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault();
            const modalId = trigger.getAttribute("href").substring(1);
            document.getElementById(modalId).style.display = "block";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").style.display = "none";
        });
    });

    // Close modals if clicked outside content
    window.addEventListener("click", (event) => {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
