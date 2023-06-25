import React, { useState } from "react";
import TranscriptionComponent from "../TranscriptionComponent";
import Header from "../Header/Header";
import UploadPage from "./UploadPage";
import { generateQuizFromOpenAi } from "../Api/quiz.action";
import {
  checkStatusOfTranscript,
  generateTranscript,
  uploadAudioFileToAssemblyAi,
} from "../Api/assemblyai.action";
import { videoToAudio, videoToAudioYoutube } from "../Api/action";

const Home = () => {
  const [fileData, setFileData] = useState(null);
  const [file, setFile] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [loaderType, setLoaderType] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [regenerateProcess, setRegenerateProcess] = useState(false);

  const handleTranscriptionResponse = (resp) => {
    setFileData(resp);
  };

  const handleQuizResponse = (resp) => {
    setQuizData(resp.data.choices);
  };

  const handleVideoUpload = async (e) => {
    setIsProcessing(true);
    setLoaderType("video");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    await uploadFileToServer(formData);
  };

  const handleYoutubeLink = async () => {
    if (youtubeLink && !isProcessing) {
      setIsProcessing(true);
      setLoaderType("youtube");
      await videoToAudioYoutube(youtubeLink)
        .then(async (response) => {
          setFile(response.data);
          await doUploadVideo(response.data);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleAudioUpload = async (e) => {
    setIsProcessing(true);
    setLoaderType("audio");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    await uploadFile(formData);
  };

  const uploadFileToServer = async (uploadFileToServer) => {
    await videoToAudio(uploadFileToServer)
      .then(async (response) => {
        setFile(response.data);
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
      setFile(upload_url);
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
        setIsProcessing(false);
      })
      .catch((error) => {
        console.log(error);
        setIsProcessing(false);
      });
  };

  const handleRegenerate = async (from) => {
    setRegenerateProcess(true);
    setLoaderType(from);
    if (from === "quiz") {
      await generateQuiz(fileData?.text);
    } else {
      await doUploadVideo(file);
    }
    setRegenerateProcess(false);
  };

  return !fileData ? (
    <>
      <Header />
      <div className="intro w-100 d-flex flex-col justify-content-center align-items-center mb-3">
        <div className=" w-50">
          <h1 className="text-white text-center display-6 font-s-60">
            Introducing AIO:
          </h1>
          <h1 className="text-white text-center font-s-60 font-w-700">
            <span>Automated Meeting</span>
          </h1>
          <div className="w-100 d-flex justify-content-center ">
            <h1 className="text-white text-center font-s-60 font-w-700">
              Summarization
            </h1>
          </div>
          <div>
            <h4 className="text-white text-center  mt-4">
              Use the power of AI to save time and catch up on meetings in
              seconds.
            </h4>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="action--container">
          <TranscriptionComponent
            isProcessing={isProcessing}
            loaderType={loaderType}
            youtubeLink={youtubeLink}
            setYoutubeLink={setYoutubeLink}
            handleAudioUpload={handleAudioUpload}
            handleVideoUpload={handleVideoUpload}
            handleYoutubeLink={handleYoutubeLink}
          />
        </div>
      </div>
    </>
  ) : (
    <UploadPage
      fileData={fileData}
      setFileData={setFileData}
      quizData={quizData}
      handleRegenerate={handleRegenerate}
      regenerateProcess={regenerateProcess}
      loaderType={loaderType}
    />
  );
};

export default Home;
