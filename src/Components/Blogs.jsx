import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { Link } from 'react-router';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch local JSON file
    fetch('/blog.json') // make sure the path is correct
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      });
  }, []); // <- empty dependency array ensures this runs only once

  console.log(blogs);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-10/12 mx-auto py-16">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">
        Skill-Enhancing Blogs
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{blog.title}</h3>
            <p className="text-gray-700 mb-3 text-justify">{blog.content}</p>
            <p className="text-sm text-gray-500">By {blog.writer}</p>
          </div>
        ))}
      </div>
      <Link className="btn mt-10 bg-linear-to-r from-blue-900 to-blue-400 py-3 text-white rounded-xl"
                  to="/">
                  Back to Home
                </Link>
    </div>
  );
};

export default Blogs;
