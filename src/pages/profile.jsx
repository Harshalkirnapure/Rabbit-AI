import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/domain');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10 min-h-screen">
      {/* progress bar */}
      <div className="w-full max-w-md">
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <p className="text-center">
            <b>
              Building in progress... <span className="text-purple-600">0%</span>
            </b>
          </p>
          <div
            style={{
              width: '100%',
              height: '10px',
              marginTop: '15px',
              backgroundColor: '#D9D9D9',
              borderRadius: '5px',
            }}
          >
            <div style={{ width: '0%', height: '10px', borderRadius: '5px' }}></div>
          </div>
        </div>

        {/* Header */}
        <p className="text-sm text-gray-500 mb-1">Step 1 of 6</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Enter all your profile details.
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          This will be the name of your Rabbit AI workspace - choose something that your team & candidates will recognise.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          {/* Profile Picture Upload */}
          <div className="mt-6 mb-4">
            <p className="text-sm text-gray-600 mb-2">Upload profile picture</p>
            <div className="relative w-20 h-20">
              {/* Show uploaded image or placeholder */}
              {formData.profilePic ? (
                <img
                  src={URL.createObjectURL(formData.profilePic)}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border border-gray-300"
                />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                  alt="profile placeholder"
                  className="w-full h-full rounded-full object-cover border border-gray-300"
                />
              )}
              {/* File input positioned on top of the image */}
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
