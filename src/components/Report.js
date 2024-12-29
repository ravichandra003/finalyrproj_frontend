import React from 'react';
import './Report.css'; // Make sure to import the CSS file

const Report = ({ data, closePopup }) => {
  // Helper function to highlight malicious text
  const highlightMalicious = (text) => {
    // Highlight "Malicious: Yes" in red, "Malicious: No" in green
    let highlightedText = text.replace(
      /Malicious: Yes/g,
      '<span class="malicious-yes">Malicious: Yes</span>'
    ).replace(
      /Malicious: No/g,
      '<span class="malicious-no">Malicious: No</span>'
    ).replace(
    /Malicious: Less Likely/g,
    '<span class="malicious-no">Malicious: Less Likely</span>'
    ).replace(
    /Malicious: Most Likely/g,
    '<span class="malicious-yes">Malicious: Most Likely</span>'
    ).replace(
    /Malicious: Likely/g,
    '<span class="malicious-yes">Malicious: Likely</span>'
    );
    return highlightedText;
  };

  // Function to replace '\n' with <br /> for line breaks
  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').join('<br />'); // Join with <br /> for line breaks
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Report</h2>

        {/* Render Result 1 */}
        {data.result1 && (
          <div>
            <p><strong>Result 1:</strong></p>
            <p dangerouslySetInnerHTML={{ __html: highlightMalicious(formatTextWithLineBreaks(data.result1)) }}></p>
            <hr /> {/* Horizontal line */}
          </div>
        )}

        {/* Render Result 2 */}
        {data.result2 && (
          <div>
            <p><strong>Result 2:</strong></p>
            <p dangerouslySetInnerHTML={{ __html: highlightMalicious(formatTextWithLineBreaks(data.result2)) }}></p>
            <hr /> {/* Horizontal line */}
          </div>
        )}

        {/* Render Result 3 */}
        {data.result3 && (
          <div>
            <p><strong>Result 3:</strong></p>
            <p dangerouslySetInnerHTML={{ __html: highlightMalicious(formatTextWithLineBreaks(data.result3)) }}></p>
          </div>
        )}

        {/* Close Button */}
        <button className="close-btn" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Report;
