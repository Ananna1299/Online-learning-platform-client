import React from 'react';
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaUserAlt, FaDownload } from "react-icons/fa";


const HowItWorks = () => {
    return (
        <div className='mt-16'>
          
             <section className="bg-[#1a1b5a] text-white py-20 rounded-xl  ">
      <div className="w-11/12 md:w-10/12 mx-auto text-center">
        
        <h2 className="text-white text-4xl font-semibold mb-16 tracking-wider">
          HOW IT WORKS
        </h2>

        
       
  <div className="grid md:grid-cols-3 gap-12">
  {/* Card 1 */}
  <div className="flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
    <div className="bg-[#fbbf24]/10 p-6 rounded-full mb-6 transition-all duration-300 ease-in-out hover:bg-[#fbbf24]/20">
      <FaUserAlt className="text-[#fbbf24] text-5xl transition-colors duration-300 ease-in-out hover:text-[#fcd34d]" />
    </div>
    <h3 className="text-[#fbbf24] text-lg font-semibold mb-3 uppercase tracking-wide">
      Create an Account
    </h3>
    <p className="text-gray-300 text-sm max-w-xs text-center">
      Sign up easily and start exploring courses right away.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
    <div className="bg-[#fbbf24]/10 p-6 rounded-full mb-6 transition-all duration-300 ease-in-out hover:bg-[#fbbf24]/20">
      <BiSolidCommentDetail className="text-[#fbbf24] text-5xl transition-colors duration-300 ease-in-out hover:text-[#fcd34d]" />
    </div>
    <h3 className="text-[#fbbf24] text-lg font-semibold mb-3 uppercase tracking-wide">
      View Course Details
    </h3>
    <p className="text-gray-300 text-sm max-w-xs text-center">
      Pick the courses that best fits your goals and learning style.
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
    <div className="bg-[#fbbf24]/10 p-6 rounded-full mb-6 transition-all duration-300 ease-in-out hover:bg-[#fbbf24]/20">
      <FaDownload className="text-[#fbbf24] text-5xl transition-colors duration-300 ease-in-out hover:text-[#fcd34d]" />
    </div>
    <h3 className="text-[#fbbf24] text-lg font-semibold mb-3 uppercase tracking-wide">
      Start Learning
    </h3>
    <p className="text-gray-300 text-sm max-w-xs text-center">
      Access materials instantly and begin your learning journey today.
    </p>
  </div>
</div>

      </div>
    </section>
            
        </div>
    );
};

export default HowItWorks;
