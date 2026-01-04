import React from 'react';
import { FaBook, FaExclamationTriangle, FaFileContract, FaHandsHelping, FaMoneyCheckAlt, FaUserShield } from 'react-icons/fa';

const TermsAndConditions = () => {
    return (
        <div className='mb-16'>
            <h1 className='font-semibold  mb-10 mt-16 text-xl text-blue-900 dark:text-blue-400'>
        Terms & Conditions
      </h1>





      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-2xl mb-3">
            <FaFileContract />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Introduction</h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            By accessing our platform, you agree to comply with these terms and conditions. Ensure you read them carefully before enrolling in any course.
          </p>
        </div>

        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-2xl mb-3">
            <FaUserShield />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Account Responsibility</h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            Users are responsible for maintaining account security and confidentiality. Any activity under your account is your responsibility.
          </p>
        </div>

        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-2xl mb-3">
            <FaMoneyCheckAlt />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Enrollment Policy</h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            If you enrolled in a course you can not remove the course.
          </p>
        </div>

        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-2xl mb-3">
            <FaBook />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Content & Intellectual Property</h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            All course materials, videos, and resources belong to the platform or instructors. Sharing or copying content without permission is prohibited.
          </p>
        </div>

        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-2xl mb-3">
            <FaExclamationTriangle />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">User Conduct</h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            Users must use the platform responsibly and avoid abusive, offensive, or illegal behavior. Violations may lead to account suspension.
          </p>
        </div>

        <div className="bg-white dark:bg-black dark:border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="text-blue-900 text-2xl mb-3">
            <FaHandsHelping />
          </div>
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Support & Contact</h4>
          <p className="text-gray-500 text-sm dark:text-gray-300">
            If you have questions about these terms, please contact us at 
            <span className="text-blue-600 font-medium"> support@yourplatform.com</span>.
          </p>
        </div>

      </div>
            
        </div>
    );
};

export default TermsAndConditions;