import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";

import GitHub from "../assets/github.png";
import AWS from "../assets/aws.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-900 text-gray-300">
      <div className="max-w-[960px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/*Skills Containers */}
        <div className="w-full grid grid-cols-2 gap-8 px-4 pb-8">
          <div className="sm:text-right text-4xl font-bold">
            <p className="  border-orange-500 border-b-4 inline">Experience</p>
          </div>
          <div></div>
          <p className=" sm:text-right text-lg sm:text-xl">
            There are the technologies I worked with
          </p>
        </div>
        {/*Tool Image Containers */}
        <div className="max-w-[960px] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={HTML} alt="HTML Icon" className="w-30 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={CSS} alt="CSS Icon" className="w-30 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={JavaScript} alt="JS Icon" className="w-30 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={ReactImg} alt="React Icon" className="w-30 mx-auto" />
            <p className="my-4">ReactImg</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={Node} alt="Node Icon" className="w-30 mx-auto" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={GitHub} alt="GitHub Icon" className="w-30 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={Mongo} alt="Mongo Icon" className="w-30 mx-auto" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
            <img src={AWS} alt="AWS Icon" className="w-30 mx-auto" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
