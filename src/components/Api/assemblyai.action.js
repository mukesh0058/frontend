import axios from "axios";
const ASSEMBLYAI_KEY = "9f7b586e30eb474184416954ef8c47c0";

export const uploadAudioFileToAssemblyAi = async (file) =>
  await axios.post("https://api.assemblyai.com/v2/upload", file, {
    headers: {
      "content-type": "multipart/form-data",
      authorization: ASSEMBLYAI_KEY,
    },
  });

export const generateTranscript = async (url) => {
  return await axios.post(
    "https://api.assemblyai.com/v2/transcript",
    {
      audio_url: url,
      summarization: true,
      speaker_labels: true,
      summary_model: "informative",
      summary_type: "bullets",
    },
    {
      headers: {
        Authorization: ASSEMBLYAI_KEY,
        "Content-Type": "application/json",
      },
    }
  );
};

export const checkStatusOfTranscript = async (id) =>
  await axios.get(`https://api.assemblyai.com/v2/transcript/${id}`, {
    headers: {
      Authorization: ASSEMBLYAI_KEY,
      "Content-Type": "application/json",
    },
  });
