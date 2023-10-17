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
        <input
          placeholder="name"
          type="text"
          className="p-2 mb-2 bg-[#ccd6f6]"
        />
        <input
          placeholder="email"
          type="email"
          className="p-2 mb-2 bg-[#ccd6f6]"
        />
        <textarea
          placeholder="message"
          type="text"
          rows={10}
          className="p-2 mb-2 bg-[#ccd6f6]"
        />
        <button className="text-white border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 flex items-center  my-8 mx-auto">
          Let us Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
