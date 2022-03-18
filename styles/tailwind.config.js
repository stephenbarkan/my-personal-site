module.exports = {
  mode: "jit",
  content: ["_site/**/*.html"],
  theme: {
    extend: {
      screens: {
        xs: "501px",
      },
      spacing: {
        15: ".9375rem",
        "max-content": "max-content",
      },
      gridTemplateRows: {
        site: "auto minmax(0,1fr) auto",
      },
      gridTemplateColumns: {
        dl: "min-content 1fr",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      sans: ["var(--font-family)", "sans-serif"],
    },
    fontSize: {},
    borderRadius: {
      sm: "5px",
      DEFAULT: "8px",
      lg: "11px",
      xl: "20px",
      full: "999px",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(.2,.8,.2,1)",
      bounce: "cubic-bezier(0.34, 0.64, 0, 3.5)",
      "bounce-small": "cubic-bezier(.34, .64, 0, 1.8)",
    },
    boxShadow: {
      // shadows generated https://www.joshwcomeau.com/shadow-palette/
      // oomph: .03, crispy: 0, light position: centered like 1/3 up, resolution .75
      "inset-stroke": "0px 0px 0px 0.6px inset hsla(var(--global-shadow-color) /  0.15)",
      "applet-header": "0px 1px 1px 0px hsla(var(--scoped-shadow-color) / .03), 0px 1px 3px 0px rgba(var(--clr-solid), .2), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) / .1), inset 0 1px 2px -1px rgba(var(--btn-highlight) / 1)",
      "app-icon": "0px 1px 1px 0px hsla(var(--scoped-shadow-color) / 0.05), 0px 1px 3px 0px rgba(var(--clr-solid), 0.08), 0 1px 1px 0px inset rgba(255,255,255, .15), 0 -1px 1px 0px inset hsla(var(--scoped-shadow-color)/ .15), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) / 0.12)",
      "btn-basic": "0px 1px 2px hsla(var(--scoped-shadow-color) / 0.1), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) /  0.15)",
      "btn-basic-inset": "0px 1px 3px -1px inset hsla(var(--scoped-shadow-color) / 0.15), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) / 0.2)",
      "btn-highlight": "0px 1px 2px hsla(var(--scoped-shadow-color) / 0.2), 0px 0px 0px 0.6px hsla(var(--btn-highlight-border) /  0.8), 0px 1px 1px 0px rgba(var(--clr-solid), .8)",
      "btn-highlight-inset": "0px 1px 1px inset hsla(var(--btn-highlight-border) / 0.9), 0px 0px 0px 0.6px hsla(var(--btn-highlight-border) / 1)",
      "list-inset": "0px 1px 3px -1px inset hsla(var(--scoped-shadow-color) / .15), 0px 0px .6px inset hsla(var(--scoped-shadow-color) / .2)",
      topbar: "0px 1px 1px hsla(var(--global-shadow-color) / 0.15), 0px 1px 40px 0px rgba(var(--clr-solid), 0.05), 0px 0px 0px 0.6px hsla(var(--global-shadow-color) / 0.15)",
      body: "0px 0px 40px 0px inset rgba(var(--clr-solid), 0.2)",
      focus: "0px 0px 0px 2px #5A98F6, 0px 0px 0px 4px #DCEAFF",
      "applet-idle": "0px 1.5px 2.3px hsl(var(--global-shadow-color) / 0.03), 0px 3px 4.5px hsl(var(--global-shadow-color) / 0.08), 0px 5.9px 8.9px hsl(var(--global-shadow-color) / 0.12), 0 0 0 0.6px hsla(var(--global-shadow-color) / .16)",
      "applet-active":
        " 0px 0px 3.5px hsl(var(--global-shadow-color) / 0.01), 0px 0px 6px hsl(var(--global-shadow-color) / 0.02), 0px 6px 10px hsl(var(--global-shadow-color) / 0.04), 0px 8px 12px hsl(var(--global-shadow-color) / 0.08), 0px 10px 16px -2px hsl(var(--global-shadow-color) / 0.12), -0.1px 15px 25px -3px hsl(var(--global-shadow-color) / 0.14), 0 0 0 0.6px hsla(var(--global-shadow-color) / .16)",
    },
    dropShadow: {
      "app-icon": "0px 0px 3px rgba(var(--clr-solid), 0.3)",
    },
    backdropBlur: {
      DEFAULT: "20px",
      lg: "60px",
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      inherit: "inherit",
      display: {
        primary: "var(--display-primary)",
        secondary: "var(--display-secondary)",
        tertiary: "var(--display-tertiary)",
        "inverse-primary": "var(--display-inverse-primary)",
        "inverse-secondary": "var(--display-inverse-secondary)",
        "inverse-tertiary": "var(--display-inverse-tertiary)",
        link: "var(--display-link)",
      },
      ui: {
        "applet-bg": "var(--applet-bg)",
        divider: "hsla(var(--scoped-shadow-color) / 0.08)",
        shade: "var(--shade)",
        "topbar-bg": "var(--topbar-bg)",
        wallpaper: "var(--wallpaper)",
      },
      btn: {
        bg: "var(--btn-bg)",
        border: "var(--btn-border)",
        "bg-hover": "var(--btn-bg-hover)",
        "highlight-bg-hover": "hsla(var(--btn-highlight-hover) / 1)",
      },
      clr: {
        solid: "rgba(var(--clr-solid), 1)",
        tint: "var(--clr-tint)",
        highlight: "var(--clr-highlight)",
      },
    },
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      typingDots: {
        "0%, 100%": {
          transform: "translateY(0)",
          opacity: 1,
        },

        "25%": {
          transform: "translateY(1px)",
        },

        "50%": {
          transform: "translateY(0)",
          opacity: 0.5,
        },

        "75%": {
          transform: "translateY(-1px)",
        },
      },
      slideUp: {
        "0%": {
          opacity: 0,
          transform: "translateY(.75rem)",
        },
        "50%": {
          opacity: 1,
        },
        "100%": {
          opacity: 1,
          transform: "translate(0)",
        },
      },
      clearTypingBubble: {
        "0%, 100%": {
          opacity: 0,
          transform: "translateY(.5rem)",
        },
        "15%, 85%": {
          opacity: 1,
          transform: "none",
        },
      },
    },
    animation: {
      spin: "spin 1s infinite linear",
      "typing-dots": "typingDots 1s infinite linear",
      "slide-up": "slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      "clear-typing-bubble": "clearTypingBubble 1.75s linear both",
    },
  },
  variants: {},
  plugins: [],
};
