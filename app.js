// Get references to various elements on the page.

const toggleHamburgerMenu = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".hamburgerMenu");
const textOutput = document.querySelector(".textOutput");
const form = document.querySelector(".form");
const input = document.querySelector(".textInput");
const copyrightDiv = document.querySelector(".copyright");
const darkModeBtn = document.querySelector(".toggleBgColorBtn");
const formSubmitBtn = document.querySelector(".formSubmitBtn");

// Getting the current year and displaying it in the footer.

const currentYear = new Date().getFullYear();
copyrightDiv.innerHTML = `&copy; Oliver Cvetkoski  ${currentYear}`;

// This function handles the form submission and displays the input value in a paragraph.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  textOutput.innerHTML += `<p>${input.value}</p>`;
  input.value = "";
});

// Function for toggling the hamburger menu on smaller than 768px.

const hamburgerDiv = document.createElement("div");
hamburgerDiv.classList.add("hamburgerContainer");

let isMenuOpen = false;

toggleHamburgerMenu.addEventListener("click", function () {
  if (isMenuOpen) {
    // If the menu is open, close it.
    hamburgerDiv.classList.remove("showHamburgerMenu");
    document.body.removeChild(hamburgerDiv);
  } else {
    // If the menu is closed, open it.
    hamburgerDiv.classList.add("showHamburgerMenu");
    hamburgerDiv.appendChild(menuItems);
    document.body.appendChild(hamburgerDiv);
  }

  // Toggle the menu state.
  isMenuOpen = !isMenuOpen;
});

isDarkMode = false;

function toggleDarkMode() {
  formSubmitBtn.classList.toggle("formSubmitBtnLight", !isDarkMode);
  textOutput.style.color = isDarkMode ? "black" : "white";
  darkModeBtn.classList.toggle("lightModeBtn", !isDarkMode);
  darkModeBtn.innerHTML = isDarkMode ? "Dark Mode" : "Light Mode";
  document.body.style.backgroundColor = isDarkMode ? "white" : "black";
  isDarkMode = !isDarkMode;
}

darkModeBtn.addEventListener("click", toggleDarkMode);
