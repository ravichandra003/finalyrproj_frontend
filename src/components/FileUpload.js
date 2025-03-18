import React, { useState } from 'react';
import './FileUpload.css'; // Import CSS file for styles

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null); // State to hold the file
  const [loading, setLoading] = useState(false); // State to manage loading
  const supportedExtensions = [
    ".exe",
    ".txt",
    ".pdf"
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the first file
    if (selectedFile) {
      setFile(selectedFile); // Update the state with the selected file
    } else {
      setFile(null); // Reset if no file is selected
    }
  };

  const uploadfilefun = async (file) => {
    // Create FormData to send file to the backend
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Make a POST request to your backend
      const response = await fetch("https://finalyrproj-backend.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      // Parse the JSON response
      const data = await response.json();

      console.log("Received data from backend:", data);

      // Extract result1, result2, and result3
      const { result1, result2, result3 } = data;

      return { result1, result2, result3 }; // Return the results as an object
    } catch (error) {
      console.error("Error uploading file:", error);
      return { error: "Error occurred while uploading file" };
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const fileExtension = file.name.split('.').pop(); // Get the file extension
      if (supportedExtensions.includes(`.${fileExtension}`)) { // Check if the file extension is supported
        setLoading(true); // Set loading to true when the upload starts

        const result = await uploadfilefun(file); // Wait for the async function to complete

        if (result.error) {
          console.error(result.error); // Log the error if any
          alert("File upload failed. Please try again.");
        } else {
          const { result1, result2, result3 } = result;

          // Log and process each result
          console.log("Result 1:", result1);
          console.log("Result 2:", result2);
          console.log("Result 3:", result3);

          onUpload(result); // Send the results to the App component
        }
      } else {
        alert(
          "Unsupported file type. Please upload a file with one of the following extensions: " +
          supportedExtensions.join(", ")
        );
      }
    } else {
      alert("Please select a file before submitting."); // Alert if no file is selected
    }
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-card">
        <h2>Upload Your File</h2>
        <input 
          type="file" 
          onChange={handleFileChange} 
          accept={supportedExtensions.join(",")} // Only accept specified file types
        />
        {file && <p className="file-name">Selected File: {file.name}</p>} {/* Show selected file name */}
        <button 
          className="submit-button" 
          onClick={handleSubmit}
          disabled={loading} // Disable the button when loading
        >
          {loading ? "Loading..." : "Submit"} {/* Show "Loading..." when loading */}
        </button>
        <p className="supported-extensions">
          Supported file types: {supportedExtensions.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
