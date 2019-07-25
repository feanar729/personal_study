import React, { Component } from 'react';

class TestReadContent extends Component {
  render() {
    console.log('TestReadContent Component render');
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default TestReadContent;
