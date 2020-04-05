module.exports = {
	theme: {
		screens: {
			xs: "450px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1152px"
		},

		lineHeight: {
			none: "1",
			tight: "1.2",
			snug: "1.3",
			loose: "1.5",
			normal: "1.7"
		},

		borderRadius: {
			none: '0',
			sm: "0.25rem",
			default: '.375rem',
			lg: '1.25rem',
			full: '9999px'
		},

		letterSpacing: {
			tight: "-0.02em",
			wide: ".02em",
		},

		boxShadow: {
			sm: "0px 0.5px 3px -2px rgba(0, 0, 0, 0.5)",
			md: "0px 0px 2.16398px rgba(0, 0, 0, 0.0217013), 0px 0px 5.47287px rgba(0, 0, 0, 0.0310596), 0px 0px 11.1641px rgba(0, 0, 0, 0.0389404), 0px 0px 22.996px rgba(0, 0, 0, 0.0482987), 0px 0px 63px rgba(0, 0, 0, 0.07)",
			lg: "0px 0px 4.15622px rgba(0, 0, 0, 0.034102), 0px 0px 10.5114px rgba(0, 0, 0, 0.048808), 0px 0px 21.4423px rgba(0, 0, 0, 0.061192), 0px 0px 44.167px rgba(0, 0, 0, 0.075898), 0px 0px 121px rgba(0, 0, 0, 0.11)",
			xl: "0px 0.239565px 23.6407px rgba(0, 0, 0, 0.0334698), 0px 1.17993px 38.8132px rgba(0, 0, 0, 0.045558), 0px 3.48778px 47.6491px rgba(0, 0, 0, 0.0578826), 0px 9.34215px 55.2599px rgba(0, 0, 0, 0.076608), 0px 33px 92px rgba(0, 0, 0, 0.11)",
			outline: '0 0 0 3px rgba(21, 166, 248, 0.5)',
			inset: 'inset 0 0 0 .5px rgba(0, 0, 0, .175)',
			none: 'none'
		},

		colors: {
			transparent: "transparent",
			white: "#ffffff",

			grey: {
				900: "#16151e",
				800: "#333138",
				700: "#514F56",
				600: "#6f6d74",
				500: "#959398",
				400: "#AEADAF",
				300: "#cccccc",
				200: "#e8e8e8",
				100: "#F7F7F7"
			},

			black: {
				900: "rgba(0,0,0, .91)",
				800: "rgba(0,0,0, .81)",
				700: "rgba(0,0,0, .69)",
				600: "rgba(0,0,0, .57)",
				500: "rgba(0,0,0, .42)",
				400: "rgba(0,0,0, .32)",
				300: "rgba(0,0,0, .20)",
				200: "rgba(0,0,0, .09)",
				100: "rgba(0,0,0, .03)",
				default: "#000000"
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
				700: "#6258D5",
				500: "#5547ec",
				100: "#EEEDFD"
			},

			yellow: {
				800: "#9a6605",
				700: "#D09525",
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
				100: "#ECF6FE"
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

		transitionTimingFunction: {
			smooth: 'cubic-bezier(.2,.8,.2,1)'
		},

		extend: {
			spacing: {
				"1-5": "0.375rem",
				"14": "3.5rem",
				"44": "11rem",
				"96": "24rem",
				full: "100%"
			},

			zIndex: {
				"-1": "-1"
			},

			maxWidth: {
				headline: "18em",
				"2xl": "45rem"
			},

			fontSize: {
				xxs: ".75rem",
				xs: "0.8125rem",
				sm: "0.9375rem",
				"2xl": "1.75rem",
				"3xl": "2.25rem",
				"4xl": "2.5rem",
				"5xl": "3.5rem"
			},

			transitionDuration: {
				150: "150ms",
				300: "300ms",
				500: "500ms",
				700: "700ms",
				1000: "1000ms",
				'inherit': 'inherit'
			},

			transitionProperty: {
				'default': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, visibility',
				'inherit': 'inherit'
			},

			transitionTimingFunction: {
				'inherit': 'inherit'
			}

		}
	},

	variants: {
		textDecoration: ["responsive", "hover", "focus", "group-hover", 'group-hocus'],
		margin: ["responsive", "first"],
		borderWidth: ["hover", "focus", "first"],
		backgroundColor: ["hover", "focus", "hocus", "responsive", "focus-within"],
		opacity: ["hover", "focus", "hocus", "responsive", "focus-within", "group-hover"],
		textColor: ["hover", "focus", "hocus", "group-hocus", "group-hover", "group-focus"],
		borderColor: ["hover", "focus", "hocus", "group-hocus"],
		order: ["responsive"],
		boxShadow: ["responsive", "hover", "focus", 'hocus'],
		skew: ["responsive", "hover", "hocus", 'group-focus'],
		translate: ["responsive", "hover", "hocus", 'group-focus']
	},

	plugins: [
		require('tailwindcss-interaction-variants')(),
	]
};