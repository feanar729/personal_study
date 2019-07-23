import React, { Component } from 'react';

class ItemList extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log('===> Menu render shouldComponentUpdate');
    if (this.props.data === newProps.data) return false;
    else return true;
  }

  render() {
    console.log('Menu render');
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={'/content/' + data[i].id}
            data-id={data[i].id}
            onClick={e => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }}
          >
            {data[i].title}
          </a>
        </li>,
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default ItemList;
