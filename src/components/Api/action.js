import axios from "axios";
const ASSEMBLYAI_KEY = "9f7b586e30eb474184416954ef8c47c0";

export const videoToAudio = async (data) => {
  return await axios.post(
    "http://122.179.158.94:3304/user/video-to-audio",
    data,
    {
      headers: {
        Authorization: ASSEMBLYAI_KEY,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
