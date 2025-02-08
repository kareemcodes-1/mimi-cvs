import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Make sure to use "react-router-dom" instead of "react-router"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full z-[1000] lg:mt-[-1.5rem] mt-[-.5rem] px-[1.5rem]">
      <nav className="flex items-center lg:justify-normal justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="./logo-result.png"
            alt="Logo"
            className="lg:w-[10rem] lg:h-[10rem] w-[3rem] h-[6rem] lg:object-contain object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="lg:flex hidden items-center gap-[2rem] text-[#98623C]">
          <Link to={"/"} className="text-[#98623C]">Home</Link>
          <Link to={"/about"} className="text-[#98623C]">About</Link>
          <Link to={"/services"} className="text-[#98623C]">Services</Link>
          <Link to={"/works"} className="text-[#98623C]">Our Works</Link>
          <Link to={"/contact"} className="text-[#98623C]">Contact Us</Link>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={30} className="text-[#98623C]" /> : <Menu size={30} className="text-[#98623C]" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#98623C] text-white shadow-md flex flex-col gap-4 p-6 lg:hidden">
            <Link to={"/"} className="text-white" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to={"/about"} className="text-white" onClick={() => setIsOpen(false)}>About</Link>
            <Link to={"/services"} className="text-white" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to={"/works"} className="text-white" onClick={() => setIsOpen(false)}>Our Works</Link>
            <Link to={"/contact"} className="text-white" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
