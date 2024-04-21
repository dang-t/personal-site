import { AppProps } from "next/app"
import { SWRConfig } from "swr/_internal"
import PageLayout from "../layouts/PageLayout"
import "@styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
   return (
      <SWRConfig
         value={{
            fetcher: (url: string) => fetch(`/api${url}`).then((response) => response.json())
         }}
      >
         <PageLayout>
            <Component {...pageProps} />
         </PageLayout>
      </SWRConfig>
   )
}  