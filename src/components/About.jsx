const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-900 text-gray-300">
      <div className="mx-auto w-full h-full flex flex-col justify-center items-center">
        <div className="max-w-[960px] w-full px-4 pb-8 sm:text-center text-4xl font-bold">
          <p className=" border-orange-500 border-b-4 inline">About</p>
        </div>

        <div className="max-w-[960px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I am Henry Liao, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className="text-lg">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
