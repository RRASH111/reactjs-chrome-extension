/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#202124",
          "200": "rgba(0, 0, 0, 0.7)",
        },
        gainsboro: "#d9d9d9",
        white: "#fff",
        dimgray: "#4a5568",
        lightskyblue: {
          "100": "#90cdf4",
          "200": "#8fcbf2",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        inter: "Inter",
        "inria-sans": "'Inria Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "3xs": "10px",
      smi: "13px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
