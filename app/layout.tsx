import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { displayFont } from "./_lib/fonts";
import "@/globals.css";

export const metadata: Metadata = {
    title: "dang."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${displayFont.variable} font-display`}>
                <ThemeProvider attribute="class">
                    <main className="max-w-2xl mx-auto pt-48 px-12">{children}</main>
                </ThemeProvider>
            </body>
        </html >
    )
}