import React, { useState } from "react";
import "./Upload.scss";
import DragDropFile from "./DragDropFile";
const Upload = () => {
  const [file, setFile] = useState(null);
  const handleDrag = (file) => {
    console.log(file);
    setFile(file);
  };
  return (
    <>
      <div className="">
        <div className="link-add-upload">
          <div className="link-add ">
            <div className="left">
              <span>
                <img
                  className="pr-4"
                  src="https://cdn-icons-png.flaticon.com/512/10444/10444017.png"
                  alt=""
                  width={50}
                />
              </span>
            </div>
            <div className="right">
              <p>YouTube video link</p>
              <input
                type="text"
                placeholder="https://www.youtube.com/watch?v=jd..."
              />
            </div>
          </div>
          <div className="link-add">
            <div className=" left">
              <span>
                <img
                  className="pr-4"
                  src="https://cdn-icons-png.flaticon.com/512/686/686458.png"
                  alt=""
                  width={50}
                />
              </span>
            </div>
            <div className="right">
              {!file ? (
                <DragDropFile handleFile={handleDrag} />
              ) : (
                <>
                  <div className="d-flex align-middle h-75">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/656/656393.png"
                      alt=""
                      width={50}
                    />

                    <div className="">
                      <p className="text-secondary">{file.name}</p>
                      <p className="text-secondary m-0">
                        {(file.size / 1024).toFixed(2)} mb
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
