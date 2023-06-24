/*eslint-disable*/
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Toaster from "./Toaster/Toaster";

const TranscriptionComponent = ({
  setToastData,
  handleTranscriptionComplete,
}) => {
  // const [videoFile, setVideoFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const transcript_endpoint = "https://api.assemblyai.com/v2/transcript";
  const YOUR_API_TOKEN = "9f7b586e30eb474184416954ef8c47c0";
  const base_url = "https://api.assemblyai.com/v2";
  const uploadFile = useRef();

  const uploadController = () => {
    uploadFile.current.click();
  };

  const retrieveTranscription = async (transcriptId) => {
    try {
      const response = await axios.get(
        `https://api.assemblyai.com/v2/transcript/6x46s7gct7-31bd-4c72-8ce6-87a1148ab54e`,
        {
          headers: {
            authorization: "9f7b586e30eb474184416954ef8c47c0", // Replace with your AssemblyAI API key
          },
        }
      );

      const { status, text } = response.data;
      if (status === "completed") {
        setTranscription(text);
      } else {
        setTimeout(() => {
          retrieveTranscription(transcriptId);
        }, 5000);
      }
    } catch (error) {
      console.log("Error retrieving transcription:", error);
    }
  };

  // const doTranscription = async () => {
  //   try {
  //     const data = {
  //       audio_url: 'https://cdn.assemblyai.com/upload/2e5d4036-0edb-44e4-aceb-87bed0d6e455',
  //       iab_categories: true,
  //     };

  //     // HTTP request headers
  //     const headers = {
  //       Authorization: YOUR_API_TOKEN,
  //       'Content-Type': 'application/json',
  //     };

  //     // submit for transcription via HTTP request
  //     const response = await axios.post(transcript_endpoint, data, { headers: headers });
  //     console.log('response', response);
  //   } catch (error) {
  //     console.log('Error retrieving transcription:', error);
  //   }
  // };

  const doTranscription = async () => {
    try {
      const data = {
        audio_url:
          "https://cdn.assemblyai.com/upload/2e5d4036-0edb-44e4-aceb-87bed0d6e455",
        iab_categories: true,
        summarization: true,
        summary_model: "informative",
        summary_type: "bullets",
      };

      // HTTP request headers
      const headers = {
        Authorization: YOUR_API_TOKEN,
        "Content-Type": "application/json",
      };

      // submit for transcription via HTTP request
      const response = await axios.post(transcript_endpoint, data, {
        headers: headers,
      });
      console.log("response", response);
    } catch (error) {
      console.log("Error retrieving transcription:", error);
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    // setVideoFile(file);
    // const data = await fs.readFile(path);
    const formData = new FormData();
    console.log("file", file);
    formData.append("file", file);

    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   const content = e.target.result;
    //   console.log('content', content);
    //   setFileContent(content);
    // };

    // reader.readAsText(file);
    // console.log('reader', reader);

    try {
      const response = await axios.post(
        "https://api.assemblyai.com/v2/upload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            authorization: "9f7b586e30eb474184416954ef8c47c0", // Replace with your AssemblyAI API key
          },
        }
      );
      console.log("response", response);

      const { transcript_id, upload_url } = response.data || {};
      doUploadVideo(upload_url);
      // retrieveTranscription(transcript_id);
    } catch (error) {
      console.log("Error uploading video:", error);
    }
  };

  const doUploadVideo = async (FILE_URL) => {
    setIsProcessing(true);
    // console.log(' fs', fs);
    // const data = await fs.readFile('https://www.youtube.com/watch?v=RUX9YlEbenI');

    // URL of the file to transcribe
    // const FILE_URL = 'https://www.youtube.com/watch?v=rrjWWZud-B8';

    // AssemblyAI transcript endpoint (where we submit the file)
    const transcript_endpoint = "https://api.assemblyai.com/v2/transcript";

    // request parameters where Summarization has been enabled
    const data = {
      audio_url: FILE_URL,
      summarization: true,
      summary_model: "informative",
      summary_type: "bullets",
    };

    // HTTP request headers
    const headers = {
      Authorization: YOUR_API_TOKEN,
      "Content-Type": "application/json",
    };

    // submit for transcription via HTTP request
    const response = await axios.post(transcript_endpoint, data, {
      headers: headers,
    });
    console.log("response12", response);

    // polling for transcription completion
    const pollingEndpoint = `https://api.assemblyai.com/v2/transcript/${response.data.id}`;

    while (true) {
      const pollingResponse = await axios.get(pollingEndpoint, {
        headers: headers,
      });
      const transcriptionResult = pollingResponse.data;

      if (transcriptionResult.status === "completed") {
        // print the results
        setToastData({ type: "Success", message: `Transcription Generated.` });
        handleTranscriptionComplete(transcriptionResult);
        setIsProcessing(false);
        break;
      } else if (transcriptionResult.status === "error") {
        setToastData({
          type: "Error",
          message: `Transcription failed: ${transcriptionResult.error}`,
        });
        setIsProcessing(false);
        // throw new Error(`Transcription failed: ${transcriptionResult.error}`);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }
    setIsProcessing(false);
  };

  // const getAudioFromYouTube = async (videoUrl) => {
  //   console.log('AAA');
  //   // Perform the necessary steps to extract audio from the YouTube video
  //   // and return the audio URL
  //   // This implementation may vary depending on the library or method you use
  //   // to download the audio from YouTube
  //   // You can use youtube-dl or youtube-dl-api-server to download the audio

  //   // Example implementation:
  //   // You can use youtube-dl-api-server running locally or deployed, and make
  //   // a GET request to retrieve the audio URL
  //   const response = await axios.get(
  //     `http://localhost:300/api/download?url=${encodeURIComponent('https://www.youtube.com/watch?v=RUX9YlEbenI')}`,
  //   );
  //   console.log('response', response);
  //   const audioUrl = response.data.audio_url;
  //   console.log('audioUrl', audioUrl);

  //   return audioUrl;
  // };

  return (
    <div className="d-flex flex-column align-items-center h-90v justify-content-center">
      <input
        type="file"
        accept="audio/*"
        ref={uploadFile}
        onChange={handleVideoUpload}
        hidden
      />
      <div
        className="d-flex align-items-center border upload-container"
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
      {transcription && <p>Transcription: {transcription}</p>}
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
