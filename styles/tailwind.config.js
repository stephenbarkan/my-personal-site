module.exports = {
  mode: "jit",
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      screens: {
        xs: "501px",
      },
      spacing: {
        15: ".9375rem",
      },
      gridTemplateRows: {
        site: "min-content 1fr min-content",
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
    },
    boxShadow: {
      // shadows generated https://www.joshwcomeau.com/shadow-palette/
      // oomph: .03, crispy: 0, light position: centered like 1/3 up, resolution .75
      "inset-stroke":
        "0px 0px 0px 0.6px inset hsla(var(--global-shadow-color) /  0.40)",
      "applet-header":
        "0px 1px 1px 0px hsla(var(--global-shadow-color) / 0.04), 0px 1px 1px 0px rgba(var(--clr-solid), 0.20), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) / 0.3)",
      "app-icon":
        "0px 1px 1px 0px hsla(var(--scoped-shadow-color) / 0.15), 0px 1px 3px 0px rgba(var(--clr-solid), 0.20), 0 1px 1px 0px inset rgba(255,255,255, .5), 0 -1px 1px 0px inset hsla(var(--scoped-shadow-color)/ .15), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) / 0.3)",
      "btn-basic":
        "0px 1px 1px hsla(var(--scoped-shadow-color) / 0.40), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) /  0.40)",
      "btn-basic-inset":
        "0px 1px 1px inset hsla(var(--scoped-shadow-color) / 0.2), 0px 0px 0px 0.6px hsla(var(--scoped-shadow-color) / 0.40)",
      "list-inset": "0px 1px 1px inset hsla(var(--scoped-shadow-color) / .3)",
      "btn-highlight":
        "0px 0px 0px 0.6px #005CAF, 0px 1px 1px rgba(0, 0, 0, 0.07)",
      topbar:
        "0px 1px 1px hsla(var(--global-shadow-color) / 0.40), 0px 1px 40px 0px rgba(var(--clr-solid), 0.10), 0px 0px 0px 0.6px hsla(var(--global-shadow-color) / 0.4)",
      body: "0px 0px 40px 0px inset rgba(var(--clr-solid), 0.2)",
      focus: "0px 0px 0px 2px #5A98F6, 0px 0px 0px 4px #DCEAFF",
      "applet-idle":
        "0px 0.4px 0.6px hsl(var(--global-shadow-color) / 0), 0px 1.5px 2.3px hsl(var(--global-shadow-color) / 0.09), 0px 3px 4.5px hsl(var(--global-shadow-color) / 0.19), 0px 5.9px 8.9px hsl(var(--global-shadow-color) / 0.28), 0 0 0 0.6px hsla(var(--global-shadow-color) / .5)",
      "applet-active":
        "0px 0px 0.6px hsl(var(--global-shadow-color) / 0), 0px 0px 3.5px hsl(var(--global-shadow-color) / 0.04), 0px 0px 6px hsl(var(--global-shadow-color) / 0.09), 0px 6px 10px hsl(var(--global-shadow-color) / 0.17), 0px 8px 12px hsl(var(--global-shadow-color) / 0.22), 0px 10px 16px -2px hsl(var(--global-shadow-color) / 0.26), -0.1px 15px 25px -3px hsl(var(--global-shadow-color) / 0.3), 0 0 0 0.6px hsla(var(--global-shadow-color) / .5)",
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
        divider: "hsla(var(--scoped-shadow-color) / 0.3)",
        shade: "var(--shade)",
        "topbar-bg": "var(--topbar-bg)",
        wallpaper: "var(--wallpaper)",
      },
      btn: {
        bg: "var(--btn-bg)",
        border: "var(--btn-border)",
        "bg-hover": "var(--btn-bg-hover)",
      },
      clr: {
        solid: "rgba(var(--clr-solid), 1)",
        tint: "var(--clr-tint)",
        highlight: "var(--clr-highlight)",
      },
    },
  },
  variants: {},
  plugins: [],
};
