import React from 'react';

function VideoListItem({ video }) {
  return (
    <div className="media">
      <div className="media-left">
        <img src={video.snippet.thumbnails.default.url} className="media-object" alt="" />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
);
}

export default VideoListItem;