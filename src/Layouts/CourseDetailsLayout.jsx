import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';

const CourseDetailsLayout = () => {
     //const navigate = useNavigate();
     const { id } = useParams();
     const [course, setCourse] = useState({});
     const [loading, setLoading] = useState(true);
     const { user } = use(AuthContext);
     

     useEffect(() => {
    fetch(`http://localhost:3000/courses/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
       
        //console.log(data);
        setLoading(false);
        
      });
  }, [user, id]);




  const handleEnroll=()=>{
    const enrollData = {
        title: course.title,
        image: course.image,
        price: parseFloat(course.price),
        duration:course.duration,
        category: course.category,
        description: course.description,
        added_by:course.added_by,
        enrolled_by:user.email
    }
    //console.log(enrollData)
    fetch("http://localhost:3000/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrollData),
    })
      .then((res) => res.json())
      .then(data=>{
        if (data.success) {
        toast.success("Successfully enrolled!");
      } else {
        toast.error(data.message || "Already enrolled!");
      }
      })
  }


    if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }
  //console.log(course)



    return (
        <div className='flex flex-col min-h-screen'>
        
        <div className=' flex-1'>
             <div className='w-11/12 mx-auto my-20'>
             <div className="space-y-5">
               <div>
                <img
        className="w-8/12 mx-auto h-[500px] object-cover rounded-2xl"
        src={course.image}
        alt=""
      />

              </div>
      
      <div>
        <h2 className="text-2xl w-8/12 mx-auto font-bold text-blue-900">{course.title}</h2>
        <p className='w-8/12 mx-auto text-justify mt-3'><span className='text-blue-900 
        font-semibold'>Category: </span>{course.category}</p>

        <p className='w-8/12 mx-auto text-justify mt-3'><span className='text-blue-900 
        font-semibold'>Price: </span>${course.price}</p>

        <p className='w-8/12 mx-auto text-justify mt-3'><span className='text-blue-900 
        font-semibold'>Duration: </span>{course.duration}</p>
        

      <p className='w-8/12 mx-auto text-justify my-3'>{course.description}</p>
       
      <div className='w-8/12 mx-auto space-x-3'>
        <Link className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 text-white rounded-full
      "
      to="/">
      
        Back to Home
      </Link>
      <Link onClick={handleEnroll} className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 text-white rounded-full
      "
     >
      
        Enroll Now
      </Link>
      </div>
      </div>

      </div>
     
            
        </div>

        
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CourseDetailsLayout;