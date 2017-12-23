import React from 'react';
import VideoListItem from './video_list_item';

function VideoList({ videos, onVideoClick }) {
  if (!videos) {
    return <div>Loading</div>
  }
  const videoListItems =  videos.map(video => <VideoListItem video={video} onVideoClick={selectedVideo => onVideoClick(selectedVideo)} key={video.etag} />);
  return (
    <ul className="col-md-4 medial-list">
      {videoListItems}
    </ul>
  );
}

export default VideoList;
