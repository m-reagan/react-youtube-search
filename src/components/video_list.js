import React from 'react';
import VideoListItem from './video_list_item';

function VideoList({ videos }) {
  console.log('hello'+videos);
  const videoListItems =  videos.map(video => <VideoListItem video={video} key={video.etag} />);
  return (
    <ul className="col-md-4 medial-list">
      {videoListItems}
    </ul>
  );
}

export default VideoList;
