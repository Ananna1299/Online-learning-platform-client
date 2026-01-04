import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({course}) => {
    //console.log(course)
    const {_id,title,image,price,duration,category } = course;
    return (
    //   <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    //   <figure className="h-52 overflow-hidden p-1 ">
    //     <img
    //       src={image}
    //       alt={title}
    //       className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
    //     />
    //   </figure>
    //   <div className="card-body flex flex-col ">
    //     <h2 className="card-title text-blue-900 dark:text-blue-400">{title}</h2>
    //     <div className="text-blue-900 font-semibold"><span className='text-blue-600 dark:text-blue-400'>{category}</span> </div>
    //     <div className="flex justify-between items-center ">
    //       <p className='text-xs text-blue-900 dark:text-blue-400'><span className='font-bold'> </span>${price}</p>
    //       <p className='text-xs text-blue-900 text-end dark:text-blue-400'><span className='font-bold'>Duration: </span>{duration}</p>
    //     </div>
        
       
    //     <div className="card-actions justify-between items-center mt-4">
    //       <div className="flex gap-4 text-sm text-base-content/60">
    //       </div>
    //       <div className="mt-auto flex justify-end">


    //         <Link to={`/course-details/${_id}`} className="btn justify-end bg-linear-to-r from-blue-900 to-blue-400 py-3 text-white rounded-xl">View Details</Link>

    //       </div>
          
    //     </div>
    //   </div>
    // </div>



    <div className="card h-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      <figure className="h-64 overflow-hidden p-1">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      
      <div className="card-body flex flex-col h-full">
        
        <h2 className="card-title text-blue-900 dark:text-blue-400">
          {title}
        </h2>

        <div className="text-blue-900 font-semibold">
          <span className="text-blue-600 dark:text-blue-400">
            {category}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs text-blue-900 dark:text-blue-400">
            ${price}
          </p>
          <p className="text-xs text-blue-900 dark:text-blue-400">
            <span className="font-bold">Duration: </span>{duration}
          </p>
        </div>

        
        <div className="mt-auto flex justify-end ">
          <Link
            to={`/course-details/${_id}`}
            className="btn bg-linear-to-r from-blue-900 to-blue-400 text-white rounded-xl"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
    );
};

export default CourseCard;

