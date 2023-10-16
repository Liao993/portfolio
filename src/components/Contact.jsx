const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen text-gray-300 bg-slate-900 flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="sm:text-center pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or <br />
            shoot me an email @ lhungen@gmail.com
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
