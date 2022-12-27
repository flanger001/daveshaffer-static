const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
    mode: "jit",
    content: {
        relative: true,
        files: ["./src/**/*.{md,liquid,ts}"],
    },
    darkMode: "class",
    theme: {
        extend: {
            aria: {
                current: `current="page"`,
            },
            fontFamily: {
                sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                indigo: {
                    1000: "#24225e",
                    1100: "#151438",
                    1200: "#070713",
                },
                midnight: {
                    DEFAULT: "#070a13",
                },
            },
        },
        fontSize: {
            "xs": ["0.875rem", "1.25rem"],
            "sm": ["1rem", "1.5rem"],
            "base": ["1.125rem", "1.75rem"],
            "lg": ["1.25rem", "1.75rem"],
            "xl": ["1.5rem", "2rem"],
            "2xl": ["1.875rem", "2.25rem"],
            "3xl": ["2.5rem", "2.5rem"],
            "4xl": ["3rem", "1"],
            "5xl": ["3.75rem", "1"],
            "6xl": ["4.6rem", "1"],
            "7xl": ["6rem", "1"],
            "8xl": ["8rem", "1"],
            "9xl": ["9rem", "1"],
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant("not-first", "&:not(:first-child)")
        }),
    ],
}
