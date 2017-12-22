import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onChangeHandler(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
    <div> <input type="text" value={this.state.term} onChange={this.onChangeHandler.bind(this)}/>
        value: {this.state.term}
      </div>
    );
  }
}


export default SearchBar;
