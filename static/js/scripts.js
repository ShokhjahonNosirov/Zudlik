// Optional JavaScript if needed for form handling, e.g., form validation or submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add custom validation or form submission code here
    alert('Taksi qidiruvni boshlaymiz!');
});

// function updatePlaceholder(value) {
//     document.getElementById('dropdownMenuInputFrom').placeholder = value;
// }


function updatePlaceholder(inputId, value) {
    document.getElementById(inputId).value = value;
}


// Get the toggle button and nav menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

// Toggle the menu visibility
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
