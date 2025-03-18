document.addEventListener("DOMContentLoaded", function () {
    console.log("LearnTube Clone Loaded");

    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            alert("Button clicked! Implement functionality here.");
        });
    });
});
function goToCoursePage() {
    window.location.href = "course-page.html"; // Navigates to the next page
}

