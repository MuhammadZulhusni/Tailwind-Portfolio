// NavBar Fixed.
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    // If the page is scrolled past the header, make the navbar fixed
    header.classList.add("navbar-fixed");

    // Show the "to-top" button when the navbar is fixed
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    // Remove the fixed navbar styling when scrolled to the top
    header.classList.remove("navbar-fixed");

    // Hide the "to-top" button when at the top of the page
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Select hamburger icon and navigation menu elements
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  // Toggle the 'hamburger-active' class to animate the icon
  hamburger.classList.toggle("hamburger-active");

  // Toggle the 'hidden' class to show or hide the navigation menu
  navMenu.classList.toggle("hidden");
});

// Close the navigation menu when clicking outside the hamburger or menu
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    // Remove the 'hamburger-active' class to reset the icon
    hamburger.classList.remove("hamburger-active");

    // Add the 'hidden' class to hide the navigation menu
    navMenu.classList.add("hidden");
  }
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
// Selects the dark mode toggle checkbox element.
const html = document.querySelector("html");
// Selects the <html> element to apply or remove the "dark" class.

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    // If the toggle is checked (dark mode is activated):

    html.classList.add("dark");
    // Add the "dark" class to the <html> element to activate dark mode.

    localStorage.theme = "dark";
    // Save the user's dark mode preference in local storage.
  } else {
    // If the toggle is unchecked (light mode is activated):

    html.classList.remove("dark");
    // Remove the "dark" class from the <html> element to deactivate dark mode.

    localStorage.theme = "light";
    // Save the user's light mode preference in local storage.
  }
});
// Set the initial theme based on user preference or system settings
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  // If the user preference is set to dark in local storage, or if there is no saved preference and the system preference is dark:

  document.documentElement.classList.add("dark");
  // Add the "dark" class to the <html> element to activate dark mode by default.

  darkToggle.checked = true;
  // Set the toggle checkbox to checked state.
} else {
  // If the user preference is set to light or the system preference is light:

  darkToggle.checked = false;
  // Ensure the toggle checkbox is in the unchecked state.
}
