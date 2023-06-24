import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { generateQuizFromOpenAi } from "./Api/quiz.action";
import {
  checkStatusOfTranscript,
  generateTranscript,
  uploadAudioFileToAssemblyAi,
} from "./Api/assemblyai.action";
import Mask from "../img/Maskgroup.png";
import videoUpload from "../img/videoUpload.png";
import MasKYouTube from "../img/youtube-Icon.png";
import { videoToAudio } from "./Api/action";

const TranscriptionComponent = ({
  setToastData,
  handleTranscriptionResponse,
  handleQuizResponse,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const uploadFileRef = useRef();

  const uploadController = () => {
    uploadFileRef.current.click();
  };

  const handleVideoUpload = async (e) => {
    setIsProcessing(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    await uploadFileToServer(formData);
    setIsProcessing(false);
  };

  const uploadFileToServer = async (uploadFileToServer) => {
    await videoToAudio(uploadFileToServer)
      .then(async (response) => {
        console.log("response", response);
        await doUploadVideo(response.data);
        handleQuizResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadFile = async (fileData) => {
    await uploadAudioFileToAssemblyAi(fileData).then(async (response) => {
      // const { transcript_id, upload_url } = response.data || {};
      const { upload_url } = response.data || {};
      await doUploadVideo(upload_url);
    });
  };

  const doUploadVideo = async (fileUrl) => {
    await generateTranscript(fileUrl)
      .then(async (response) => {
        await checkStatus(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkStatus = async (id) => {
    await checkStatusOfTranscript(id)
      .then(async (pollingResponse) => {
        const transcriptionResult = pollingResponse.data;
        if (transcriptionResult.status === "completed") {
          setToastData({
            type: "Success",
            message: `Transcription Generated.`,
          });
          handleTranscriptionResponse(transcriptionResult);
          await generateQuiz(transcriptionResult.text);
        } else if (transcriptionResult.status === "error") {
          setToastData({
            type: "Error",
            message: `Transcription failed: ${transcriptionResult.error}`,
          });
        } else {
          setTimeout(async () => await checkStatus(id), 3000);
        }
      })
      .catch((error) => console.log(error));
  };

  const generateQuiz = async (text) => {
    await generateQuizFromOpenAi(text)
      .then((response) => {
        handleQuizResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex  flex-column align-items-center justify-content-center gap-4">
      <input
        type="file"
        accept="audio/*"
        ref={uploadFileRef}
        onChange={handleVideoUpload}
        hidden
      />
      <div
        className="d-flex align-items-center border w-600  upload-container"
        onClick={uploadController}
      >
        {isProcessing ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          <>
            <div className="me-5">
              <img src={Mask} className="upload-icon" />
            </div>
            <div className="d-flex flex-column">
              <p className="upload-heading">Upload Audio File</p>
              <span className="upload-text">
                Drop your audio file here, or click to browse
              </span>
            </div>
          </>
        )}
      </div>
      <div
        className="d-flex align-items-center border w-600  upload-container"
        onClick={uploadController}
      >
        <>
          <div className="me-4">
            <img src={videoUpload} alt="" className="upload-icon" />
          </div>
          <div className="d-flex flex-column">
            <p className="upload-heading">Upload Video File</p>
            <span className="upload-text">
              Drop your video file here, or click to browse
            </span>
          </div>
        </>
      </div>
      <div className="d-flex align-items-center border upload-container w-600  w-25">
        {isProcessing ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          <>
            <div className="me-4">
              <img src={MasKYouTube} alt="" className="upload-icon" />
            </div>
            <div className="d-flex flex-column w-100 input-link">
              <p className="upload-heading">YouTube Video Link</p>
              <input
                type="text"
                className="youtube-link-box"
                placeholder="https://www.youtube.com/watch?v=jd..."
              />
            </div>
          </>
        )}
      </div>
      {/* <button
        disabled={isProcessing}
        className="btn btn-primary mt-3"
        onClick={() => doUploadVideo()}
      >
        {isProcessing ? <FontAwesomeIcon icon={faSpinner} spin /> : "Next"}
      </button> */}
    </div>
  );
};

export default TranscriptionComponent;
