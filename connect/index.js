document.addEventListener("DOMContentLoaded", function() {
    const slideButton = document.getElementById("slideButton");
    const meDiv = document.getElementById("me");
    const talkBox = document.getElementById("ntme");
    const cntBox = document.getElementById('cnnct')

    slideButton.addEventListener("click", function() {
        meDiv.classList.toggle("slide-up");
        talkBox.classList.toggle("slide-up");

        if (meDiv.classList.contains("slide-up")) {
            slideButton.textContent = "Put Him Away";
            cntBox.style.opacity = "0";
        } else {
            slideButton.textContent = "Meet the Creator";
            cntBox.style.opacity = "1";
        }
    });
});