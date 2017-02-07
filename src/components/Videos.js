/**
 * Created by dcate on 2/4/17.
 */
import React, { PropTypes } from "react";

const Videos = ({ videos, handleSelectVideo, selectedVideo }) => (
    <div id="Videos" className="col-md-6">
        <h2> Videos </h2>
        <div className="select-video">
            <div id={selectedVideo.id}>
                <h6 className="title">{selectedVideo.description}</h6>
                <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
            </div>
        </div>
        <div className="video-thumbnail">
            {videos.map((video, i) => (
                <div key={i} onClick={handleSelectVideo.bind(this, video)}>
                    <img src={video.thumbnail} alt={video.description}/>
                </div>
            ))}
        </div>
    </div>
);

Videos.propTypes = {
    videos: PropTypes.array.isRequired,
    selectedVideo: PropTypes.object,
    handleSelectVideo: PropTypes.func.isRequired
};

export default Videos;

