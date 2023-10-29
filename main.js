class PageManager {
  constructor() {
    this.textOutput = document.querySelector(".textOutput");
    this.form = document.querySelector(".form");
    this.input = document.querySelector(".textInput");
    this.copyrightDiv = document.querySelector(".copyright");
    this.darkModeBtn = document.querySelector(".toggleBgColorBtn");
    this.formSubmitBtn = document.querySelector(".formSubmitBtn");

    this.isDarkMode = false;

    this.initialize();
  }

  // Get the current year and display it in the footer.

  updateCopyright() {
    const currentYear = new Date().getFullYear();
    this.copyrightDiv.innerHTML = `&copy; Oliver Cvetkoski ${currentYear}`;
  }

  // Function for handling the form submission and displaying the input value in a paragraph.

  handleFormSubmission(e) {
    e.preventDefault();
    this.textOutput.innerHTML += `<p>${this.input.value}</p>`;
    this.input.value = "";
  }

  // Function for toggling between dark mode and light mode.

  toggleDarkMode() {
    this.input.classList.toggle("textInputDark", !this.isDarkMode);
    this.formSubmitBtn.classList.toggle("formSubmitBtnLight", !this.isDarkMode);
    this.textOutput.style.color = this.isDarkMode ? "black" : "white";
    this.darkModeBtn.classList.toggle("lightModeBtn", !this.isDarkMode);
    this.darkModeBtn.innerHTML = this.isDarkMode ? "Dark Mode" : "Light Mode";
    document.body.style.backgroundColor = this.isDarkMode ? "white" : "black";
    this.isDarkMode = !this.isDarkMode;
  }

  // Initializes the PageManager instance by setting up event listeners and updating the copyright.

  initialize() {
    this.updateCopyright();
    this.form.addEventListener("submit", this.handleFormSubmission.bind(this));
    this.darkModeBtn.addEventListener("click", this.toggleDarkMode.bind(this));
  }
}

const pageManager = new PageManager();
