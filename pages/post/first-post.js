import Link from 'next/link'
import Head from 'next/head';
import Image from 'next/image'
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>First Post Page</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <h1>First Post</h1>
        <Image src="/images/profile.jpeg" width={144} height={144} alt="Your Name" />
        <Link href="/">back to home</Link>
    </Layout>
}