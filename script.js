// Wait until the page is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // 1️⃣ Handle Button Click for Math Section (Redirect to Desmos)
    const heartGraphBtn = document.getElementById("heart-graph-btn");
    if (heartGraphBtn) {
        heartGraphBtn.addEventListener("click", function () {
            window.location.href = "https://www.desmos.com/calculator/mhnm66dl2o"; // Replace with actual heart graph link
        });
    }

    // 2️⃣ Scroll Animation for Sections
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", revealSections);
    // Run once when the page loads
    revealSections();
});