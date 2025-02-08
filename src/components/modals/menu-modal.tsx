
import { createPortal } from "react-dom";


const MenuModal = ({
  closeModal,
  openMenuModal,
}: {
  closeModal: () => void;
  openMenuModal: boolean;
}) => {



  return createPortal(
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-[100] transform transition-transform duration-300 ${
        openMenuModal ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="">
          <div
            className="absolute right-[1rem] top-[1rem] text-[2rem] cursor-pointer bebas"
            onClick={closeModal}
          >
            CLOSE
          </div>
        </div>
      <div className="flex items-start flex-col p-[1rem] mt-[10rem] gap-[1rem]">
          <ul className="flex flex-col text-[3rem]">
               <li className="overflow-hidden"><a href="/" className="nav-links">HOME</a></li>
               <li className="overflow-hidden"><a href="/orders" className="nav-links">ABOUT</a></li>
               <li className="overflow-hidden"><a href="/wishlists" className="nav-links">SERVICES</a></li>
          </ul>
      </div>
    </div>,
    document.body
  );
};

export default MenuModal;
