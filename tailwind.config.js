function useVar(name) {
    return `var(--${name})`;
}

module.exports = {
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: useVar("background"),
                backgroundInverse: useVar("background-inverse"),
                primary: useVar("primary"),
                backgroundDark: useVar("background-dark"),
                primaryDark: useVar("primary-dark"),
                backgroundLight: useVar("background-light"),
                primaryLight: useVar("primary-light"),
                fontColor: useVar("font-color"),
                fontColorDark: useVar("font-color-dark"),
                fontColorLight: useVar("font-color-light"),
                fontColorInverse: useVar("font-color-inverse"),
                fontColorInverseDark: useVar("font-color-inverse-dark"),
                fontColorInverseLight: useVar("font-color-inverse-light"),
                reddo: "#ff0000",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    content: [
        "components/**/*.{vue,ts}",
        "layouts/**/*.vue",
        "pages/**/*.vue",
        "composables/**/*.{js,ts}",
        "plugins/**/*.{js,ts}",
        "App.{js,ts,vue}",
        "app.{js,ts,vue}",
    ],
}
