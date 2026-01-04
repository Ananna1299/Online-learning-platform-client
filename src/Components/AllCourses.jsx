import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Loader from "./Loader";

const AllCourses = () => {
  
  const [loading, setLoading] = useState(false);
const [courses,setCourses]=useState([])
const [totalCouese,setTotalCourse]=useState(0)
  const [totalPage,setTotalPage]=useState(0)
    const [currentPage,setCurrentPage]=useState(0)
    const [sort,setSort]=useState("")
     const [order,setOrder]=useState("")
     const [search,setSearch]=useState("")
     const [serviceType, setServiceType] = useState("");
    const limit=5;


    const categories = [
  "Cloud Computing",
  "Web Development",
  "Cybersecurity",
  "App Development",
  "Artificial Intelligence",
  "Data Science",
  "Design",
  "Marketing",
  "Finance",
  "Multimedia",
  "Business"
];


useEffect(()=>{
  fetch(`https://online-learning-platform-server-seven.vercel.app/courses?limit=${limit}&skip=${limit*currentPage}&sort=${sort}&order=${order}&search=${search}&type=${serviceType}`)
  .then(res=>res.json())
        .then(data=>{
          //console.log(data.course)
          setCourses(data.course)
          setTotalCourse(data.total)
          const page=Math.ceil(data.total /limit)
          setTotalPage(page)

        })
},[currentPage,order,sort,search,serviceType])

const handleSort=(e)=>{
  const arr=e.target.value.split("-")
  console.log(arr)
        setSort(arr[0])
        setOrder(arr[1])
}


const handleSearch=(e)=>{
        const searchText=e.target.value;
        //console.log(searchText)
        setSearch(searchText)
    }
  

  return (
    <div className="w-10/12 mx-auto my-16">
      <title>eLearning-All-courses</title>

      <div>
        <div className="text-xl mt-6 mb-10 font-semibold text-blue-900">
          {" "}
          All Courses
        </div>

        <div className="mb-10 flex flex-col lg:flex-row lg:justify-between gap-5">
         {/* sort */}
          <select onChange={handleSort} className="select bg-white dark:bg-black">
            <option selected disabled={true}>
              Sort by Price
            </option>
            <option value={"price-desc"}>Price : High - Low</option>
            <option value={"price-asc"}>Price : Low - High</option>
            
          </select>


         {/* search */}
          <form>
          <label className="input max-w-[300px] w-[300px] input-primary">
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
            <input  onChange={handleSearch} type="search" placeholder="Search by title" />
          </label>
        </form>

        {/* filter */}
        <fieldset className="fieldset w-64 ">

                <select
            className="select select-bordered mb-4" defaultValue=""
            onChange={(e) => setServiceType(e.target.value)}
            >
            <option value="" disabled>Select Category</option>
            {
              categories.map((u,i)=> <option key={i} value={u}>{u}</option>)
            }
            </select>

            </fieldset>

        </div>

        

        
      </div>

      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10 pb-10 mb-10">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}




      <div className='my-5  px-8 flex flex-wrap justify-center'>
        {
            currentPage>0 && <button className='bg-base-300 btn text-blue-900 mr-4 dark:text-white' onClick={()=>setCurrentPage(currentPage-1)}>prev</button>
        }
        
        { 
           [...Array(totalPage).keys()].map((i)=>(
            <button
            onClick={()=>setCurrentPage(i)}
             className={`btn  mr-4 ${ i === currentPage ? "bg-blue-900 text-white" : "bg-base-300"}` }>
                {i}
            </button>
           ))
            
        }

       {
            currentPage<totalPage-1 && <button className='bg-base-300 btn dark:text-white text-blue-900 mr-4' onClick={()=>setCurrentPage(currentPage+1)}>next</button>
        }
    </div>
    </div>
  );
};

export default AllCourses;