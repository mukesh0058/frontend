import React from "react";
import NewHeader from "./NewHeader";
import Frame from "../../SVG/Frame";
import Writing from "../../SVG/Writing";
import Quiz from "../../SVG/Quiz";
import SubTitle from "../../SVG/SubTitle";
import Regenerate from "../../img/icon_regenerate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import UserIcon from "../../SVG/UserIcon";
import UserIcon1 from "../../SVG/userIcon1";

const UploadPage = ({
  fileData,
  setFileData,
  quizData,
  regenerateProcess,
  loaderType,
  handleRegenerate,
}) => {
  const quizDisplay = (data) => {
    const queAns = data?.text?.split("\nA:");
    return (
      <div className="mt-3">
        <span className="fw-bold text-dark">Question:&nbsp;</span>
        {queAns[0]} <br />
        <span className="fw-bold text-dark">Answer:</span>{" "}
        {queAns[1] || queAns[2] || ""}
      </div>
    );
  };

  const data = fileData?.iab_categories_result.summary;
  const words = Object.keys(data).flatMap((key) => {
    // Remove any whitespace and split the key by '>'
    const wordParts = key.trim().split(">");
    return wordParts.map((part) => part.trim());
  });
  const uniqueWords = [...new Set(words)];
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
                <button
                  className="regenarate-btn"
                  disabled={regenerateProcess}
                  onClick={() => handleRegenerate("summary")}
                >
                  <img src={Regenerate} height={30} width={30} alt="" />
                </button>
              </div>
              <div className="summarization-data ">
                {regenerateProcess && loaderType === "summary" ? (
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faSpinner} spin size="2x" />
                  </div>
                ) : (
                  <>
                    <div className="topic-data">
                      {uniqueWords?.slice(0, 5)?.map((key, i) => (
                        <span className={i % 2 == 0 ? "even" : "odd"}>
                          {key}
                        </span>
                      ))}
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          fileData?.summary?.replaceAll(".", ".<br />") ||
                          "No description",
                      }}
                    ></p>
                  </>
                )}
              </div>
            </div>
            <div className="quiz-box">
              <div className="title-summarization">
                <span>
                  <Quiz />
                  <span>Quiz</span>
                </span>
                <button
                  className="regenarate-btn"
                  disabled={regenerateProcess}
                  onClick={() => handleRegenerate("quiz")}
                >
                  <img src={Regenerate} height={30} width={30} alt="" />
                </button>
              </div>
              <div className="quiz-data">
                {regenerateProcess && loaderType === "quiz" ? (
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faSpinner} spin size="2x" />
                  </div>
                ) : (
                  quizData?.map((data) => quizDisplay(data))
                )}
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
              {fileData?.utterances?.map((data, i) => {
                return (
                  <>
                    <div className="d-flex">
                      <div className="d-flex  me-3">
                        {i % 2 == 0 ? <UserIcon /> : <UserIcon1 />}
                      </div>
                      <div className="d-flex flex-column w-75  pt-2">
                        <div>
                          <span className="fw-bold text-dark d-block">
                            Speaker
                            {data?.speaker}:&nbsp;
                          </span>
                        </div>
                        <p className="text-justify">
                          <span className="d-block">{data?.text}</span>
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
