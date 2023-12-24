function useVar(name) {
    return `var(--${name})`;
}

module.exports = {
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: useVar("background"),
                primary: useVar("primary"),
                backgroundDark: useVar("background-dark"),
                primaryDark: useVar("primary-dark"),
                backgroundLight: useVar("background-light"),
                primaryLight: useVar("primary-light"),
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    content: ["./**/*.html", "./**/*.vue", "./**/*.ts"],
}
