import React from 'react';
// import resume from ".././images/aditya_Sriramteja_Chilukuri_Resume.pdf";
const ResumeButton = () => {

  return (
    <a
      href={"Teja_Fall2024_resume.pdf"}
      target="_blank"
      rel="noopener noreferrer"
      donwload="teja_chilukuri_resume"
    >
      <button className="download-button">
        <div className="docs">
          <svg
            className="css-i6dzq1"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line y2="13" x2="8" y1="13" x1="16"></line>
            <line y2="17" x2="8" y1="17" x1="16"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>{" "}
          Resume{" "}
        </div>
      </button>
    </a>
  );
};

export default ResumeButton;