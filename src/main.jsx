import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router";
import AboutPage from './about/page';
import ServicesPage from './services/page';
import ContactPage from './contact/page';
import Works from './works/page';
import ToastProvider from './provider/toast-provider';
// import AboutPage from './about/page.tsx';
// import ServicesPage from './services/page.jsx';
// import ContactPage from './contact/page.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>

          <BrowserRouter>
                   <ToastProvider />
               <Routes>
                   <Route path='/' element={<App />}></Route>
                   <Route path='/about' element={<AboutPage />}></Route>
                   <Route path='/services' element={<ServicesPage />}></Route>
                   <Route path='/works' element={<Works />}></Route>
                   <Route path='/contact' element={<ContactPage />}></Route>
               </Routes>
           </BrowserRouter>
  // </StrictMode>,
)
