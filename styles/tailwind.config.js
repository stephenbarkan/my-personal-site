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
      "applet-active":
        "0px 0px 0px 0.6px rgba(64, 64, 76, 0.1), 0px 2px 16px -4px rgba(0, 0, 0, 0.06), 0px 3px 20px -8px rgba(0, 0, 0, 0.14)",
      "applet-idle":
        "0px 0px 0px 0.6px rgba(64, 64, 76, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.05)",
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
