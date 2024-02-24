import { FaGithub, FaLinkedin } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  return (
    <div className=" hidden lg:flex fixed flex-col top-[35%] left-0 pr-4">
      <ui className="list-none">
        {/*
        <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-500 ml-[-100px] hover:ml-[-10px] duration-300 ">
          <a
            href="/"
            className="flex justify-between items-center w-full text-xl text-gray-30"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
  */}
        <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300 ">
          <a
            href="https://github.com/Liao993?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-xl text-gray-200"
          >
            Github <FaGithub size={30} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#D4AF37] ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            href="https://drive.google.com/file/d/1_XpgimMCdfgaL---s7Fts2yaUd1_U8o_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-xl text-gray-30"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ui>
    </div>
  );
};

export default Social;
