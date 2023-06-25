import React from "react";
import Header from "./Header/Header";

const About = () => {
  return (
    <>
      <Header />

      <div className="intro w-100 d-flex flex-col justify-content-center align-items-center mb-3">
        <div className=" w-50">
          <h1 className="text-white text-center font-s-60 font-w-700">
            About Us
          </h1>
        </div>
      </div>
      <div className="About mt-5">
        <div className="container w-100">
          <div className="about-us">
            <main>
              <section className="company-info">
                <h2>Our Vision</h2>
                <p>
                  At AIO Summarizer, we believe in harnessing the power of
                  artificial intelligence to revolutionize how people interact
                  with video content and improve their productivity. Our goal is
                  to provide professionals and learners with an AI-powered
                  meeting assistant and collaboration platform that simplifies
                  the process of generating video summaries and enhances
                  knowledge retention.
                </p>
              </section>
              <section className="objectives">
                <h2>Our Objectives</h2>
                <ul>
                  <li>Enhance Meeting Productivity</li>
                  <li>Foster Collaboration and Knowledge Sharing</li>
                  <li>Enhance Action Item Management</li>
                  <li>Improve Accessibility and Flexibility</li>
                  <li>Ensure Privacy and Security</li>
                  <li>Seamless Integrations</li>
                </ul>
              </section>
              <section className="user-personas">
                <h2>User Personas</h2>
                <ul>
                  <li>Business Professionals</li>
                  <li>Remote Teams</li>
                  <li>Knowledge Workers</li>
                  <li>Educators and Trainers</li>
                  <li>Project Managers</li>
                  <li>Researchers and Data Analysts</li>
                </ul>
              </section>
              <section className="constraints">
                <h2>Constraints</h2>
                <ul>
                  <li>Accuracy and Language Limitations</li>
                  <li>Background Noise and Audio Quality</li>
                  <li>Integration Compatibility</li>
                  <li>Scalability and Performance</li>
                </ul>
              </section>
              <section className="explorations-decisions">
                <h2>Explorations + Decisions</h2>
                <h3>Explorations</h3>
                <ul>
                  <li>Natural Language Processing (NLP) Improvements</li>
                  <li>Speaker Recognition and Attribution</li>
                  <li>Real-time Collaboration Features</li>
                  <li>Language Support Expansion</li>
                </ul>
                <h3>Decisions</h3>
                <ul>
                  <li>Integration Partnerships</li>
                  <li>Feature Prioritization</li>
                  <li>User Experience Enhancements</li>
                  <li>Security and Compliance Measures</li>
                </ul>
              </section>
              <section className="releases-next-steps">
                <h2>Releases</h2>
                <p>
                  <strong>Release Name:</strong> AIO Summarizer Enhanced Meeting
                  Productivity
                </p>
                <ul>
                  <li>Action Item Management</li>
                  <li>Knowledge Retention and Sharing</li>
                  <li>Meeting Content Summarization</li>
                  <li>Video Highlight Generation</li>
                  <li>Learning Content Generation</li>
                  <li>Integration with Meeting Platforms</li>
                </ul>
                <p>
                  <strong>Next Steps:</strong> Waiting for Feedback
                </p>
              </section>
            </main>
            <footer>&copy; 2023 AIO Summarizer. All rights reserved.</footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
