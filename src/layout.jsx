import Navbar from './components/navbar'
import Footer from './components/footer'
import { useEffect } from 'react'

const Layout = ({children}) => {

  useEffect(() => {
    const loadChatbaseScript = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {  // Changed 'arguments' to 'args'
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };

        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q;
            }
            return (...args) => target(prop, ...args);
          }
        });
      }

      const onLoad = () => {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "BcJ79RlSgI34JFAuPu441";
        script.domain = "www.chatbase.co";
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    };

    loadChatbaseScript();
    
    // Cleanup: Remove script on component unmount
    return () => {
      const script = document.getElementById("BcJ79RlSgI34JFAuPu441");
      if (script) {
        script.remove();
      }
    };

  }, []);

  return (
    <>
        {/* <Navbar /> */}
             <main>
             {children}
             </main>
        <Footer />
    </>
  )
}

export default Layout