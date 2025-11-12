import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateCourse = () => {
  const { id } = useParams();
  //console.log(id)
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(
      `https://online-learning-platform-server-seven.vercel.app/courses/${id}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);

        //console.log(data);
        setLoading(false);
      });
  }, [user, id]);

  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      image: e.target.image.value,
      price: parseFloat(e.target.price.value),
      duration: e.target.duration.value,
      category: e.target.category.value,
      description: e.target.description.value,
      isFeatured: e.target.isFeatured.checked,
    };

    fetch(
      `https://online-learning-platform-server-seven.vercel.app/courses/${course._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
       // console.log(data);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  return (
    <div className="my-20 mx-5">
      <div className="card border border-gray-200 bg-base-100 w-full max-w-lg mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="font-semibold text-blue-900 text-center mb-6 text-xl">
            Update Course Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* title Field */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={course.title}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter title"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={course.category}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter category"
              />
            </div>
            {/* price */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Price
              </label>
              <input
                type=""
                name="price"
                step="0.01"
                defaultValue={course.price}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter price"
              />
            </div>
            {/* Duration */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                defaultValue={course.duration}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter duration"
              />
            </div>

            {/* Description */}
            <div>
              <label className="label font-medium text-blue-900 mb-1 ">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={course.description}
                required
                rows="4"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[50px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Image*/}
            <div>
              <label className="label font-medium text-blue-900 mb-1 ">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                defaultValue={course.image}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* featured */}
            <div className="flex items-center gap-2">
              <label className="label font-medium text-blue-900 mb-1">
                Is Featured
              </label>
              <input
                type="checkbox"
                name="isFeatured"
                defaultValue={course.isFeatured}
                className="checkbox checkbox-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-linear-to-r bg-linear-to-r from-blue-900 to-blue-400"
            >
              Add Model
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
