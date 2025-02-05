import "@/styles/globals.css";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
		<Layout>
			<link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
			<Component {...pageProps} />
		</Layout>
	);
}
