import React, { useRef } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const VideoToAudio = () => {
  const ffmpeg = useRef();
  const inputRef = useRef();
  const outputRef = useRef();
  const convertToAudio = async () => {
    const videoFile = inputRef.current.files[0];
    const outputFileName = "output.mp3";
    // Load the FFmpeg library
    if (!ffmpeg.current) {
      ffmpeg.current = createFFmpeg({ log: true });
      await ffmpeg.current.load();
    }
    // Read the video file
    ffmpeg.current.FS("writeFile", videoFile.name, await fetchFile(videoFile));
    // Run the conversion command
    await ffmpeg.current.run("-i", videoFile.name, outputFileName);
    // Read the converted audio file
    const convertedAudio = ffmpeg.current.FS("readFile", outputFileName);
    // Create a download link for the converted audio
    const downloadLink = URL.createObjectURL(
      new Blob([convertedAudio.buffer], { type: "audio/mp3" })
    );
    // Set the download link as the output source
    outputRef.current.src = downloadLink;
  };
  return (
    <div>
      <input type="file" accept="video/*" ref={inputRef} />
      <button onClick={convertToAudio}>Convert to Audio</button>
      <audio controls ref={outputRef}></audio>
    </div>
  );
};
export default VideoToAudio;
