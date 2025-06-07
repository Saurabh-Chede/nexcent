module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#4caf4f",
          dark: "#45a049",
          light: "#e8f5e9",
        },
        secondary: {
          gray: "#4d4d4d",
          lightGray: "#717171",
          darkBlue: "#263238",
        },
        background: {
          light: "#f5f7f9",
          white: "#ffffff",
          dark: "#263238",
        },
        text: {
          primary: "#4d4d4d",
          secondary: "#717171",
          white: "#ffffff",
          green: "#4caf4f",
        },
        border: {
          light: "#e0e0e0",
          medium: "#cccccc",
          dark: "#999999",
          transparent: "#ffffff33",
        },
      },
      boxShadow: {
        card: "0px 1px 2px rgba(171, 190, 209, 0.2)",
        header: "0px 4px 8px rgba(171, 190, 209, 0.4)",
        blog: "0px 5px 11px rgba(171, 190, 209, 0.4)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  }
};