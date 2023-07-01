import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode("#fff")(props),
			},
		}),
	},
	colors: {
		brand: {
			black: "#151f21",
			blue: "#4164e3",
			cadet: "#8998a8",
			dark: "#243156",
			gray: "#2D3748",
			green: "#36c537",
			light: "#e9ebee",
			pure: "#fafafb",
			slate: "#77889a",
			white: "#e3e4e7",
			yellow: "#ed9b13",
			red: "#ff0000",
		},
	},
	components: {
		Text: {
			variants: {
				default: {
					overflow: "hidden",
					textOverflow: "hidden",
				},
			},
			defaultProps: {
				variant: "default",
			},
		},
		Heading: {
			variants: {
				default: {
					overflow: "hidden",
					textOverflow: "hidden",
				},
			},
			defaultProps: {
				variant: "default",
			},
		},
	},
});
