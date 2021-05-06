import React from "react";
import { VideoDiv } from "./Videodetails-styled";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <VideoDiv>
      <iframe src={url} />
      <div class="description">
        <h3>{video.snippet.title}</h3>
        <h5>{video.snippet.description}</h5>
        </div>
    </VideoDiv>
  );
};

export default VideoDetails;






/*import React from "react";
import { VideoDiv } from "./styles";

const VideoDetails = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <VideoDiv>
        <iframe src={url} />
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
    </VideoDiv>
  );
};

export default VideoDetails;
*/