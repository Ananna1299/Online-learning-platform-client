import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import Loader from "./Loader";

const UpdateProfile = () => {
  const { user } = use(AuthContext);

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (!user?.email) return;

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
        setProfile(data?.[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  if (loading) return <Loader />;

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProfile = {
      displayName: e.target.displayName.value,
      photoURL: e.target.photoURL.value,
    };

    fetch(
      `https://online-learning-platform-server-seven.vercel.app/users/${profile._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(updatedProfile),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Profile updated successfully!");
      })
      .catch(() => toast.error("Update failed"));
  };

  return (
    <div className="my-20 mx-5">
      <div className="card border-1 border-blue-400 bg-base-100 w-full max-w-lg mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6">
          <h2 className="font-semibold text-blue-900 text-center mb-6 text-xl">
            Update Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="displayName"
                defaultValue={profile.displayName}
                required
                className="input w-full rounded-full"
              />
            </div>

            {/* Email (read-only) */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                disabled
                className="input w-full rounded-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                defaultValue={profile.photoURL}
                required
                className="input w-full rounded-full"
              />
            </div>

            {/* Role */}
            <div>
              <label className="label font-medium text-blue-900 mb-1">
                Role
              </label>
              <input
                type="text"
                value={profile.role}
                disabled
                className="input w-full rounded-full bg-gray-100"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full mt-6 text-white rounded-xl bg-linear-to-r from-blue-900 to-blue-400"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
