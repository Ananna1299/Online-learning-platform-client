import React, { useEffect } from 'react';
import banner from "../assets/banner.png"
import 'aos/dist/aos.css'; // Import AOS CSS
import Aos from 'aos';
import { useLoaderData } from 'react-router';
import CourseCard from '../Components/CourseCard';
import HowItWorks from '../Components/HowItWorks';
import TopInstructors from '../Components/TopInstructors';

const Home = () => {
     const data = useLoaderData()


    //console.log(data)

     useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: false, 
        });
      }, []);
    return (
        <div className="w-10/12 mx-auto">
          {/* Banner Section */}
          <section className="w-full my-6">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row items-center justify-between h-full py-10 gap-10">

                {/* Image container (relative) */}
                <div
                  className="w-full lg:w-2/3 flex justify-center relative"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  data-aos-anchor=".example-selector"
                >
                  <img
                    src={banner}
                    alt="Banner"
                    className="w-full max-w-md lg:max-w-full h-[300px] lg:h-[80%] object-cover rounded-lg shadow-2xl"
                  />

                  {/* Absolute text overlay */}
                  <div className="absolute right-[-10px] bottom-[-25px] bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                    
                    <p className="text-blue-900 text-sm mt-2 font-semibold p-2">
                    Trusted by over 200+  students worldwide.
                    </p>
                  </div>
                </div>

                {/* Right-side content */}
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0 text-center lg:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-blue-900 italic">
                  eLearning......
                  </h1>
                  <p className="py-6 text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Learn anytime, anywhere with our online learning platform designed to empower students through expert-led courses, interactive lessons, and real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </section>

        <h2 className='font-semibold text-blue-900 mb-10 mt-16 text-xl'>_Featured Courses_</h2>
       <div className='grid grid-cols-1 md:grid-cols-3  gap-10 pb-10 mb-10 '>
        
         {data.map(course => <CourseCard key={course._id} course={course}/>)}

       </div>
       <HowItWorks></HowItWorks>
       <TopInstructors></TopInstructors>


        


            
        </div>
    );
};

export default Home;