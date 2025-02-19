import { useEffect } from "react"
import Layout from "./layout";
import Lenis from "lenis";
import { Link } from "react-router";
import { Badge } from "./components/ui/badge";
import { useState} from 'react';
import { motion } from 'framer-motion';
import MarqueeLogos from "./components/marquee-logos";
import About from "./components/about";
import BookNow from "./components/book-now";
import Works from "./components/works";
import Testimonials from "./components/testimonials";



function App() {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);

  const [currentText, setCurrentText] = useState("UNIBEN");
  const texts = ["UNIBEN", "JAMB", "WAEC", "NYSC"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(prevText => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    
    <Layout>
        <section className="home section lg:mt-[10rem] mt-[7rem]">
            <div className="text-center flex items-center justify-center flex-col">
                <Badge className={'pill'}><span className="text-[#6056ff]">✦</span>Mimi CVS is now live</Badge>
                 <h1 className="lg:text-[5rem] text-[3rem] lg:w-[1000px] font-medium">Verify your <motion.span 
        key={currentText} 
        className="text-[#6056ff]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} 
      >
        {currentText}
      </motion.span>  Certificate in one place</h1>
                 <p className="text-[#868a97]">Automate and generate instant background reports on prospective and existing employees.</p>
                 <Link className="btn mt-[1.2rem] !p-[1rem] lg:w-[15%]">
                     Get Started
                 </Link>
            </div>
        </section>
        <MarqueeLogos />
        <About />
        <Works />
        <Testimonials />
        <BookNow />
    </Layout>
  )

}

export default App
