console.log("Hi")

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

// Function to increase font size for text elements
function increaseFontSize() {
    let textElements = document.querySelectorAll(' h3, p'); // Target specific text elements
    textElements.forEach(el => {
        let currentSize = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (currentSize + 1) + "px"; // Increase font size by 1px
        localStorage.setItem(el.tagName + '-fontSize', (currentSize + 1) + "px"); // Store size in localStorage
    });
}

// Function to decrease font size for text elements
function decreaseFontSize() {
    let textElements = document.querySelectorAll(' h3, p'); // Target specific text elements
    textElements.forEach(el => {
        let currentSize = parseFloat(getComputedStyle(el).fontSize);
        if (currentSize > 10) { // Set a minimum font size limit
            el.style.fontSize = (currentSize - 1) + "px";
            localStorage.setItem(el.tagName + '-fontSize', (currentSize - 1) + "px"); // Store size in localStorage
        }
    });
}

// Load user's preferred font size on page load for specific text elements
window.onload = function() {
    let textElements = document.querySelectorAll('h3, p'); // Target text elements
    textElements.forEach(el => {
        let savedFontSize = localStorage.getItem(el.tagName + '-fontSize');
        if (savedFontSize) {
            el.style.fontSize = savedFontSize;
        }
    });
};

// Selecting the hamburger button, sidebar, and close button 
var hamburgerButton = document.getElementById("hamburger");
var sidebar = document.getElementById("sidebar");
var closeBtn = document.getElementById("close-btn");  // Corrected with quotes

// Event listener for opening the sidebar when clicking the hamburger menu
hamburgerButton.onclick = function () {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");  // Close the sidebar
        hamburgerButton.setAttribute('aria-expanded', "false");
    } else {
        sidebar.classList.add("active");  // Open the sidebar
        hamburgerButton.setAttribute('aria-expanded', "true");
    }
};

// Event listener for the close button (x) in the sidebar 
closeBtn.onclick = function () {
    sidebar.classList.remove("active");  // Close the sidebar
    hamburgerButton.setAttribute('aria-expanded', "false");
};


// with help from chat gpt. Prompt: how to make a carrousel that at the end in jumps back to the beginning//
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Get all the carousel items
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Loop to the last item if at the beginning
    }
    updateCarousel();
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first item if at the end
    }
    updateCarousel();
});

// Function to update the position of the carousel
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset to move the carousel
    carousel.style.transform = `translateX(${offset}%)`;
}





// shop page //

// Function to update the name in the personalized section // //gevraagd aan chat GPT. Prompt: //
function updateName() {
    const nameInput = document.getElementById('name-input').value.trim().toUpperCase();
    const namePlaceholder = document.getElementById('name-placeholder');

    // Update the placeholder with the user's input or default to 'YOUR NAME' if empty
    if (nameInput === '') {
        namePlaceholder.textContent = 'YOUR NAME';
    } else {
        namePlaceholder.textContent = nameInput;
    }
}






