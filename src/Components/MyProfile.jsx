import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loader from "./Loader";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContext);

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until user is available
    if (!user?.email) return;

    setLoading(true);

    fetch(
      `https://online-learning-platform-server-seven.vercel.app/users?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Backend returns an array
        setProfile(data?.[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user?.email]);

  // Loading state
  if (!user || loading) return <Loader />;

  // No profile found
  if (!profile) {
    return (
      <p className="text-center text-red-500 mt-10">
        Profile not found
      </p>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="my-16">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile.photoURL || "/default-avatar.png"}
            alt={profile.displayName}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-400"
          />
        </div>

        {/* Name */}
        <h2 className="text-center text-2xl font-semibold mt-4 text-blue-900">
          {profile.displayName}
        </h2>

        {/* Email */}
        <p className="text-center mt-2 text-blue-800">
          {profile.email}
        </p>

        {/* Role */}
        <p className="text-center text-gray-400 mt-2 text-lg">
          {profile.role || "User"}
        </p>

        {/* Edit Button */}
        <div className="flex justify-center mt-4">
          <Link   to={`/dashboard/updateprofile/${profile._id}`} className="btn bg-linear-to-r from-blue-900 to-blue-400 text-white rounded-xl px-6">
            Edit Profile
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
