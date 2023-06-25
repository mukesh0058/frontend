import React, { useRef } from "react";
import Mask from "../img/Maskgroup.png";
import videoUpload from "../img/videoUpload.png";
import MasKYouTube from "../img/youtube-Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import Loader from "../SVG/Loader";

const TranscriptionComponent = ({
  isProcessing,
  loaderType,
  youtubeLink,
  setYoutubeLink,
  handleAudioUpload,
  handleVideoUpload,
  handleYoutubeLink,
}) => {
  const uploadAudioFileRef = useRef();
  const uploadVideoFileRef = useRef();

  const audioUploadController = () => {
    if (!isProcessing) {
      uploadAudioFileRef.current.click();
    }
  };
  const videoUploadController = () => {
    if (!isProcessing) {
      uploadVideoFileRef.current.click();
    }
  };

  return (
    <>
      <div className="d-flex  flex-column align-items-center justify-content-center gap-4">
        <input
          type="file"
          accept="audio/*"
          ref={uploadAudioFileRef}
          onChange={handleAudioUpload}
          hidden
        />
        <input
          type="file"
          accept="video/*"
          ref={uploadVideoFileRef}
          onChange={handleVideoUpload}
          hidden
        />
        <div
          className="d-flex align-items-center border w-600  upload-container"
          onClick={audioUploadController}
        >
          <>
            <div className="me-4">
              {isProcessing && loaderType === "audio" ? (
                <Loader />
              ) : (
                <img src={Mask} className="upload-icon" alt="" />
              )}
            </div>
            <div className="d-flex flex-column">
              {isProcessing && loaderType === "audio" ? (
                <p className="upload-heading">Processing Please Wait....</p>
              ) : (
                <>
                  <p className="upload-heading">Upload Audio File</p>
                  <span className="upload-text">
                    Drop your audio file here, or click to browse
                  </span>
                </>
              )}
            </div>
          </>
        </div>
        <div
          className="d-flex align-items-center border w-600  upload-container"
          onClick={videoUploadController}
        >
          <>
            <div className="me-4">
              {isProcessing && loaderType === "video" ? (
                <Loader />
              ) : (
                <img src={videoUpload} alt="" className="upload-icon" />
              )}
            </div>
            <div className="d-flex flex-column">
              {isProcessing && loaderType === "video" ? (
                <p className="upload-heading">Processing Please Wait....</p>
              ) : (
                <>
                  <p className="upload-heading">Upload Video File</p>
                  <span className="upload-text">
                    Drop your video file here, or click to browse
                  </span>
                </>
              )}
            </div>
          </>
        </div>
        <div className="d-flex align-items-center border upload-container w-600  w-25">
          <>
            <div className="me-4">
              {isProcessing && loaderType === "youtube" ? (
                <Loader />
              ) : (
                <img src={MasKYouTube} alt="" className="upload-icon" />
              )}
            </div>
            <div className="d-flex flex-column w-100 input-link">
              {isProcessing && loaderType === "youtube" ? (
                <p className="upload-heading">Processing Please Wait....</p>
              ) : (
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-column w-100">
                  <p className="upload-heading">YouTube Video Link</p>
                    <input
                      type="text"
                      className="youtube-link-box"
                      value={youtubeLink}
                      disabled={isProcessing}
                      onChange={(e) => setYoutubeLink(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=jd..."
                    />
                  </div>
                  <button
                    className="btn btn-outline-dark"
                    onClick={handleYoutubeLink}
                  >
                    <FontAwesomeIcon icon={faGreaterThan} />
                  </button>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default TranscriptionComponent;
