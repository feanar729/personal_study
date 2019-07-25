import React, { Component } from 'react';
class Control extends Component {
  render() {
    console.log('Control Component render');
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={e => {
              e.preventDefault();
              this.props.onChangeMode('CREATE');
            }}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={e => {
              e.preventDefault();
              this.props.onChangeMode('UPDATE');
            }}
          >
            update
          </a>
        </li>
        <li>
          <input
            onClick={e => {
              e.preventDefault();
              this.props.onChangeMode('DELETE');
            }}
            type="button"
            value="delete"
          />
        </li>
      </ul>
    );
  }
}

export default Control;
