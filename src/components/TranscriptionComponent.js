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

    //quiz genrate
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: `Generate a quiz based on the following passage:\n\n${`Gateway that okay. So storage gateway sometimes what happened that some of the companies that require on premises database and they do have AWS. So to do the communication between them, they use the storage gateway. Now, on the next slide, we can see that this is the different different s three storages, right? The common one we are using for the standard then is the intelligence tire. Then that is the standard AI, sorry, IA. IA means infrequent access. Whenever you see the IA, that is the infrequent access, one zone IA. Lesser instance USCR flexible retrieval, USCR deep archive, right. So costlier is this one intelligent and then standard. Then over here it will be less, less costlier. Why? Because standard is that highly available and whenever you require the data, it's always be available. Then intelligent is sometimes what happened that let's say we do have some of the files, we are not frequently accessing it, right? So we need to create some policies that from one tire to another, we need to transfer that data. So intelligent tire, we can use that, transfer the data from standard to standard IA, then from the standard IA to standard zone IA. Sorry, one zone IA, one zone IA to glass, not one zone IA, but standard IA to glacier instance, then glacier to glacier flexible and glacier flexible to deep archive, right? So based on that data access, let's say if we do have file that is not accessible within the 30 days. So these policies, storage policy, it will transfer that data from standard to standard infrequent access. Let's say same file is not accessible since last 60 days, right? So that file will be going to transfer from standard IA to glacier instance. And over here you can see all of this minimum storage duration. So here you can see that standard, this is 30 days, one zone, that is 30 days glacier, that is 90 days. Glacier flexible, 90 days and glacier deep it is 180 days, right. Another question that might be during the exam that which are the free retriever s three, right? Free retriever s three classes. So retriever fee. You can see over here, this is none for the standard, okay? But over here you can see that per GBT travel, per GBT travel for any of this one, okay? So because this is less costlier. So whenever we retrieving the data from that s three, during that time Amazon going to charge. Now, sometimes not when that there is a large companies, right? And they do have previous data, maybe we can consider AWS shopping or any pharmacy companies or any ecommerce big companies, right? They do have really big data for last year, last year, last year, maybe ten years. They might need to maintain the ten years data. So during the time they have used, they are going to use deep archive because that is not frequent access, right? So you can see that minimum storage duration. So amazon is anyways going to charge for the 180 days. So such a data we are going to store for the deep archive. Okay, so in detail, this is a different topic we cannot cover over here. This is a database relation database, email database, TV database, warehouse database, hadoop athana Quick site, document DB, AWS, QLDB then manage, blockchain, glue data migration Services is there and there is an apptube. Right. So relational database for any transactional data. Right. So we do have RDS. Another postgres. Postgres is there than okay, so mostly Arrow is faster than postgres. It is saying that it is two times faster than postgres. And I can say that five times faster than MySQL because that is not open source. So we cannot see the code, but claiming that it is faster than even for our projects, we are using Aurora only. So that is the Register database in memory database we are using. That is the Elastic cache, right. We are using for that. So one is the redis one and another is the Mem cache. So this is the two database that is providing. Another one is the key value database. And that is the DynamoDB. Right? This database, DynamoDB is serverless and it is accessible for any of the region. Okay, so this is not region specific database. This is the question that might be coming. So whenever you create any of the table on AWS DynamoDB, it is not region specific. This is the text to faster access because it is a cache on the DynamoDB. So it is caching the data for the faster access and based on the query, it gives the result. Whereas we do have redsick. Then for the hadoop there is the EMR service. Okay, so my VBT is going to be going detail on that part for all of the Snr sometimes what happened that we do have large data and that data is stored on the S three, right? It might be Excel file, it might be some other format JSON. So what Snr will do xeno will read that data from S three and it will give us the insight. And we can do the SQL query on all of the S three data. So. Yeah. SQL data. Yeah, SQL query we can do on all of the S three data. Quick site. That is the dashboard to create for all of this data. Document DB this is based on the MongoDB. So if you want to use MongoDB, you can go with the documentb then QLDB. Okay, so this is financial ledger. Like once you write the data, it's not going to be rewarded, right? We can do the operational, we can update the value on the relational database or maybe MongoDB or anywhere. But if you use that QLDB, right, we cannot change that value. We need to do the new transaction and we need to write the new value again. So this is the I can say that internal blockchain. For the AWS, if you want to use the public blockchain, then AWS manage blockchain. Okay? So that is currently they are supporting hyperledger and ethereum blockchain. Glue is the ETL process, right? So let's say if you do have multiple data source and we do not have that, let's say if you want, I can say that for the X element, right? We want to create the data set for the users who are going to attend, who has visited attend the meetings in particular state, right? So there might be multiple table. We might need to be multiple database. I can say. One is that Neptune is there. One is that s three might have some data. So we are going to create some script. It will extract that data, load that data and it will be displayed that whatever the result we required. So for that glue is there database migration service? That is let's say if you want to migrate the data from Oracle to AWS, then this service is going to be used. And Neptune we are already using for the GraphQL sorry, graph database for the social networking and all those things. Do we need to continue? Because there are so many things we can go in practical as well. But we do not have that much time, right? Otherwise, even to explain one topic in AWS, it's required one to 2%. Still it is not going to be completed 100%. So this is the basic overview that whatever question will be there or what services they are going to be covered during the exam. Okay. So even if you get some basic idea that what type of services the adverse is providing, you might get more confident on the answering the question. As well as that sometimes what happened that we might not aware about all of the service, but whenever there is a project, we can suggest to the client, right? That what type of service client can use to save the post and all the things. Because there is AWS post calculator is there, then billing is there. There are so many parts are there that I don't think so we are using for the accelerator itself, are we using organization? Yeah, we have right. What happened that it is combining all of the one account. And let's say if you do have some reserved instances for one account, it can be utilized for the other account as well. So I have suggested John, that we can use that. Sometimes even I face the problem. If you want to create the case on staging, then it is not paid one, right? Yeah. In India it is not staging is not paid in fraud. We have paid support. Yeah. So if we are using the AWS organization, then we can solve such type of problems. Okay, maybe next session we can set up or whenever you get a time, we can continue from here or we can.`}\n\nQ:`,
          max_tokens: 100,
          temperature: 0.7,
          n: 5,
        },
        {
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
          },
        }
      );

      const questions = response.data.choices.map((choice) =>
        choice.text.trim()
      );
      return questions;
    } catch (error) {
      console.error("Error generating quiz:", error);
      return [];
    }

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
