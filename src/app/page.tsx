import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

/**
 * The main entry point for the home page.
 * This component orchestrates the layout of the landing page by importing and
 * arranging the various section components.
 * The <main> tag is used for the primary content of the document.
 * 
 * @returns {JSX.Element} The fully assembled home page.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}