import React from 'react';

const TopInstructors = () => {
    return (
        <div className="w-full pb-10 mb-10 ">
             <h2 className='font-semibold text-blue-900 mb-10 mt-16 text-xl'>_Top Instructors_</h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
    
    {/* Card 1 */}
    <div className="flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
      <h3 className="text-gray-500 text-lg font-medium">
        Charlie Green for <br /> 
        <span className="text-blue-900 font-semibold"> Full-Stack Web Development</span>
      </h3>
      <img
        src="https://i.ibb.co.com/prsvn2C1/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg"
        alt="Newbie Training"
        className="w-40 h-40 object-cover rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      />
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
      <h3 className="text-gray-500 text-lg font-medium">
        Christian Buehner for <br />
        <span className="text-blue-900 font-semibold"> Cloud Computing</span>
      </h3>
      <img
        src="https://i.ibb.co.com/3V5wvYF/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg"
        alt="Senior Advice"
        className="w-40 h-40 object-cover rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      />
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
      <h3 className="text-gray-500 text-lg font-medium">
        Jonas Kakaroto for <br />
        <span className="text-blue-900 font-semibold">"Digital Marketing Mastery</span>
      </h3>
      <img
        src="https://i.ibb.co.com/wZThjt4w/jonas-kakaroto-KIPqvv-TOC1s-unsplash.jpg"
        alt="Every Client"
        className="w-40 h-40 object-cover rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      />
    </div>

  </div>
</div>

    );
};

export default TopInstructors;
