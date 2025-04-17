import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

/*Created by Nikita Kapse */

const DomainPage = () => {
  const navigate = useNavigate();

  const [domain, setDomain] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (e) => {
    const value = e.target.value;
    if (value && !skills.includes(value)) {
      setSkills([...skills, value]);
    }
    setSkillInput(""); // Reset dropdown
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!domain || domain === "Select your domain") {
      alert("Please select a domain");
      return;
    }
    if (skills.length === 0) {
      alert("Please select at least one skill");
      return;
    }
    // Submit logic or navigation
    navigate('/work_experience');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10 min-h-screen">
      <div className="w-full max-w-md">
        {/* Progress bar */}
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <p className="text-center"><b>Building in progress... <span className="text-purple-600">20%</span></b></p>
          <div style={{ width: "100%", height: "10px", marginTop: "15px", backgroundColor: "#D9D9D9", borderRadius: "5px" }}>
            <div className="bg-purple-600" style={{ width: "20%", height: "10px", borderRadius: "5px" }}></div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-1">Step 2 of 6</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select your domain</h2>
        <p className="text-sm text-gray-500 mb-6">
          This will be the name of your Rabbit AI workspace - choose something that your team & candidates will recognise.
        </p>

        {/* Domain Selection */}
        <div className="mb-4">
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Select your domain</option>
            <option>Front end Developer</option>
            <option>Back end Developer</option>
            <option>Full Stack Developer</option>
          </select>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <label className="text-sm text-gray-600 mb-2 block">Select Skills*</label>
          <select
            value={skillInput}
            onChange={handleAddSkill}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select your skills</option>
            <option value="Html">Html</option>
            <option value="Css">Css</option>
            <option value="Javascript">Javascript</option>
            <option value="ReactJs">ReactJs</option>
            <option value="Core Java">Core Java</option>
            <option value="Advance Java">Advance Java</option>
          </select>

          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map(skill => (
              <span
                key={skill}
                className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm cursor-pointer"
                onClick={() => handleRemoveSkill(skill)}
              >
                {skill} ×
              </span>
            ))}
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
      </div>
    </div>
  );
};

export default DomainPage;
