import React, { useRef, useState } from "react";
import { generateQuizFromOpenAi } from "./Api/quiz.action";
import {
  checkStatusOfTranscript,
  generateTranscript,
  uploadAudioFileToAssemblyAi,
} from "./Api/assemblyai.action";
import Mask from "../img/Maskgroup.png";
import videoUpload from "../img/videoUpload.png";
import MasKYouTube from "../img/youtube-Icon.png";
import { videoToAudio, videoToAudioYoutube } from "./Api/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import Loader from "../SVG/Loader";

const TranscriptionComponent = ({
  handleTranscriptionResponse,
  handleQuizResponse,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [loaderType, setLoaderType] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
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

  const handleVideoUpload = async (e) => {
    setIsProcessing(true);
    setLoaderType("video");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    await uploadFileToServer(formData);
    setIsProcessing(false);
  };

  const handleYoutubeLink = async () => {
    if (youtubeLink && !isProcessing) {
      setIsProcessing(true);
      setLoaderType("youtube");
      await videoToAudioYoutube(youtubeLink)
        .then(async (response) => {
          await doUploadVideo(response.data);
        })
        .catch((error) => console.log(error));
      setIsProcessing(false);
    }
  };

  const handleAudioUpload = async (e) => {
    setIsProcessing(true);
    setLoaderType("audio");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    await uploadFile(formData);
    setIsProcessing(false);
  };

  const uploadFileToServer = async (uploadFileToServer) => {
    await videoToAudio(uploadFileToServer)
      .then(async (response) => {
        await doUploadVideo(response.data);
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
          handleTranscriptionResponse(transcriptionResult);
          await generateQuiz(transcriptionResult.text);
        } else if (transcriptionResult.status === "error") {
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
                <>
                  <p className="upload-heading">YouTube Video Link</p>
                  <div className="">
                    <input
                      type="text"
                      className="youtube-link-box"
                      value={youtubeLink}
                      disabled={isProcessing}
                      onChange={(e) => setYoutubeLink(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=jd..."
                    />
                    <button
                      className="btn btn-outline-dark"
                      onClick={handleYoutubeLink}
                    >
                      <FontAwesomeIcon icon={faGreaterThan} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default TranscriptionComponent;
