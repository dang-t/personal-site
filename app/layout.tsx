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
                    <Header />
                    <main className="px-8">{children}</main>
                </ThemeProvider>
            </body>
        </html >
    )
}