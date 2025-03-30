document.addEventListener("DOMContentLoaded", function () {
    // Set timestamp field value to the current date and time
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Optional: Add real-time validation (if needed)
});
