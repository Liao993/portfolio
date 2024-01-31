import { projects } from "../data/data";

const Work = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-slate-900"
    >
      <div className="mx-auto flex flex-col justify-center items-center w-full h-full">
        {/*Skills Containers */}

        <div className=" max-w-[1080px] w-full  px-4 pb-8 sm:text-center text-4xl font-bold">
          <p className=" border-orange-500 border-b-4 inline">Projects</p>
          <p className="pt-6 text-xl sm:text-2xl">Check out my recent work</p>
        </div>

        {/*Project Container */}
        <div className="max-w-[1080px] grid  md:grid-cols-2 gap-4">
          {/*Grid Items*/}

          {projects.map((item) => (
            <div
              style={{ backgroundImage: item.image }}
              key={item.id}
              className="relative w-[500px] h-[300px] shadow-lg shadow-[#dfc278] mx-auto flex items-center justify-center  group container rounded-md"
            >
              {/*Hover Effect */}

              <div className="opacity-0 group-hover:opacity-100">
                {/*Tags */}
                <div className="absolute top-0 left-0 mt-4 ml-4 flex flex-row gap-2">
                  {item.tags.map((tag, index) => (
                    <div
                      key={index}
                      className={`rounded-lg ${
                        index === 0
                          ? "bg-orange-600"
                          : index === 1
                          ? "bg-yellow-600"
                          : "bg-green-600"
                      } text-gray-700 p-2`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                {/*Project Names*/}
                <div className="basis-1/3">
                  <div className="text-center text-xl font-bold text-white tracking-wider">
                    {item.name}
                  </div>
                  <div className="text-center pt-8">
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-2  m-2 text-lg font-bold bg-white text-gray-700">
                        Demo
                      </button>
                    </a>
                    <a href={`${item.live}`}>
                      <button className="text-center rounded-lg px-4 py-2  m-2 text-lg font-bold bg-white text-gray-700">
                        Code
                      </button>
                    </a>
                  </div>
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
