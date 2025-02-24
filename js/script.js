document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");

    menuButton.addEventListener("click", function (event) {
        if (event.detail === 1) {
            window.location.href = "index.html";
        }
    });
});