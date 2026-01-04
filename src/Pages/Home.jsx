import React, { useEffect } from 'react';
import banner from "../assets/banner.png"
import 'aos/dist/aos.css'; // Import AOS CSS
import Aos from 'aos';
import { Link, useLoaderData } from 'react-router';
import CourseCard from '../Components/CourseCard';
import HowItWorks from '../Components/HowItWorks';
import TopInstructors from '../Components/TopInstructors';
import { motion } from 'framer-motion';
import Reviews from '../Components/Reviews';
import ContactDetails from '../Components/ContactDetails';
import TermsAndConditions from '../Components/TermsAndConditions';


const reviewPromise= fetch('../reviews.json')
    .then(res=>res.json())

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
          <title>eLearning-Home</title>


          {/* Banner Section */}
          <section className="w-full ">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row items-center justify-between h-full mt-16 gap-10">

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
                    className="w-full max-w-md lg:max-w-full h-[300px] lg:h-[80%] object-cover rounded-xl shadow-2xl"
                  />

                  
                  <div className="absolute right-[-10px] bottom-[-25px] bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                    
                    <p className="text-blue-900 text-sm mt-2 font-semibold p-2">
                    Trusted by over 200+  students worldwide.
                    </p>
                  </div>
                </div>

                {/* Right-side content */}
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0 text-center lg:text-left">
                  <motion.h1 
                  initial={{opacity: 0, y:500}}
                  animate={{opacity:1, y:0}}
                  transition={{duration:2}}
                   className="text-2xl md:text-3xl font-bold text-blue-900 italic dark:text-blue-400">
                  eLearning......
                  </motion.h1>
                  <p className="py-6 text-gray-500 max-w-lg mx-auto lg:mx-0 dark:text-gray-300">
                  Learn anytime, anywhere with our online learning platform designed to empower students through expert-led courses, interactive lessons, and real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </section>

        <h2 className='font-semibold  mb-10 mt-16 text-xl text-blue-900 dark:text-blue-400'>Featured Courses</h2>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10  '>
        
         {data.map(course => <CourseCard key={course._id} course={course}/>)}

       </div>
       <HowItWorks></HowItWorks>
       <TopInstructors></TopInstructors>
        <Reviews reviewPromise={reviewPromise}></Reviews>
        <ContactDetails></ContactDetails>


        <section className="bg-base-200 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-10 dark:bg-black dark:border-2">
          <div>
          <h3 className="text-2xl font-bold mb-2 text-blue-900 dark:text-blue-400">
          Together, let's shape the future of digital innovation
          </h3>
          <p className="text-gray-600 dark:text-gray-500">
          Join us on this exciting learning journey and unlock your potential.
          </p>
          </div>
          <Link to="/registration" className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 mr-1 text-white rounded-xl text-sm cursor-pointer">
          Join Now
          </Link>
</section>

<TermsAndConditions></TermsAndConditions>


        


            
        </div>
    );
};

export default Home;