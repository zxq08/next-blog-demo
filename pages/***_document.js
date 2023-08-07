import { Html, Head, NextScript, Main } from 'next/document'
// import AOS from 'aos'
// import 'aos.css'
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            </Head>
            <body>

                <Main>

                </Main>
                <Script src="https://unpkg.com/aos@next/dist/aos.js"
                    strategy="lazyOnload"
                    onLoad={() => {
                        console.log(`AOS loaded correctly === `)//, AOS)
                        // AOS.init()  AOS
                    }}
                ></Script>
                <Script>
                </Script>
            </body>
        </Html >
    )
}