import { AppProps } from "next/app";
import { SWRConfig } from "swr/_internal";
import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig value={{
            fetcher: (url: string) => fetch(`/api${url}`).then((res) => res.json())
        }}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </SWRConfig>
    )
}