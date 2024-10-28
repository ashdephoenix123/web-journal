import { libre } from "@/app/fonts/fonts";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mb-24 text-center">
        <h1
          className={`${libre.className} leading-snug text-5xl lg:text-6xl mb-12`}
        >
          Get In Touch With Us
        </h1>
        <p className="lg:w-1/3 mx-auto">
          Contact
          <span className="bg-white px-2 text-black font-semibold tracking-wide mx-1 italic">
            Web Journal
          </span>
          for expert blogging insights and strategies in Siliguri, WB.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
