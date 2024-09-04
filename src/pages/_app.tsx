import { AppProps } from "next/app";
import { SWRConfig } from "swr/_internal";
import localFont from "next/font/local";
import "@/styles/globals.css";

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


export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig value={{
            fetcher: (url: string) => fetch(`/api${url}`).then((res) => res.json())
        }}>
            <main className={`${textFont.variable} ${displayFont.variable} font-text`}>
                <Component {...pageProps} />
            </main>
        </SWRConfig>
    )
}