import LocalFont from "next/font/local";

// custom local fonts
export const textFont = LocalFont({
    src: "../../public/fonts/SF-Pro-Text-Medium.otf",
    variable: "--sf-pro-text-medium"
})

export const displayFont = LocalFont({
    src: [
        {
            path: "../../public/fonts/SF-Pro-Display-Medium.otf",
            style: "normal",
            weight: "400"
        },
        {
            path: "../../public/fonts/SF-Pro-Display-Heavy.otf",
            style: "bold",
            weight: "700"
        }
    ],
    variable: "--sf-pro-display"
})