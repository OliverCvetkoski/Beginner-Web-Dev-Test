// Get references to various elements on the page.

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const menuItems = document.querySelector(".menuItems");
const textOutput = document.querySelector(".textOutput");
const form = document.querySelector(".form");
const input = document.querySelector(".textInput");
const copyrightDiv = document.querySelector(".copyright");
const darkModeBtn = document.querySelector(".toggleBgColorBtn");
const formSubmitBtn = document.querySelector(".formSubmitBtn");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

// Getting the current year and displaying it in the footer.

const currentYear = new Date().getFullYear();
copyrightDiv.innerHTML = `&copy; Oliver Cvetkoski  ${currentYear}`;

// Function for handling the form submission and displaying the input value in a paragraph.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  textOutput.innerHTML += `<p>${input.value}</p>`;
  input.value = "";
});

// Function for toggling the hamburger menu on screens smaller than 768px.

const hamburgerDiv = document.createElement("div");
hamburgerDiv.classList.add("hamburgerContainer");

let isMenuOpen = false;
let originalParent;

function toggleHamburgerMenu() {
  if (isMenuOpen) {
    bar1.style.transform = "rotate(0deg)";
    bar1.style.position = "static";
    bar2.style.transform = "rotate(0deg)";
    bar3.style.opacity = 1;

    hamburgerDiv.classList.remove("showHamburgerMenu");
    if (originalParent) {
      originalParent.appendChild(menuItems);
    }
    document.body.removeChild(hamburgerDiv);
  } else {
    bar1.style.transform = "rotate(45deg)";
    bar1.style.position = "absolute";
    bar1.style.top = "1.9em";
    bar2.style.transform = "rotate(-45deg)";
    bar3.style.opacity = 0;

    originalParent = menuItems.parentElement;
    hamburgerDiv.classList.add("showHamburgerMenu");
    hamburgerDiv.appendChild(menuItems);
    document.body.appendChild(hamburgerDiv);
  }
  isMenuOpen = !isMenuOpen;
}

hamburgerMenu.addEventListener("click", toggleHamburgerMenu);

// Function for toggling between dark mode and light mode.

isDarkMode = false;

function toggleDarkMode() {
  input.classList.toggle("textInputDark", !isDarkMode);
  formSubmitBtn.classList.toggle("formSubmitBtnLight", !isDarkMode);
  textOutput.style.color = isDarkMode ? "black" : "white";
  darkModeBtn.classList.toggle("lightModeBtn", !isDarkMode);
  darkModeBtn.innerHTML = isDarkMode ? "Dark Mode" : "Light Mode";
  document.body.style.backgroundColor = isDarkMode ? "white" : "black";
  isDarkMode = !isDarkMode;
}

darkModeBtn.addEventListener("click", toggleDarkMode);
