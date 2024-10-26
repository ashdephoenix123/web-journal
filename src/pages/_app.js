import "@/styles/globals.css";
import Head from "next/head";
import Layout from "./Layout";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleRouteChangeStart = () => setProgress(30);
    const handleRouteChangeComplete = () => setProgress(100);
    const handleRouteChangeError = () => setProgress(100);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} />
      <Head>
        <title>Web Journal</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
