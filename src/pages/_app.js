import "@/styles/globals.css";
import Layout from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
