const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen  text-gray-300 bg-slate-900">
      <div className="mx-auto flex flex-col justify-center items-center w-full h-full">
        {/*Project Containers */}

        <div className=" max-w-[1080px] w-full  px-4 pb-8 sm:text-center text-4xl font-bold">
          <p className=" border-orange-500 border-b-4 inline">Contact</p>
          <p className="pt-6 text-xl sm:text-2xl">
            <span className="text-bold">Phone : </span> 9031246894
          </p>
          <p className="pt-6 text-xl sm:text-2xl">
            <span className="text-bold">Email: </span> lhungen@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
