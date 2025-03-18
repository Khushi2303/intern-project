document.addEventListener("DOMContentLoaded", function () {
    console.log("LearnTube Clone Loaded");

    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            alert("Button clicked! Implement functionality here.");
        });
    });
});
