import React, { Component } from 'react';

class TestReadContent extends Component {
  render() {
    console.log('ReadContent Component render');
    return (
      <div>
        <h2>{this.props.data.post_title}</h2>
        <span>
          <p>{this.props.data.post_content}</p>
          <p>{this.props.data.post_reg_date}</p>
          <p>{this.props.data.post_user_name}</p>
        </span>
      </div>
    );
  }
}

export default TestReadContent;
