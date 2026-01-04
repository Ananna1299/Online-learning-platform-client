import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

import Swal from "sweetalert2";

const AddCourse = () => {
  const { user } = use(AuthContext);

  const handleform = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      image: e.target.image.value,
      price: parseFloat(e.target.price.value),
      duration: e.target.duration.value,
      category: e.target.category.value,
      description: e.target.description.value,
      isFeatured: e.target.isFeatured.checked,
      added_by: user.email,
    };

    fetch("https://online-learning-platform-server-seven.vercel.app/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your course has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-20 mx-5">
      <title>Add-Course</title>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-lg mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="font-semibold text-blue-900  dark:text-blue-400   text-center mb-6 text-xl">
            New Course
          </h2>
          <form onSubmit={handleform} className="space-y-4">
            {/* title Field */}
            <div>
              <label className="label font-medium text-blue-900 mb-1 dark:text-blue-400">
                Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter title"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label font-medium text-blue-900 mb-1 dark:text-blue-400">
                Category
              </label>
              <input
                type="text"
                name="category"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter category"
              />
            </div>
            {/* price */}
            <div>
              <label className="label font-medium text-blue-900 mb-1 dark:text-blue-400">
                Price
              </label>
              <input
                type=""
                name="price"
                step="0.01"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter price"
              />
            </div>
            {/* Duration */}
            <div>
              <label className="label font-medium text-blue-900 mb-1 dark:text-blue-400">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter duration"
              />
            </div>

            {/* Description */}
            <div>
              <label className="label font-medium text-blue-900 mb-1 dark:text-blue-400">
                Description
              </label>
              <textarea
                name="description"
                required
                rows="4"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[50px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Image*/}
            <div>
              <label className="label font-medium text-blue-900 mb-1 dark:text-blue-400">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* featured */}
            <div className="flex items-center gap-2">
              <label className="label font-medium text-blue-900 mb-1 dark:text-blue-400">
                Is Featured
              </label>
              <input
                type="checkbox"
                name="isFeatured"
                className="checkbox checkbox-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-linear-to-r bg-linear-to-r from-blue-900 to-blue-400"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
