import "@/styles/globals.css";
import Head from "next/head";
import Layout from "./Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Web Journal</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
