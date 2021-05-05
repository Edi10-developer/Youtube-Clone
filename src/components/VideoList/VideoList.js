import React from 'react';
import { VideoListDiv } from './styles';

const VideoList = ({ videos, handleVideoSelect }) => {

    const renderedVideos = videos.map((video) => {

        return <VideoItem 
        key={video.etag}
        video={video}
        handleVideoSelect={handleVideoSelect}
        />
    
    })

    return(
    <VideoListDiv> 
    {renderedVideos} 
    </VideoListDiv>
    )
}

export default VideoList;