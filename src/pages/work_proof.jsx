import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkProof = () => {
    const navigate=useNavigate();


    const getToTheResume=(e)=>{
       e.preventDefault();
        navigate('/resume');
    };



  return (
    <div className="flex flex-col items-center gap-4 p-10 min-h-screen">
  
        {/* progress bar */}
      <div className="w-full max-w-md">
        <div style={{width:"100%",marginBottom:"20px"}}>
        <p className="text-center"><b>Building in progress... <span className="text-purple-600">80%</span></b></p>
          <div style={{width:"100%",height:"10px",marginTop:"15px",backgroundColor:"#D9D9D9",borderRadius:"5px"}}>
            <div className="bg-purple-600" style={{width:"80%",height:"10px",borderRadius:"5px"}}></div>
          </div>
        </div>
      

        <div className="w-full max-w-md">
          <p className="text-sm text-gray-400">Step 5 of 6</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Add links to proof of your work?</h2>
          <p className="text-gray-600 text-sm">
            This will be the name of your Rabbit AI workspace – choose something that your team & candidates will recognize.
          </p>
        </div>

        <form style={{marginTop:"10px"}} className="w-full max-w-md">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Website"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Github"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Linkedin"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="X.com"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mt-6">
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold" onClick={getToTheResume}>Next</button>
          </div>
        </form>
        </div>
    </div>
  );
};

export default WorkProof;
