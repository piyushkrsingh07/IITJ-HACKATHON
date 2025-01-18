import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#76AA64] to-[#4A6F3F] h-screen flex items-center">
      <div className="flex w-full h-[700px] max-w-7xl mx-auto">
      
        <div className="w-[60%] flex flex-col justify-center px-8">
          <h1 className="text-4xl md:text-5xl font-normal text-white leading-tight">
            Welcome to <span className="text-[#8EC97A]">VedAmrut</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white">
            <span className="font-bold">Ancient Wisdom</span>,{' '}
            <span className="italic text-[#8EC97A]">Modern Technology</span>: Tailored Ayurvedic Insights Through Video and Image Recognition
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-300">
              Diagnose
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700">
              Get Started
            </button>
          </div>
          <div className="mt-10">
            <div className="flex space-x-2">
              <div className="text-white text-5xl font-semibold">Health.</div>
              <div className="text-black text-5xl font-semibold">Tradition.</div>
              <div className="text-white text-5xl font-semibold">Belief.</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[40%] relative">
          <div class=" overflow-hidden w-[100%] h-[100%] border-l-[50%] border-b-[50%]  md:w-[600px] md:h-[600px] hidden md:block mt-[-13px] overflow-x-hidden  z-2 rounded-b-lg">
            <img
              src="https://ucarecdn.com/c8be99f6-9a9e-477f-9c08-04098fb5329f/-/preview/515x787/"
              alt="Ayurvedic ingredients"
              className="w-full h-full object-cover  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
