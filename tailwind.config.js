module.exports = {
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1152px",
    },

    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.3",
      loose: "1.5",
      normal: "1.7",
    },

    borderRadius: {
      none: "0",
      sm: "0.25rem",
      DEFAULT: ".375rem",
      lg: "1rem",
      xl: "1.25rem",
      full: "9999px",
    },

    letterSpacing: {
      tight: "-.01em",
      snug: "-.01em",
      wide: ".02em",
    },

    boxShadow: {
      sm: "var(--shadow-sm)",
      md:
        "0px 0px 2.16398px rgba(0, 0, 0, 0.0217013), 0px 0px 5.47287px rgba(0, 0, 0, 0.0310596), 0px 0px 11.1641px rgba(0, 0, 0, 0.0389404), 0px 0px 22.996px rgba(0, 0, 0, 0.0482987), 0px 0px 63px rgba(0, 0, 0, 0.07)",
      lg:
        "0px 0px 4.15622px rgba(0, 0, 0, 0.034102), 0px 0px 10.5114px rgba(0, 0, 0, 0.048808), 0px 0px 21.4423px rgba(0, 0, 0, 0.061192), 0px 0px 44.167px rgba(0, 0, 0, 0.075898), 0px 0px 121px rgba(0, 0, 0, 0.11)",
      xl:
        "0px 0.239565px 23.6407px rgba(0, 0, 0, 0.0334698), 0px 1.17993px 38.8132px rgba(0, 0, 0, 0.045558), 0px 3.48778px 47.6491px rgba(0, 0, 0, 0.0578826), 0px 9.34215px 55.2599px rgba(0, 0, 0, 0.076608), 0px 33px 92px rgba(0, 0, 0, 0.11)",
      outline: "var(--shadow-outline)",
      inset: "var(--shadow-inset)",
      none: "none",
    },

    colors: {
      transparent: "transparent",
      white: "var(--clr-white)",

      grey: {
        900: "var(--clr-grey-900)",
        800: "var(--clr-grey-800)",
        700: "var(--clr-grey-700)",
        600: "var(--clr-grey-600)",
        500: "var(--clr-grey-500)",
        400: "var(--clr-grey-400)",
        300: "var(--clr-grey-300)",
        200: "var(--clr-grey-200)",
        100: "var(--clr-grey-100)",
      },

      black: {
        900: "var(--clr-black-900)",
        800: "var(--clr-black-800)",
        700: "var(--clr-black-700)",
        600: "var(--clr-black-600)",
        500: "var(--clr-black-500)",
        400: "var(--clr-black-400)",
        300: "var(--clr-black-300)",
        200: "var(--clr-black-200)",
        100: "var(--clr-black-100)",
        DEFAULT: "var(--clr-black)",
      },

      neutral: {
        DEFAULT: "var(--clr-neutral)",
      },

      always: {
        white: "#ffffff",
        dark: "#221e24",
      },

      red: {
        800: "#6e302b",
        700: "#c85646",
        500: "var(--clr-me)",
        100: "var(--clr-me-light)",
      },

      purple: {
        800: "var(--clr-portfolio-darker)",
        700: "var(--clr-portfolio-dark)",
        500: "var(--clr-portfolio)",
        100: "var(--clr-portfolio-light)",
      },

      yellow: {
        800: "#9a6605",
        700: "#D09525",
        500: "var(--clr-journal)",
        100: "var(--clr-journal-light)",
      },

      green: {
        800: "#0c554c",
        700: "var(--clr-music-dark)",
        500: "var(--clr-music)",
        100: "var(--clr-music-light)",
      },

      blue: {
        800: "#034063",
        700: "#1379b4",
        500: "var(--clr-contact)",
        100: "var(--clr-contact-light)",
      },
    },

    fontFamily: {
      sans: [
        "IBM Plex Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "ITCGaramondSTD",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      mono: [
        "IBM Plex Mono",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },

    transitionTimingFunction: {
      smooth: "cubic-bezier(.2,.8,.2,1)",
    },

    extend: {
      spacing: {
        "1-5": "0.375rem",
        14: "3.5rem",
        28: "7rem",
        44: "11rem",
        72: "18rem",
        96: "24rem",
        full: "100%",
      },

      inset: {
        "1/2": "50%",
      },

      translate: {
        "-1/2": "-50%",
      },

      zIndex: {
        "-1": "-1",
      },
      minWidth: (theme) => theme("spacing"),
      maxWidth: {
        headline: "44rem",
        "2xl": "45rem",
      },

      maxHeight: {
        64: "16rem",
      },
      cursor: {
        "zoom-out": "zoom-out",
      },

      fontSize: {
        xxs: ".75rem",
        xs: "0.8125rem",
        sm: "0.875rem",
        md: "1.125rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "3.5rem",
        headline: "max(3rem,min(calc(6.5vw),4rem))",
      },

      transitionDuration: {
        none: "0",
        150: "150ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
        inherit: "inherit",
      },

      transitionProperty: {
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, visibility",
        inherit: "inherit",
      },

      transitionTimingFunction: {
        inherit: "inherit",
      },
    },
  },

  variants: {
    textDecoration: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "group-hocus",
      "hocus",
    ],
    margin: ["responsive", "first"],
    borderWidth: ["hover", "focus", "first"],
    backgroundColor: [
      "hover",
      "focus",
      "hocus",
      "responsive",
      "focus-within",
      "group-hover",
    ],
    opacity: [
      "hover",
      "focus",
      "hocus",
      "responsive",
      "focus-within",
      "group-hover",
      "focus-visible",
    ],
    textColor: [
      "hover",
      "focus",
      "hocus",
      "group-hocus",
      "group-hover",
      "group-focus",
      "focus-visible",
    ],
    borderColor: [
      "hover",
      "focus",
      "hocus",
      "group-hocus",
      "group-hover",
      "focus-visible",
    ],
    order: ["responsive"],
    boxShadow: ["responsive", "hover", "focus", "hocus", "focus-visible"],
    ringWidth: ["focus", "hocus", "focus-visible"],
    skew: ["responsive", "hover", "hocus", "group-focus"],
    translate: ["responsive", "hover", "hocus", "group-focus"],
    transitionDuration: ["hover"],
    zIndex: [
      "hover",
      "focus",
      "hocus",
      "responsive",
      "focus-within",
      "group-hover",
      "focus-visible",
    ],
  },

  plugins: [require("tailwindcss-interaction-variants")()],
};
