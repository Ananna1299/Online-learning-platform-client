import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({course}) => {
    console.log(course)
    const {_id,title,image,price,duration,category } = course;
    return (
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-52 overflow-hidden p-1 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-xl object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-900">{title}</h2>
        <div className="text-blue-900 font-semibold">Category: <span className='text-blue-600'>{category}</span> </div>
        <div className="flex justify-between items-center ">
          <p className='text-xs text-blue-900'><span className='font-bold'>price: </span>${price}</p>
          <p className='text-xs text-blue-900 text-end'><span className='font-bold'>Duration: </span>{duration}</p>
        </div>
        
       
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/60">
          </div>
          <Link to="" className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 text-white rounded-full">View Details</Link>
        </div>
      </div>
    </div>
    );
};

export default CourseCard;

