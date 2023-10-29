// Get references to various elements on the page.

const textOutput = document.querySelector(".textOutput");
const form = document.querySelector(".form");
const input = document.querySelector(".textInput");
const copyrightDiv = document.querySelector(".copyright");
const darkModeBtn = document.querySelector(".toggleBgColorBtn");
const formSubmitBtn = document.querySelector(".formSubmitBtn");

// Getting the current year and displaying it in the footer

const currentYear = new Date().getFullYear();
copyrightDiv.innerHTML = `&copy; Oliver Cvetkoski  ${currentYear}`;

// Function for handling the form submission and displaying the input value in a paragraph

form.addEventListener("submit", (e) => {
  e.preventDefault();
  textOutput.innerHTML += `<p>${input.value}</p>`;
  input.value = "";
});

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
