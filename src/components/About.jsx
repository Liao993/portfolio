const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-900 text-gray-300">
      <div className="mx-auto w-full h-full flex flex-col justify-center items-center">
        <div className="max-w-[960px] w-full px-4 pb-8 sm:text-center text-4xl font-bold">
          <p className=" border-orange-500 border-b-4 inline">About</p>
        </div>

        <div className="max-w-[960px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right flex flex-col gap-4 text-4xl font-bold">
            <p>Hi, I am Henry Liao.</p>
            <p>Nice to meet you.</p>
          </div>
          <div className="text-lg">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I blend my interests in cuisine,
              exercise, and travel. Through digital solutions, I explore diverse
              flavors, promote active lifestyles, and inspire wanderlust. What
              would you do if you had a software expert available at your
              fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
