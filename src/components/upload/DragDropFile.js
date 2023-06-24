import React, { useRef } from "react";

const DragDropFile = ({ handleFile }) => {
  const bannerUploadRef = useRef(null);
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };
  return (
    <div
      className=" d-flex align-items-center justify-content-center h-75"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() =>
        bannerUploadRef &&
        bannerUploadRef.current &&
        bannerUploadRef.current.click()
      }
    >
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3097/3097412.png"
          alt=""
          width={"20px"}
        />

        <span className="px-2 text-secondary">
          Upload or Drop your file here
        </span>
      </span>
      <input
        hidden
        type="file"
        name="file"
        id="profile-pic"
        ref={bannerUploadRef}
        onChange={(event) => handleFile(event.currentTarget.files[0])}
      />
    </div>
  );
};

export default DragDropFile;
