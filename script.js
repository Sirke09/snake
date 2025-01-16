document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "https://www.ejemplo.com/"; // Cambia esto por la URL a la que quieres redirigir
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    var button = document.getElementById("noButton");
    var container = document.querySelector(".container");

    var containerRect = container.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();

    var newX = Math.random() * (containerRect.width - buttonRect.width);
    var newY = Math.random() * (containerRect.height - buttonRect.height);

    button.style.left = newX + "px";
    button.style.top = newY + "px";
});

