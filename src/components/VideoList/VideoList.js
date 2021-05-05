import React from 'react';
import { VideoListDiv } from './VideoList-styled';
import { VideoItem } from '../index'

const VideoList = ({ videos, handleVideoSelect }) => {

    const renderedVideos = videos.map((video) => {
        return (
            <VideoItem
                key={video.etag}
                video={video}
                handleVideoSelect={handleVideoSelect}
            />
        )
    })

    return (
        <VideoListDiv>
            <ul>{renderedVideos}</ul>
        </VideoListDiv>
    )
}

export default VideoList;