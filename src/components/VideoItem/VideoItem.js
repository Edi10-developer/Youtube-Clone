import React from 'react';
import { VideoItemStyledDiv } from './VideoItem-styled'

const VideoItem = ({ video, handleVideoSelect }) => {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <li key={video.etag}>
            <VideoItemStyledDiv handleVideoSelect={handleVideoSelect}>
                <iframe src={url} allowFullScreen />
                <div className="side-content">
                    <h3>{video.snippet.title}</h3>
                </div>
            </VideoItemStyledDiv>
        </li>
    )
}
export default VideoItem;