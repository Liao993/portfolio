import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  return (
    <div className=" hidden lg:flex fixed flex-col top-[35%] left-0 pr-4">
      <ui className="list-none">
        <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-500 ml-[-100px] hover:ml-[-10px] duration-300 ">
          <a
            href="/"
            className="flex justify-between items-center w-full text-xl text-gray-30"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300 ">
          <a
            href="/"
            className="flex justify-between items-center w-full text-xl text-gray-100"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300 ">
          <a
            href="/"
            className="flex justify-between items-center w-full text-xl text-gray-30"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#D4AF37] ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            href="/"
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
