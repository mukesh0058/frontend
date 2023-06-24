import axios from "axios";

export const videoToAudio = async (data) => {
  return await axios.post(
    "http://122.179.158.94:3304/user/video-to-audio",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const videoToAudioYoutube = async (url) => {
  return await axios.post(
    `http://122.179.158.94:3304/user/youtube/video-to-audio`,
    { url }
  );
};
