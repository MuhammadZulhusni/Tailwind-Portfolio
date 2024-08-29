// NavBar Fixed
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
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Toggle mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
