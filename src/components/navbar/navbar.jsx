import { useState } from "react";
import { FaBagShopping, FaBars, FaMeta } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="h-12 py-8 flex items-center justify-between px-4 relative max-w-screen-lg mx-auto">
        {/* logo */}
        <a
          href="#"
          className="flex items-center gap-x-2 text-2xl transition-all ease-in-out duration-300 hover:opacity-75"
        >
          <FaMeta className="text-3xl" />
          <span>board</span>
        </a>
        {/* navigation */}
        <ul
          style={isMenuOpen ? { left: "16px" } : { left: "-140%" }}
          className="absolute top-full left-4 bg-white text-black p-5 rounded-xl w-60 flex flex-col gap-y-4 transition-all ease-in-out duration-300 md:static md:flex-row md:w-auto md:gap-y-0 md:p-0 md:bg-transparent md:text-white md:gap-x-6"
        >
          <li>
            <a href="#" className="capitalize transition-all ease-in-out duration-300 hover:opacity-75 md:uppercase">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="capitalize transition-all ease-in-out duration-300 hover:opacity-75 md:uppercase">Apps & Games</a>
          </li>
          <li>
            <a href="#" className="capitalize transition-all ease-in-out duration-300 hover:opacity-75 md:uppercase">features</a>
          </li>
          <li>
            <a href="#" className="capitalize transition-all ease-in-out duration-300 hover:opacity-75 md:uppercase">Support</a>
          </li>
          <li>
            <a href="#" className="capitalize transition-all ease-in-out duration-300 hover:opacity-75 md:uppercase">about</a>
          </li>
        </ul>
        <div>
          {/* cart */}
          <button className="text-2xl transition-all ease-in-out duration-300 hover:opacity-75">
            <FaBagShopping />
          </button>
          {/* bar for mobile ony */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-6 text-2xl md:hidden"
          >
            {isMenuOpen ? <RiCloseLargeFill /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
