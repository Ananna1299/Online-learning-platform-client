import React, { use, useEffect, useState } from 'react';
import Loader from './Loader';
import { AuthContext } from '../Context/AuthContext';
import EnrollBarchart from './EnrollBarchart';


const DasboardNav = () => {
    const [totalCourse,setTotalCourse]=useState(0)
    const [loading,setLoading]=useState(true)
    const { user } = use(AuthContext);
      const [courses, setCourse] = useState([]);
      const [data, setData] = useState([]);
      const [allEnroll, setallEnroll] = useState([]);

    //all courses
    useEffect(()=>{
      fetch(`https://online-learning-platform-server-seven.vercel.app/courses`)
      .then(res=>res.json())
            .then(data=>{
              //console.log(data.course)
              
              setTotalCourse(data.total)
              setLoading(false)
              
    
            })
    },[])


    //all enroll courses
    useEffect(()=>{
      fetch(`https://online-learning-platform-server-seven.vercel.app/all-enroll`)
      .then(res=>res.json())
            .then(data=>{
              //console.log(data.course)
              
              setallEnroll(data)
              setLoading(false)
              
    
            })
    },[])


    //my entoll
    useEffect(() => {
        fetch(
          `https://online-learning-platform-server-seven.vercel.app/my-enroll?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setCourse(data);
            setLoading(false);
          });
      }, [user]);

        //my added
        useEffect(() => {
          fetch(
            `https://online-learning-platform-server-seven.vercel.app/my-courses?email=${user.email}`,
            {
              headers: {
                authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
            });
        }, [user]);

    if (loading){
        return <Loader></Loader>
    }




    
     
    
    return (
        <div className='w-10/12 mx-auto my-16'>
           <div className='mb-10'>
            <p className='text-xl font-semibold  text-center text-blue-900 dark:text-blue-400 mb-10'>Overview</p>
            <div className='flex justify-evenly'>
                <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">Total Courses</h3>
            <span className="text-2xl font-bold text-blue-600">{totalCourse}</span>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">My Enroll Courses</h3>
            <span className="text-2xl font-bold text-blue-600">{courses.length}</span>
            </div>


            <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">My Added Courses</h3>
            <span className="text-2xl font-bold text-blue-600 mb">{data.length}</span>
            </div>

            
            </div>
           </div>

           <div>
             <p className='text-xl font-semibold  text-center text-blue-900 dark:text-blue-400 mb-10'>
                BarChart
             </p>
             <EnrollBarchart allEnroll={allEnroll}></EnrollBarchart>
           </div>


           <div className="overflow-x-auto mt-10">
    <table className="table table-zebra w-full">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th>#</th>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td className="font-semibold text-blue-900 dark:text-blue-400">
            Total Courses
          </td>
          <td className="text-blue-600 font-bold">
            {totalCourse}
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td className="font-semibold text-blue-900 dark:text-blue-400">
            My Enrolled Courses
          </td>
          <td className="text-blue-600 font-bold">
            {courses.length}
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td className="font-semibold text-blue-900 dark:text-blue-400">
            My Added Courses
          </td>
          <td className="text-blue-600 font-bold">
            {data.length}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
            
            
        </div>
    );
};

export default DasboardNav;