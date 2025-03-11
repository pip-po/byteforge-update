import { Metadata } from "next";
import React from "react";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - ByteForge",
  description:
    "Get in touch with ByteForge for business inquiries, partnerships, or support.",
};

const ContactPage = () => {
  return (
    <main>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
