import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-3xl xl:text-6xl font-bold">{title}</h1>
      <p className="hidden xl:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black my-2 xl:my-0 py-1 xl:py-4 px-4 xl:px-12 text-xl rounded-lg hover:bg-opacity-85">
          ▹ Play
        </button>
        <button className="hidden xl:inline-block mx-2 bg-gray-500 text-white py-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-75">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
