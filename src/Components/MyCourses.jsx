import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import CourseCard from './CourseCard';

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




    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-10 pb-10 my-20 '>
        
         {courses.map(course => <CourseCard key={course._id} course={course}/>)}

       </div>
        </div>
    );
};

export default MyCourses;