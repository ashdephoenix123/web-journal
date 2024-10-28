import React from "react";
import Header from "@/components/Header";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header className={plusJakarta.className} />
      <main className={`${plusJakarta.className} pt-[128px] mx-5`}>
        {children}
      </main>
      <Footer className={plusJakarta.className} />
    </div>
  );
};

export default Layout;
