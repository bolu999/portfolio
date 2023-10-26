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



// Add a futuristic hover effect to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'transform 0.3s ease-in-out';
  });

  link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)';
  });
});

// Create a rotating animation for the header text
const headerText = document.querySelector('header h1');

headerText.addEventListener('mouseover', () => {
  headerText.style.transform = 'rotate(5deg)';
  headerText.style.transition = 'transform 0.5s ease-in-out';
});

headerText.addEventListener('mouseout', () => {
  headerText.style.transform = 'rotate(0)';
});

// Add a subtle hover effect for sections
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  section.addEventListener('mouseover', () => {
    section.style.transform = 'scale(1.02)';
    section.style.transition = 'transform 0.3s ease-in-out';
  });

  section.addEventListener('mouseout', () => {
    section.style.transform = 'scale(1)';
  });
});

// Create a futuristic background animation
const body = document.body;

function generateRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function animateBackground() {
  setInterval(() => {
    body.style.backgroundColor = generateRandomHexColor();
  }, 3000);
}

animateBackground();

// Get form and required input fields
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('button[type="submit"]');
const card = document.querySelector('.card');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function (event) {
    // Check if the name and email fields are empty
    if (nameInput.value === '' || emailInput.value === '') {
        event.preventDefault(); // Prevent form submission
        card.style.display = 'block'; // Display the card
    } else {
        card.style.display = 'none'; // Hide the card
    }
});

// Get form elements and the card
const contactForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const card = document.querySelector('.card');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the name and email fields are empty
    if (nameInput.value === '' || emailInput.value === '') {
        // Display an error message in the card
        card.style.display = 'block';
        card.textContent = 'Please fill in the required fields.';
    } else {
        // Hide the card
        card.style.display = 'none';

        // You can add code here to send the form data to your server or perform other actions
        // For example, you can use the fetch API to send a POST request to a server.

        // Reset the form
        contactForm.reset();

        // Display a confirmation message
        alert('Form submitted successfully!');
    }

    // JavaScript to hide the menu when the mouse leaves the logo and menu
const logoContainer = document.querySelector('.logo-container');
const navMenu = document.querySelector('.nav-menu');

logoContainer.addEventListener('mouseenter', function () {
    navMenu.style.display = 'block';
});

logoContainer.addEventListener('mouseleave', function () {
    navMenu.style.display = 'none';
});

});
