import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/*Created by Gautam  Hatmode */

const JobPreferences = () => {
  const [role, setRole] = useState("");
  const [locations, setLocations] = useState(["Hyderabad", "Delhi"]);
  const [jobType, setJobType] = useState("Full Time");
  const navigate=useNavigate();

  const handleLocationChange = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setLocations([...locations, e.target.value]);
      e.target.value =" ";
    }
  };

  const toggleJobType = (type) => {
    setJobType(type);
  };

  const removeLocation = (loc) => {
    setLocations(locations.filter((l) => l !== loc));
  };

  const getToTheWorkProof=(e)=>{
    e.preventDefault();
      navigate('/work_proof');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10 min-h-screen">
   
      {/* progress bar */}
      <div className="w-full max-w-md">
        <div style={{width:"100%",marginBottom:"20px"}}>
        <p className="text-center"><b>Building in progress... <span className="text-purple-600">60%</span></b></p>
          <div style={{width:"100%",height:"10px",marginTop:"15px",backgroundColor:"#D9D9D9",borderRadius:"5px"}}>
            <div className="bg-purple-600" style={{width:"60%",height:"10px",borderRadius:"5px"}}></div>
          </div>
        </div>
      

      <div className="w-full max-w-md">
        <p className="text-gray-400 text-sm mb-1">Step 4 of 6</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">What’s your job preferences?</h1>
        <p className="text-sm text-gray-500 mb-6">
          This will be the name of your Rabbit AI workspace – choose something that your team & candidates will recognise.
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter preferred job role*</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter preferred job role"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter preferred job location*</label>
          <input
            type="text"
            onKeyDown={handleLocationChange}
            placeholder="Enter preferred job location"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {loc}
                <button
                  onClick={() => removeLocation(loc)}
                  className="ml-2 text-xs text-gray-500 hover:text-red-500">×</button>
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Job type preference*</label>
          <div className="flex items-center gap-6">
            {["Full Time", "Hybrid", "Remote"].map((type) => (
              <label key={type} className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={jobType === type}
                  onChange={() => toggleJobType(type)}
                  className="form-checkbox text-purple-600 rounded"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold" onClick={getToTheWorkProof}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default JobPreferences;
