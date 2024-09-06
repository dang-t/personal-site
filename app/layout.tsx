import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { textFont, displayFont } from "./_lib/fonts";
import Header from "./_components/Header";
import "@/globals.css";

export const metadata: Metadata = {
    title: "Dang Tran"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${textFont.variable} ${displayFont.variable} font-text`}>
                <ThemeProvider attribute="class">
                    <div id="blur-overlay-top" className="fixed top-0 left-0 bg-gradient-to-t from-transparent to-[--background] backdrop-blur-[1px] w-full h-[44px] mt-[72px] z-10" />
                    <div id="blur-overlay-bottom" className="fixed bottom-0 left-0 bg-gradient-to-t from-[--background] to-transparent backdrop-blur-[1px] w-full h-[64px] z-10" />

                    <Header />
                    <main className="px-8 max-w-4xl mx-auto">{children}</main>
                </ThemeProvider>
            </body>
        </html >
    )
}