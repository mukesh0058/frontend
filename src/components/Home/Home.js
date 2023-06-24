import React, { useState } from "react";
import TranscriptionComponent from "../TranscriptionComponent";
import Header from "../Header/Header";
import UploadPage from "./UploadPage";

const Home = () => {
  const [fileData, setFileData] = useState(null);

  const handleTranscriptionResponse = (resp) => {
    setFileData(resp);
  };

  const handleQuizResponse = (resp) => {
    console.log(resp);
  };

  return !fileData ? (
    <>
      <Header />
      <div className="intro w-100 d-flex flex-col justify-content-center align-items-center mb-3">
        <div className=" w-50">
          <h1 className="text-white text-center display-6 font-s-60">Introducing AIO:</h1>
          <h1 className="text-white text-center font-s-60 font-w-700">
            <span>Automated Meeting</span>
          </h1>
          <div className="w-100 d-flex justify-content-center ">
            <h1 className="text-white text-center font-s-60 font-w-700">Summarization</h1>
          </div>
          <div>
            <h4 className="text-white text-center  mt-4">
              Use the power of AI to save time and catch up on meetings in seconds.
            </h4>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="action--container">
          <TranscriptionComponent
            handleTranscriptionResponse={handleTranscriptionResponse}
            handleQuizResponse={handleQuizResponse}
          />
        </div>
      </div>
    </>
  ) : (
    <UploadPage fileData={fileData} setFileData={setFileData} />
  );
};

export default Home;
