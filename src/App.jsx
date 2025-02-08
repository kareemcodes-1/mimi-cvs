import { useEffect } from "react"
import Hero from "./components/hero"
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
import Collections from "./components/collections"
import Layout from "./layout"
import Navbar from "./components/navbar";
import MarqueeCTA from "./components/marquee-cta";
import {Services} from "./components/services";
import About from "./components/about";
import FAQ from "./components/faq";
import Testimonials from "./components/testimonials";
import BookNow from "./components/book-now";


function App() {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);


  return (
    
    <Layout>
        <div className="bg-[#FFE4C4]">
        <Navbar />
        <Hero />
        </div>
        <MarqueeCTA />
        <About />
        <FAQ />
        <Services />
        <Testimonials />
        <BookNow />
         {/* <Collections /> */}
    </Layout>
  )

}

export default App
