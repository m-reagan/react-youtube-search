import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCkpADtodTQ1kQ0Pxa8dszJGUt0yiTC508';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    this.onSearchChange('surfboards');
  }

  onSearchChange(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
      console.log(this.state.videos);
    });
  }

  changeSelectedVideo(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={term => this.onSearchChange(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoClick={video => this.changeSelectedVideo(video)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
