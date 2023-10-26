// Define a function to change the background to an interstellar scene
function setInterstellarBackground() {
    document.body.style.backgroundImage = "url('interstellar.jpg')";
    document.body.style.backgroundSize = "cover";
}

// Define a function to change the background back to the default
function setDefaultBackground() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#f2f2f2";
}



// Function to toggle the interstellar background on button click
function toggleInterstellarBackground() {
    const bodyStyle = getComputedStyle(document.body);
    const backgroundImage = bodyStyle.getPropertyValue("background-image");
    if (backgroundImage.includes("interstellar.jpg")) {
        setDefaultBackground();
    } else {
        setInterstellarBackground();
    }
}

// Add interactivity to the header
const header = document.querySelector("header");
header.addEventListener("mouseenter", setInterstellarBackground);
header.addEventListener("mouseleave", setDefaultBackground);

// Add interactivity to the navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("mouseenter", setInterstellarBackground);
    link.addEventListener("mouseleave", setDefaultBackground);
});

// Add interactivity to the button
const interstellarButton = document.getElementById("interstellar-button");
interstellarButton.addEventListener("click", toggleInterstellarBackground);
