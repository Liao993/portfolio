import { HiArrowNarrowRight } from "react-icons/hi";
import Social from "./Social";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-900">
      <Social />
      <div className="max-w-[960px] flex flex-col mx-auto justify-center px-8 h-full">
        <p className="text-2xl font-bold text-orange-500">My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Henry Liao
        </h1>
        <p className="max-w-[500px] pt-2 text-2xl font-bold text-orange-300">
          I am a full-stack developer, specializing in building responsive
          full-stack web application
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-5  flex items-center  hover:bg-orange-500 hover:border-orange-500 duration-300 ">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={18} className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
