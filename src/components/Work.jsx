const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-slate-900">
      <div className="max-w-[960px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/*Skills Containers */}
        <div className="w-full grid grid-cols-2 gap-8 px-4 pb-8">
          <div className="sm:text-right text-4xl font-bold">
            <p className="  border-orange-500 border-b-4 inline">Works</p>
          </div>
          <div></div>
          <p className=" sm:text-right text-lg sm:text-xl">
            Check out my recent work
          </p>
        </div>
        {/*Project Container */}
        <div className="max-w-[960px] grid sm:grid-col-2 md:grid-cols-3 gap-4">
          {/*Grid Items*/}
          <div
            style={{ backgroundImage: `url{$WorkImg}` }}
            className="shadow-lg shadow-[#040c16] mx-auto flex justify-center items-center group container rounded-md"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
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
        </div>
      </div>
    </div>
  );
};

export default Work;
