import React from 'react';

function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="col-md-6">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title="currentVideo" allowFullScreen />
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;

