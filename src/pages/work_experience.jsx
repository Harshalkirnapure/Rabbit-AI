import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const WorkExperience = () => {
  const [experiences, setExperiences] = useState(["", ""]);
  const navigate=useNavigate();

  const addExperience = () => {
    setExperiences([...experiences, ""]);
  };

  const handleChange = (index, value) => {
    const updated = [...experiences];
    updated[index] = value;
    setExperiences(updated);
  };

  const getToJobPage=(e)=>{
     e.preventDefault();
      navigate('/job_preference');
  }

  return (
    <div className="flex flex-col items-center gap-4 p-10 min-h-screen">

      {/* progress bar */}
      <div className="w-full max-w-md">
        <div style={{width:"100%",marginBottom:"20px"}}>
        <p className="text-center"><b>Building in progress... <span className="text-purple-600">40%</span></b></p>
          <div style={{width:"100%",height:"10px",marginTop:"15px",backgroundColor:"#D9D9D9",borderRadius:"5px"}}>
            <div className=" bg-purple-600" style={{width:"40%",height:"10px",borderRadius:"5px"}}></div>
          </div>
        </div>
      

      {/* Form */}
      <div className="w-full max-w-md bg-white">
        <p className="text-gray-400 text-sm mb-1">Step 3 of 4</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Add yor work experience</h1>
        <p className="text-sm text-gray-500 mb-6">
          This will be the name of your Rabbit AI workspace – choose something that your team & candidates will recognise.
        </p>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Experience {index + 1}
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="This will be the name of your Rabbit AI workspace – choose something that your team & candidates will recognise."
              value={exp}
              onChange={(e) => handleChange(index, e.target.value)}
              rows={3}
            />
          </div>
        ))}

        <button
          onClick={addExperience}
          className="text-purple-600 text-sm font-medium mb-6 hover:underline"
        >
          + Add More
        </button>

        <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold" onClick={getToJobPage}>
            Next
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WorkExperience;
