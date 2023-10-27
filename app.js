// Get references to various elements on the page.

const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".ul");
const textOutput = document.querySelector(".textOutput");
const form = document.querySelector(".form");
const input = document.querySelector(".textInput");
const copyrightDiv = document.querySelector(".copyright");

// Getting the current year and displaying it in the footer on the page

const currentYear = new Date().getFullYear();
copyrightDiv.innerHTML = `&copy; Oliver Cvetkoski  ${currentYear}`;

// This function handles the form submission and displays the input value in a paragraph.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  textOutput.innerHTML += `<p>${input.value}</p>`;
  input.value = "";
});

isMenuOpen = false;

menuToggle.addEventListener("click", function () {
  if (!isMenuOpen) {
    menuList.style.display = "flex";
    isMenuOpen = true;
  } else {
    menuList.style.display = "none";
  }
});
