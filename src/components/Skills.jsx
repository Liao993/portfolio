import { skills } from "../data/data";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-900 text-gray-300">
      <div className="mx-auto flex flex-col items-center justify-center w-full h-full">
        {/*Skills Containers */}

        <div className="max-w-[960px] w-full px-4 pb-8 sm:text-center text-4xl font-bold">
          <p className="  border-orange-500 border-b-4 inline">Skills</p>

          <p className="pt-6 text-xl sm:text-2xl">
            There are the technologies I worked with
          </p>
        </div>

        {/*Tool Image Containers */}

        <div className="max-w-[960px] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((item) => (
            <div
              key={item.id}
              className="shadow-md shadow-[#040c16] hover:scale-125 duration-500"
            >
              <img src={item.src} alt={item.alt} className="w-20 mx-auto" />
              <p className="my-4">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
