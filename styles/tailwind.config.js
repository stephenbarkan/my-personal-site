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
    boxShadow: {
      "btn-basic":
        "0px 1px 1px rgba(0, 0, 0, 0.07), 0px 0px 0px 0.6px rgba(0, 0, 0, 0.17)",
      "btn-inset-basic":
        "0px 1px 1px inset rgba(0, 0, 0, 0.05), 0px 0px 0px 0.6px rgba(0, 0, 0, 0.17)",
      "btn-highlight":
        "0px 0px 0px 0.6px #005CAF, 0px 1px 1px rgba(0, 0, 0, 0.07)",
      topbar: "0px 0px 0px 0.6px rgba(0, 0, 0, 0.17)",
      focus: "0px 0px 0px 2px #5A98F6, 0px 0px 0px 4px #DCEAFF",
      //   shadows generated https://www.joshwcomeau.com/shadow-palette/
      // oomph: .03
      // crispy: 0
      //light position: centered like 1/3 up
      // resolution .75
      "applet-idle":
        "0px 0.4px 0.6px hsl(var(--shadow-color) / 0), 0px 1.5px 2.3px hsl(var(--shadow-color) / 0.09), 0px 3px 4.5px hsl(var(--shadow-color) / 0.19), 0px 5.9px 8.9px hsl(var(--shadow-color) / 0.28), 0 0 0 0.6px rgba(64, 64, 76, 0.1)",
      "applet-active":
        "0px 0.4px 0.6px hsl(var(--shadow-color) / 0), 0px 2.3px 3.5px hsl(var(--shadow-color) / 0.04), 0px 4px 6px hsl(var(--shadow-color) / 0.09), 0px 5.7px 8.6px hsl(var(--shadow-color) / 0.13), 0px 7.9px 11.9px hsl(var(--shadow-color) / 0.17), 0px 10.9px 16.4px hsl(var(--shadow-color) / 0.22), 0px 15px 22.5px hsl(var(--shadow-color) / 0.26), -0.1px 20.6px 30.9px hsl(var(--shadow-color) / 0.3), 0 0 0 0.6px rgba(64, 64, 76, 0.1)",
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
        divider: "var(--divider)",
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
        solid: "var(--clr-solid)",
        tint: "var(--clr-tint)",
        highlight: "var(--clr-highlight)",
      },
    },
  },
  variants: {},
  plugins: [],
};
