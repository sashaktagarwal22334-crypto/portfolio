
function toggleMenu() {
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("navbar")
            .classList.remove("active");
    });
});

// Welcome message
console.log("Welcome to Sashakt Agarwal's Portfolio!");
