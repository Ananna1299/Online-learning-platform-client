import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CourseCard from './CourseCard';

const AllCourses = () => {
    const data = useLoaderData();
  const [courses, setCourses] = useState(data)
  const [loading, setLoading] = useState(false)

  const handlefilter=(e)=>{
    e.preventDefault()
    const search_text = e.target.search.value
    console.log(search_text)
    setLoading(true)


    fetch(`http://localhost:3000/filter?search=${search_text}`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      setCourses(data)
      setLoading(false)
    })

  }
  








    return (
        
         <div className='w-10/12 mx-auto '>
            
    <div>
     <div className="text-xl mt-6 mb-3 font-semibold text-blue-900"> _All Courses_</div>
     
     <form onSubmit={handlefilter} className=" mb-10 flex gap-2 ">
       <label className="input rounded-full ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name="search" type="search"  placeholder="Filter by category" />
      </label>
      <button className="btn  bg-linear-to-r from-blue-900 to-blue-400 text-white rounded-full">
        Search</button>
     </form>
            </div>

      {loading? <span className="loading loading-dots loading-xl"></span>:
      <div className="grid grid-cols-1 md:grid-cols-3  gap-10 pb-10 mb-10">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
      }
      
    </div>
    );
};

export default AllCourses;