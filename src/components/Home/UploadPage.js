import React from "react";
import NewHeader from "./NewHeader";
import Frame from "../../SVG/Frame";
import Writing from "../../SVG/Writing";
import Quiz from "../../SVG/Quiz";
import SubTitle from "../../SVG/SubTitle";
import Regenerate from "../../img/icon_regenerate.png";

const UploadPage = ({ fileData, setFileData }) => {
  return (
    <div>
      <NewHeader />
      <div className="upload-page-container">
        <div className="page-title-frame">
          <div onClick={() => setFileData(null)}>
            <Frame />
          </div>
          <span className="ms-4">Uploaded Video</span>
        </div>
        <div className="uploaded-data-box">
          <div className="main-data-box">
            <div className="summarization-box">
              <div className="title-summarization">
                <span>
                  <Writing />
                  <span>Summarization</span>
                </span>
                <button className="regenarate-btn">
                  <img src={Regenerate} height={30} width={30} alt="" />
                </button>
              </div>
              <div className="summarization-data ">
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      fileData?.summary?.replaceAll(".", ".<br />") ||
                      "No description",
                  }}
                ></p>
              </div>
            </div>
            <div className="quiz-box">
              <div className="title-summarization">
                <span>
                  <Quiz />
                  <span>Quiz</span>
                </span>
                <button className="regenarate-btn">
                  <img src={Regenerate} height={30} width={30} alt="" />
                </button>
              </div>
              <div className="quiz-data">
                <p></p>
              </div>
            </div>
          </div>
          <div className="transcription-box">
            <div className="title-summarization">
              <span>
                <SubTitle />
                <span>Transcription</span>
              </span>
            </div>
            <div className="transcription-data">
              {fileData?.utterances?.map((data) => (
                <p className="text-justify">
                  <span className="fw-bold text-dark">
                    Speaker {data?.speaker}:&nbsp;
                  </span>
                  <span>{data?.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
