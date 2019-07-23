import React, { Component } from 'react';

class ItemList extends Component {
  shouldComponentUpdate(newProps, newState) {
    // console.log('===> Menu render shouldComponentUpdate');
    if (this.props.data === newProps.data) return false;
    else return true;
  }

  getItemList() {
    let lists = [];
    let data = this.props.data;
    for (let index in data) {
      lists.push(
        <li key={data[index].id}>
          <a
            href={'/content/' + data[index].id}
            data-id={data[index].id}
            onClick={e => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }}
          >
            {data[index].title}
          </a>
        </li>,
      );
    }
    return lists;
  }

  render() {
    let lists = this.getItemList();
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default ItemList;
