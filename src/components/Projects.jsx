import { projects } from "../data/data";

const Work = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-slate-900"
    >
      <div className="mx-auto flex flex-col justify-center items-center w-full h-full">
        {/*Project Containers */}

        <div className="max-w-[1080px] w-full  px-4 pb-8 sm:text-center text-4xl font-bold">
          <p className=" border-orange-500 border-b-4 inline">Projects</p>
          <p className="pt-6 text-xl sm:text-2xl">Check out my recent work</p>
        </div>

        {/* List Container */}
        <div className=" max-w-[1080px] w-full h-full grid  sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {/*Grid Items*/}

          {projects.map((item) => (
            <div
              key={item.id}
              className="mx-auto md:w-[500px] md:h-[300px]  w-[300px] h-[180px]  shadow-lg shadow-[#dfc278]  rounded-md flex flex-col"
            >
              <div className="basis-1/5 flex justify-between items-center text-xs  md:text-sm">
                <div className="grid grid-cols-2 md:grid-cols-4  gap-1  mb-2 ml-1">
                  {item.tags.map((tag, index) => (
                    <div
                      key={index}
                      className={`rounded-lg ${
                        index === 0
                          ? "bg-orange-600"
                          : index === 1
                          ? "bg-yellow-600"
                          : index === 2
                          ? "bg-green-600"
                          : "bg-blue-600"
                      } text-gray-800 text-center p-2`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div>
                  <a
                    href={`${item.live}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg  px-2 py-2 m-2  font-bold bg-white text-gray-700 hover:scale-125">
                      Demo
                    </button>
                  </a>
                  <a
                    href={`${item.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-2 py-2  m-2  font-bold bg-white text-gray-700 hover:scale-125">
                      Code
                    </button>
                  </a>
                </div>
              </div>

              <div className="basis-4/5 group flex justify-center items-center relative overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-0"
                  alt="Item Image"
                />
                {/* Hover Event */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 bg-slate-800 bg-opacity-100 transition-opacity">
                  <p className="text-orange-200 font-bold text-2xl">
                    {item.name}
                  </p>
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
