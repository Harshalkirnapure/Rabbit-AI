import React, { useState } from 'react';


const Resume = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const onSubmitResume=(e)=>{
    e.preventDefault();
    alert("Submit successfully");
  }

  return (
<div className="flex flex-col items-center gap-4 p-10 min-h-screen">
 
        {/* progress bar */}
      <div className="w-full max-w-md">
        <div style={{width:"100%",marginBottom:"20px"}}>
        <p className="text-center"><b>Building in progress... <span className="text-purple-600">90%</span></b></p>
          <div style={{width:"100%",height:"10px",marginTop:"15px",backgroundColor:"#D9D9D9",borderRadius:"5px"}}>
            <div className="bg-purple-600" style={{width:"90%",height:"10px",borderRadius:"5px"}}></div>
          </div>
        </div>
      

        {/* Form Step Title */}
        <div className="w-full max-w-md">
          <p className="text-sm text-gray-400">Step 6 of 6</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Add your resume</h2>

          {/* File Upload Box */}
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-purple-500 transition">
            <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center justify-center space-y-2">
              <i className="bi bi-cloud-upload text-3xl text-gray-500"></i>
              <img src="./Logo/icon2.jpg" alt="Upload Icon" className="w-12 h-12 object-contain mb-1" />
              <p className="text-gray-600">
                Drag your file(s) or <span className="text-blue-600 underline">browse</span>
              </p>
              <p className="text-sm text-gray-400">Max 10 MB files are allowed</p>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
              {fileName && (
                <p className="text-sm text-green-600 mt-2 font-medium">
                  Selected: {fileName}
                </p>
              )}
            </label>
          </div>
           {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold" onClick={onSubmitResume}>Submit</button>
         </div>
        </div>
        </div>
      </div>
  );
};

export default Resume;
