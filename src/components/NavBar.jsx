import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
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
        <li className="py-6 text-4xl text-white">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl text-white">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl text-white">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl text-white">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl text-white">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ui>
    </div>
  );
};

export default NavBar;
