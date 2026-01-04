import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import CourseCard from "./CourseCard";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loader from "./Loader";

const MyCourses = () => {
  const { user } = use(AuthContext);
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setCourse(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loader></Loader>}

  const handleDeleteCourse = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      //console.log(result)
      if (result.isConfirmed) {
        fetch(
          `https://online-learning-platform-server-seven.vercel.app/courses/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your course has been deleted.",
                icon: "success",
              });

              //
              const remainingCourse = courses.filter(
                (course) => course._id !== _id
              );
              setCourse(remainingCourse);
            }
          });
      }
    });
  };

  return (
    // <div className="w-10/12 mx-auto">
    //   <title>My-Added-Courses</title>
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

    //           {/* 3 Buttons Section */}
    //           <div className="card-actions justify-between items-center mt-4">
    //             <div className="flex gap-2 flex-wrap">
    //               <Link
    //                 to={`/course-details/${course._id}`}
    //                 className="btn bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded-full"
    //               >
    //                 View Details
    //               </Link>

    //               <Link
    //                 to={`/dashboard/update/${course._id}`}
    //                 className="btn bg-gradient-to-r from-green-700 to-green-400 text-white rounded-full"
    //               >
    //                 Update
    //               </Link>

    //               <button
    //                 onClick={() => handleDeleteCourse(course._id)}
    //                 className="btn bg-gradient-to-r from-red-700 to-red-400 text-white rounded-full"
    //               >
    //                 Delete
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="my-10  w-10/12 mx-auto">
  <h2 className="text-xl font-semibold  text-center text-blue-900 dark:text-blue-400 mb-10">
    My Courses
  </h2>

  {/* Table */}
  <div className="overflow-x-auto hidden lg:block">
    <table className="table table-zebra w-full">
      <thead className="bg-blue-900  text-white">
        <tr>
          <th>#</th>
          <th>Course Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Duration</th>
          <th>Actions</th>
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
            <td className="font-semibold text-blue-900 dark:text-blue-400">{course.title}</td>
            <td className="text-blue-900 dark:text-blue-400">{course.category}</td>
            <td className="text-blue-900 dark:text-blue-400">${course.price}</td>
            <td className="text-blue-900 dark:text-blue-400">{course.duration}</td>
            <td className="flex gap-2">
              <Link
                to={`/course-details/${course._id}`}
                className="btn btn-sm bg-gradient-to-r from-blue-900 to-blue-400 text-white
                 rounded-xl"
              >
                View
              </Link>
              <Link
                to={`/dashboard/update/${course._id}`}
                className="btn btn-sm bg-gradient-to-r from-green-700 to-green-400 text-white 
                rounded-xl"
              >
                Update
              </Link>
              <button
                onClick={() => handleDeleteCourse(course._id)}
                className="btn btn-sm btn-error text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* CARD VIEW FOR SMALL & MEDIUM SCREENS */}
  <div className="grid gap-4 lg:hidden">
    {courses.map((course) => (
      <div key={course._id} className="card bg-base-100 shadow-lg border">
        <figure className="h-52 overflow-hidden p-1">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-secondary">{course.title}</h3>
          <p><strong>Category:</strong> {course.category}</p>
          <p><strong>Price:</strong> ${course.price}</p>
          <p><strong>Duration:</strong> {course.duration}</p>

          <div className="card-actions justify-end mt-4 flex-wrap gap-2">
            <Link
              to={`/course-details/${course._id}`}
              className="btn btn-sm bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded-full"
            >
              View
            </Link>
            <Link
              to={`/dashboard/update/${course._id}`}
              className="btn btn-sm bg-gradient-to-r from-green-700 to-green-400 text-white rounded-full"
            >
              Update
            </Link>
            <button
              onClick={() => handleDeleteCourse(course._id)}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>





//    
  );
};

export default MyCourses;
