import React from "react";

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  return (
    <div>
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
