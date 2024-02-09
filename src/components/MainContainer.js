import React from "react";

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  return (
    <div className="pt-[40%] bg-black md:pt-[12%] lg:pt-[7%] xl:pt-0">
      <VideoTitle
        title={"Oppenheimer"}
        overview={
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II."
        }
      />
      <VideoBackground movieId={872585} />
    </div>
  );
};

export default MainContainer;
