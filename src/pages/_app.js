import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${plusJakarta.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
