import { SiCoffeescript } from "react-icons/si";
import { Link } from "react-scroll";
import Button from "../layOut/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  function HandleChange() {
    setMenu(!menu);
  }

  function CloseMenu(){
    setMenu(false)
  }
  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className="text-xl font-semibold">myCoffee</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={2000}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Review
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <Button title="Login" />
          </div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={HandleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={HandleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
            onClick={CloseMenu}
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
            onClick={CloseMenu}

          >
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
            onClick={CloseMenu}

          >
            About Us
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
            onClick={CloseMenu}

          >
            Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={2000}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
            onClick={CloseMenu}

          >
            Review
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <div className=" flex items-center justify-center cursor-pointer">
            <Button title="Login"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

