import { projects } from "../data/data";

const Work = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-slate-900"
    >
      <div className="mx-auto flex flex-col justify-center items-center w-full h-full">
        {/*Skills Containers */}

        <div className=" max-w-[960px] w-full  px-4 pb-8 sm:text-center text-4xl font-bold">
          <p className=" border-orange-500 border-b-4 inline">Projects</p>
          <p className="pt-6 text-xl sm:text-2xl">Check out my recent work</p>
        </div>

        {/*Project Container */}
        <div className="max-w-[960px] grid  md:grid-cols-3 gap-4">
          {/*Grid Items*/}

          {projects.map((item) => (
            <div
              style={{ backgroundImage: `url{$WorkImg}` }}
              key={item.id}
              className="shadow-lg shadow-[#dfc278] mx-auto flex justify-center items-center group container rounded-md"
            >
              {/*Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-center text-xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="text-center pt-8">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-2  m-2 text-lg font-bold bg-white text-gray-700">
                      Demo
                    </button>
                  </a>
                  <a>
                    <button className="text-center rounded-lg px-4 py-2  m-2 text-lg font-bold bg-white text-gray-700">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
