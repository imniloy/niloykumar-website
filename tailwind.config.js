/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "500px": "500px",
        "840px": "840px",
        "1100px": "1100px",
      },
      backgroundImage: {
        background1: "var(--background-color-1)",
        "hero-animated-bg": "var(--background-gradient-color-1)",
        niloyProfileImg: "var(/images/nn.jpeg)",
      },

      borderColor: {
        lightn: "var(--color-lightn)",
      },
      backgroundColor: {
        background2: "var(--background-color-2)",
        bgBlackWave: "var(--color-heading-wv)",
        stickyNavbarBackground: "var(--sticky-navbar-background)",
        sidebarBg: "var(--sidebar-background)",
        hoverbg: "var(--hover-background)",
      },
      gradientColorStops: {
        animatedBackground: "var(--background-gradient-color-1)",
      },
      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        lightn: "var(--color-lightn)",
        body: "var(--color-body)",

        // primaryHoverGradient: "var(--gradient-primary-color-hover)",
      },
      fontFamily: {
        montserrat: "var(--font-secondary)",
        poppins: "var(--font-primary)",
      },
      fontSize: {
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
      },
      boxShadow: {
        shadow1: "var(--shadow-1)",
        shadow2: "var(--shadow-2)",
        shadow3: "var(--shadow-3)",
        innerShadow: "var(--inner-shadow)",
        whiteShadow3: "var(--shadow-white-3)",
      },
      borderWidth: {
        "12px": "var(--border-width)",
      },
      animation: {
        "hero-animated-bg": "animate-gradient 1.5s ease alternate infinite",
      },
      keyframes: {
        "animate-gradient": {
          "0%": {
            backgroundImage:
              "linear-gradient(60deg,#f79533,#f37055, #ef4e7b, #a166ab)",
          },
          "%50": {
            backgroundImage:
              "linear-gradient(60deg,#5073b8,#1098ad, #07b39b, #6fba82)",
          },
          "100%": {
            backgroundImage:
              "linear-gradient(60deg,#07b39b,#6fba82, #f79533, #f37055)",
          },
        },
      },
    },
  },
  plugins: [],
};
