import React, { useState } from "react";
import './App.css';
import Header from './Header';  
import Report from './Report';   
import FileUpload from './FileUpload';

function App() {
  const [reportData, setReportData] = useState(""); // State to hold report data
  const [showReport, setShowReport] = useState(false); // State to control popup visibility

  // Function to update report data and show the report popup
  const handleUpload = (data) => {
    setReportData(data);
    setShowReport(true); // Show the report popup after data is uploaded
    console.log("handleuploadisfine");
  };

  // Function to close the report popup
  const closePopup = () => {
    setShowReport(false);
	window.location.reload();
  };

  return (
    <div>
      <Header />
      <FileUpload onUpload={handleUpload} /> {/* Pass the handler to FileUpload */}
      
      {/* Conditionally render the Report popup */}
      {showReport && <Report data={reportData} closePopup={closePopup} />}
    </div>
  );
}

export default App;
