import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="my-16">
      <h2 className="font-semibold text-blue-900 mb-10 text-xl dark:text-blue-400">
        Contact Details
      </h2>

      <section className="grid md:grid-cols-2 gap-6">
        {/* Address */}
        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-xl mb-3">
            <FaMapMarkerAlt />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
            Our Address
          </h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            Dhaka, Bangladesh <br />
            eLearning HQ
          </p>
        </div>

        {/* Email */}
        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-xl mb-3">
            <FaEnvelope />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
            Email Us
          </h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            support@elearning.com <br />
            info@elearning.com
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-xl mb-3">
            <FaPhoneAlt />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
            Call Us
          </h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            +880 1234 567 890 <br />
            +880 9876 543 210
          </p>
        </div>

        {/* Working Hours */}
        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-xl mb-3">
            <FaClock />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">
            Working Hours
          </h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            Saturday – Thursday <br />
            9:00 AM – 8:00 PM
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
