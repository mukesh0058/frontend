import React, { useState } from "react";
import TranscriptionComponent from "../TranscriptionComponent";
import Toaster from "../Toaster/Toaster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [toastData, setToastData] = useState(null);
  const [fileData, setFileData] = useState(null);

  const handleTranscriptionResponse = (resp) => {
    setFileData(resp);
  };

  const handleQuizResponse = (resp) => {
    console.log(resp);
  };

  return (
    <>
      {toastData && <Toaster data={toastData} />}
      <div className="main">
        <div className="action--container">
          <TranscriptionComponent
            setToastData={setToastData}
            handleTranscriptionResponse={handleTranscriptionResponse}
            handleQuizResponse={handleQuizResponse}
          />
        </div>
        {fileData && (
          <div className="d-flex">
            <div className="container flex-column">
              <div className="summarization-container">
                <div className="title fw-bold">
                  <span>Summarization</span>
                  {fileData?.summary && (
                    <button className="regenerate-btn">
                      <FontAwesomeIcon icon={faRepeat} />
                    </button>
                  )}
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      fileData?.summary?.replaceAll(".", ".<br />") ||
                      "No data found!",
                  }}
                ></p>
              </div>
              <div className="quiz-container">
                <div className="title fw-bold">
                  <span>Quiz</span>
                  {fileData?.summary && (
                    <button className="regenerate-btn">
                      <FontAwesomeIcon icon={faRepeat} />
                    </button>
                  )}
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Quiz
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transcript-container">
              {fileData?.utterances?.map((speaker, key) => (
                <div key={key}>
                  <span className="fw-bold">{`Speaker ${speaker.speaker}: `}</span>
                  <span>{speaker.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
