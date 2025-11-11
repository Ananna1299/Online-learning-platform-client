import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import CourseCard from './CourseCard';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyCourses = () => {
    const {user} = use(AuthContext)
    const [courses, setCourse] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        fetch(`http://localhost:3000/my-courses?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            
            setCourse(data)
            setLoading(false)
        })

    }, [user])


    if(loading) {
        return <span className="loading loading-dots loading-xl"></span>
    }

    const handleDeleteCourse=(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            //console.log(result)
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/courses/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });

                            // 
                            const remainingCourse = courses.filter(course => course._id !== _id);
                            setCourse(remainingCourse)
                        }
                    })


            }

        })
    }




    return (
        <div className='w-10/12 mx-auto'>
            <title>My-Added-Courses</title>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-10 pb-10 my-20 '>
        
         {courses.map(course => <div key={course._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-52 overflow-hidden p-1 ">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-900">{course.title}</h2>
        <div className="text-blue-900 font-semibold">Category: <span className='text-blue-600'>
            {course.category}</span> </div>
        <div className="flex justify-between items-center ">
          <p className='text-xs text-blue-900'><span className='font-bold'>price: </span>
          ${course.price}</p>
          <p className='text-xs text-blue-900 text-end'><span className='font-bold'>Duration: </span>{course.duration}</p>
        </div>
        
       
                  {/* 3 Buttons Section */}
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex gap-2 flex-wrap">
              <Link
                to={`/course-details/${course._id}`}
                className="btn bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded-full"
              >
                View Details
              </Link>

              <Link
                to={`/dashboard/update/${course._id}`}
                className="btn bg-gradient-to-r from-green-700 to-green-400 text-white rounded-full"
              >
                Update
              </Link>

              <button
               onClick={() => handleDeleteCourse(course._id)}
               
                className="btn bg-gradient-to-r from-red-700 to-red-400 text-white rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
      </div>
    </div>)}

       </div>
        </div>
    );
};

export default MyCourses;