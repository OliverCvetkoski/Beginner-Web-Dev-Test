// Get references to various elements on the page.

const toggleHamburgerMenu = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".hamburgerMenu");
const textOutput = document.querySelector(".textOutput");
const form = document.querySelector(".form");
const input = document.querySelector(".textInput");
const copyrightDiv = document.querySelector(".copyright");
const hamburgerBars = document.querySelectorAll(".bar");

// Getting the current year and displaying it in the footer on the page

const currentYear = new Date().getFullYear();
copyrightDiv.innerHTML = `&copy; Oliver Cvetkoski  ${currentYear}`;

// This function handles the form submission and displays the input value in a paragraph.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  textOutput.innerHTML += `<p>${input.value}</p>`;
  input.value = "";
});

const hamburgerDiv = document.createElement("div");
hamburgerDiv.classList.add("hamburgerContainer");

let isMenuOpen = false;

toggleHamburgerMenu.addEventListener("click", function () {
  if (isMenuOpen) {
    // If the menu is open, close it
    hamburgerDiv.classList.remove("showHamburgerMenu");
    document.body.removeChild(hamburgerDiv);
    hamburgerBars.forEach((bar) => {
      bar.style.backgroundColor = "black";
    });
    isMenuOpen = false;
  } else {
    // If the menu is closed, open it
    hamburgerDiv.classList.add("showHamburgerMenu");
    hamburgerDiv.appendChild(menuItems);
    document.body.appendChild(hamburgerDiv);
    hamburgerBars.forEach((bar) => {
      bar.style.backgroundColor = "white";
    });
    isMenuOpen = true;
  }
});
