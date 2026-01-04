import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loader from "./Loader";

const MyEnroll = () => {
  const { user } = use(AuthContext);
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Loader></Loader>;
  }
  //console.log(courses);

  return (
    // <div className="w-10/12 mx-auto">
    //   <title>Enroll-Courses</title>
    //   <div className="grid grid-cols-1 md:grid-cols-3  gap-10 pb-10 my-20 ">
    //     {courses.map((course) => (
    //       <div
    //         key={course._id}
    //         className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    //       >
    //         <figure className="h-52 overflow-hidden p-1 ">
    //           <img
    //             src={course.image}
    //             alt={course.title}
    //             className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title text-blue-900">{course.title}</h2>
    //           <div className="text-blue-900 font-semibold">
    //             Category:{" "}
    //             <span className="text-blue-600">{course.category}</span>{" "}
    //           </div>
    //           <div className="flex justify-between items-center ">
    //             <p className="text-xs text-blue-900">
    //               <span className="font-bold">price: </span>${course.price}
    //             </p>
    //             <p className="text-xs text-blue-900 text-end">
    //               <span className="font-bold">Duration: </span>
    //               {course.duration}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>



    <div className="w-10/12 mx-auto my-16">
  <title>Enroll-Courses</title>
  <h2 className="text-xl font-semibold text-center text-blue-900 mb-10">
    Enrolled Courses
  </h2>

  {/* table*/}
  <div className="overflow-x-auto hidden lg:block">
    <table className="table table-zebra w-full">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th>#</th>
          <th>Course Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, idx) => (
          <tr key={course._id}>
            <th className="text-blue-900 dark:text-blue-400">{idx + 1}</th>
            <td>
              <img
                src={course.image}
                alt={course.title}
                className="w-20 h-12 object-cover rounded"
              />
            </td>
            <td className="font-semibold text-blue-900">{course.title}</td>
            <td className="text-blue-900 dark:text-blue-400">{course.category}</td>
            <td className="text-blue-900 dark:text-blue-400">${course.price}</td>
            <td className="text-blue-900 dark:text-blue-400">{course.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* CARD VIEW FOR SMALL & MEDIUM SCREENS */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:hidden">
    {courses.map((course) => (
      <div
        key={course._id}
        className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <figure className="h-52 overflow-hidden p-1">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-900">{course.title}</h2>
          <div className="text-blue-900 font-semibold">
            Category: <span className="text-blue-600">{course.category}</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-blue-900">
              <span className="font-bold">Price: </span>${course.price}
            </p>
            <p className="text-xs text-blue-900 text-end">
              <span className="font-bold">Duration: </span>
              {course.duration}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default MyEnroll;
