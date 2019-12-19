module.exports = {
	theme: {
		screens: {
			xs: "450px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px"
		},

		lineHeight: {
			none: "1",
			tight: "1.2",
			snug: "1.3",
			normal: "1.7"
		},

		borderRadius: {
			none: '0',
			sm: "0.1875rem",
			default: '0.25rem',
			full: '9999px'
		},

		letterSpacing: {
			tight: "-0.02em",
			wider: "0.05em"
		},

		boxShadow: {
			md: " 0 0px 2px rgba(0, 0, 0, 0.032), 0 0px 6.7px rgba(0, 0, 0, 0.048), 0 0px 30px rgba(0, 0, 0, 0.08)",
			lg: "0 0.8px 1.6px rgba(0, 0, 0, 0.011),0 3px 4.9px rgba(0, 0, 0, 0.029),0 6.6px 10.4px rgba(0, 0, 0, 0.053),0 12.3px 19.3px rgba(0, 0, 0, 0.084),0 21.3px 34.4px rgba(0, 0, 0, 0.125),0 42px 71px rgba(0, 0, 0, 0.2)",
			outline: '0 0 0 3px rgba(21, 166, 248, 0.5)',
			none: 'none'
		},

		colors: {
			transparent: "transparent",

			black: "#000",
			white: "#fff",

			grey: {
				900: "#16151e",
				800: "#333138",
				700: "#514F56",
				600: "#6f6d74",
				400: "#a5a3a8",
				200: "#cccccc",
				100: "#f5f5f5"
			},

			neutral: {
				100: "#fffdf5",
				900: "#221e24"
			},

			red: {
				800: "#6e302b",
				700: "#c85646",
				500: "#fc664f",
				100: "#ffede4"
			},

			purple: {
				800: "#373460",
				700: "#675ec9",
				500: "#5547ec",
				100: "#EEEDFD"
			},

			yellow: {
				800: "#785d2b",
				700: "#cf9b3a",
				500: "#ffad0e",
				100: "#fff5dd"
			},

			green: {
				800: "#0c554c",
				700: "#219c8d",
				500: "#0fbda8",
				100: "#eef7f0"
			},

			blue: {
				800: "#034063",
				700: "#1379b4",
				500: "#15a6f8",
				100: "#edf6f6"
			}
		},

		fontFamily: {
			sans: [
				"IBM Plex Sans",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			],
			serif: [
				"ClearfaceStd-Regular",
				"Georgia",
				"Cambria",
				'"Times New Roman"',
				"Times",
				"serif"
			],
			mono: [
				"IBM Plex Mono",
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace"
			]
		},

		extend: {
			spacing: {
				"1-5": "0.375rem",
				"14": "3.5rem",
				"96": "24rem",
				full: "100%"
			},

			maxWidth: {
				headline: "10em"
			},

			fontSize: {
				sm: "0.8125rem"
			},
		}
	},

	variants: {
		textDecoration: ["responsive", "hover", "focus", "group-hover", 'group-hocus'],
		margin: ["responsive", "first"],
		borderWidth: ["hover", "focus", "first"],
		backgroundColor: ["hover", "focus", "hocus", "responsive", "focus-within"],
		textColor: ["hover", "focus", "hocus", "group-hocus"],
		order: ["responsive"]
	},

	plugins: [
		require('tailwindcss-interaction-variants')(),
	]
};