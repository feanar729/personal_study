import React, { Component } from 'react';

export class Control extends React.Component {
  render() {
    console.log('submit');
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangeMode('create');
            }.bind(this)}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangeMode('update');
            }.bind(this)}
          >
            update
          </a>
        </li>
        <li>
          <input
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangeMode('delete');
            }.bind(this)}
            type="button"
            value="delete"
          />
        </li>
      </ul>
    );
  }
}
