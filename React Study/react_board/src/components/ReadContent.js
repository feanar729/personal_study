import React, { Component } from 'react';

class TestReadContent extends Component {
  render() {
    console.log('ReadContent Component render');
    return (
      <article>
        <h2>{this.props.id}</h2>
        {this.props.board_name}
      </article>
    );
  }
}

export default TestReadContent;