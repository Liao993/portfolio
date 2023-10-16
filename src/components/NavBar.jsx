import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex items-center justify-between px-4 bg-orange-500">
      <div>
        <img src="" alt="" />
      </div>
      {/* menu */}
      <div>
        <ui className="hidden md:flex list-none text-black text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ui>
      </div>

      {/*Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav === false ? (
          <FaBars size={30} />
        ) : (
          <FaTimes size={30} color="white" />
        )}
      </div>

      {/*Mobile Menu */}

      <ui
        className={
          nav === false
            ? "hidden"
            : "absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-slate-900 list-none"
        }
      >
        <li className="py-6 text-4xl text-white">Home</li>
        <li className="py-6 text-4xl text-white">About</li>
        <li className="py-6 text-4xl text-white">Skills</li>
        <li className="py-6 text-4xl text-white">Works</li>
        <li className="py-6 text-4xl text-white">Contact</li>
      </ui>
    </div>
  );
};

export default NavBar;
