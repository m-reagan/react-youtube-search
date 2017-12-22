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
    this.onSearchChange('Tamil');
  }

  onSearchChange(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos });
      console.log(this.state.videos);
    });
  }
  render() {
    return (
      <div>
        <SearchBar onSearchChange={term => this.onSearchChange(term)} />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
