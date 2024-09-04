import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

// use custom local fonts
const textFont = localFont({
    src: "../../public/fonts/SF-Pro-Text-Medium.otf",
    variable: "--sf-pro-text-medium"
})

const displayFont = localFont({
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

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={`${textFont.variable} ${displayFont.variable} font-text`}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </main>
    )
}