import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { generateQuizFromOpenAi } from "./Api/quiz.action";
import {
  checkStatusOfTranscript,
  generateTranscript,
  uploadAudioFileToAssemblyAi,
} from "./Api/assemblyai.action";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
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
    <div className="d-flex align-items-center justify-content-center">
      <input
        type="file"
        accept="audio/*"
        ref={uploadFileRef}
        onChange={handleVideoUpload}
        hidden
      />
      <div
        className="d-flex me-3 align-items-center border upload-container"
        onClick={uploadController}
      >
        {isProcessing ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          <>
            <div className="me-4">
              <FontAwesomeIcon
                icon={faCloudUpload}
                color="#000000"
                size="2x"
                fill="#000000"
              />
            </div>
            <div className="d-flex flex-column">
              <p className="upload-heading">Upload your file</p>
              <span className="upload-text">
                Drop your audio or video file here, or click to browse
              </span>
            </div>
          </>
        )}
      </div>
      <div className="d-flex align-items-center border upload-container">
        {isProcessing ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          <>
            <div className="me-4">
              <FontAwesomeIcon
                icon={faYoutube}
                color="#000000"
                size="2x"
                fill="#000000"
              />
            </div>
            <div className="d-flex flex-column">
              <p className="upload-heading">YouTube video link</p>
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
