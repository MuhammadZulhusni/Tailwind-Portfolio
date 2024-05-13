/**
 * Configuration for Tailwind CSS.
 * This file defines custom configurations for Tailwind CSS, such as theme settings,
 * container options, extended colors, and custom screen sizes.
 */

module.exports = {
  content: ["index.html"], // Specifies which files Tailwind should scan for classes
  darkMode: "class",
  theme: {
    container: {
      center: true, // Centers the content horizontally within the container
      padding: "16px", // Sets padding for container elements
    },
    extend: {
      colors: {
        primary: "#14b8a6", // Custom primary color
        secondary: "#64748b", // Custom secondary color
        dark: "#0f172a", // Custom dark color
      },
      screens: {
        "2xl": "1320px", // Custom screen size definition for 2xl breakpoint
      },
    },
  },
  plugins: [], // Additional plugins can be added here if needed
};
