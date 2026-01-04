import React from 'react';
import { FaAward, FaHandshake, FaLightbulb, FaRocket, FaThumbsUp, FaTools, FaUsers } from 'react-icons/fa';


const AboutUs = () => {
    return (
        <div className="w-10/12 mx-auto my-16">
            <title>eLearning-AboutUs</title>
            <section className="grid md:grid-cols-2 gap-10 items-center">

<h2 className="text-xl font-semibold text-blue-900 dark:text-blue-400">About eLearning</h2>
<p className="text-gray-500 text-justify dark:text-gray-300">
Welcome to our platform, where we are passionate about empowering
individuals to master the world of design and development. We offer
a wide range of online courses designed to equip learners with the
skills and knowledge needed to succeed in the ever-evolving digital
landscape.
</p>

</section>
<hr className='border-gray-300 mt-16'/>



{/* Achievements */}
<section className='mt-16'>
<h3 className='font-semibold text-blue-900 mb-3  text-xl dark:text-blue-400'>Achievements</h3>
<p className="text-gray-500 mb-10 dark:text-gray-300">
Our commitment to excellence has led us to achieve significant
milestones along our journey.
</p>


<div className="grid md:grid-cols-2 gap-6">

  <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="text-blue-900 text-xl mb-3">
      <FaUsers />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Trusted by Thousands</h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      Successfully served thousands of students worldwide, helping them unlock their potential.
    </p>
  </div>

  <div className="bg-white dark:bg-black dark:border-2  rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="text-blue-900 text-xl mb-3">
      <FaAward />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Award-Winning Courses</h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      Recognized for quality, depth, and effective teaching methodologies.
    </p>
  </div>

  <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition ">
    <div className="text-blue-900 text-xl mb-3">
      <FaThumbsUp />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Positive Student Feedback</h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      Consistently high satisfaction ratings from our learners.
    </p>
  </div>

  <div className="bg-white dark:bg-black dark:border-2  rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="text-blue-900 text-xl mb-3">
      <FaHandshake />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Industry Partnerships</h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      Collaborations with industry leaders to keep content up to date.
    </p>
  </div>

</div>



</section>









<section className='mt-16'>
<h3 className='font-semibold text-blue-900 mb-3  text-xl dark:text-blue-400'>Goals</h3>
<p className="text-gray-500 mb-10 dark:text-gray-300">
our goal is to empower individuals from all backgrounds
to thrive in the world of development.
</p>


<div className="grid md:grid-cols-2 gap-6">

  <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="text-blue-900 text-xl mb-3">
      <FaTools />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
      Practical Skills
    </h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      Hands-on, industry-relevant courses designed for real-world success.
    </p>
  </div>

  <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="text-blue-900 text-xl mb-3">
      <FaLightbulb />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
      Creative Problem-Solving
    </h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      Encouraging innovative thinking and confidence in tackling challenges.
    </p>
  </div>

  <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="text-blue-900 text-xl mb-3">
      <FaUsers />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
      Community & Collaboration
    </h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      A supportive learning environment where learners connect and grow.
    </p>
  </div>

  <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="text-blue-900 text-xl mb-3">
      <FaRocket />
    </div>
    <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
      Stay Ahead of the Curve
    </h4>
    <p className="text-gray-500 text-sm dark:text-gray-300">
      Continuously updated content to match industry trends.
    </p>
  </div>

</div>


</section>

            
        </div>
    );
};

export default AboutUs;