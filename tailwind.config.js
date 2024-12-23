/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					red: "#DC2626", // Primary brand red
					black: "#1F2937", // Primary brand black
					brown: "#8B5E34", // Primary brand brown
					white: "#FFFFFF",
				},
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				display: ["Inter", "system-ui", "sans-serif"],
			},
			boxShadow: {
				soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
				crisp: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				glow: "0 0 15px rgba(220, 38, 38, 0.3)",
				"inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.6s ease-out",
				scale: "scale 0.3s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				scale: {
					"0%": { transform: "scale(0.95)" },
					"100%": { transform: "scale(1)" },
				},
			},
			borderRadius: {
				xl: "1rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
			},
			backdropBlur: {
				xs: "2px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".text-shadow-sm": {
					textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
				},
				".text-shadow": {
					textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
				},
				".text-shadow-md": {
					textShadow: "0 4px 8px rgba(0, 0, 0, 0.12)",
				},
				".backdrop-blur-xs": {
					backdropFilter: "blur(2px)",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
