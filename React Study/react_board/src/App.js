import React, { Component } from 'react';
import ItemList from './components/ItemList';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

import Header from './components/Header';
import Control from './components/Control';
import { Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'READ',
      selected_content_id: 1,
      subject: { title: 'Board', sub: '게시판 만들기' },
      contents: [],
      testContent: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }

  setReadMode() {
    const selected_id = this.state.selected_content_id;
    const data = this.state.contents;

    console.log(data, 'GetData');
    for (let val of data) {
      if (val.id === selected_id) return val;
    }
  }

  getCreateContent(_title, _desc) {
    this.max_content_id = this.max_content_id + 1;
    let shallowContent = Array.from(this.state.contents);
    shallowContent.push({
      id: this.max_content_id,
      title: _title,
      desc: _desc,
    });
    this.setState({
      contents: shallowContent,
      mode: 'READ',
      selected_content_id: this.max_content_id,
    });
  }

  getUpdateContent(_id, _title, _desc) {
    let contents = Array.from(this.state.contents);

    for (let index in contents) {
      if (contents[index].id === _id) contents[index] = { id: _id, title: _title, desc: _desc };
    }
    this.setState({
      contents: contents,
      mode: 'READ',
    });
  }

  onDelete(_mode) {
    if (_mode === 'DELETE') {
      if (window.confirm('really?')) {
        let selected_id = this.state.selected_content_id;
        let _contents = Array.from(this.state.contents);

        for (let index in _contents) {
          if (_contents[index].id === selected_id) _contents.splice(index, 1);
        }

        this.setState({
          mode: 'READ',
          selected_content_id: 1,
          contents: _contents,
        });
        alert('deleted!');
      }
    } else {
      this.setState({
        mode: _mode,
      });
    }
  }

  setChangePage(id) {
    this.setState({
      mode: 'READ',
      selected_content_id: Number(id),
    });
  }

  componentWillMount() {
    console.log('ComponetnWillMount 단계');
    // console.log('ComponetnDidMount 단계');
    let _title = null;
    let _desc = null;
    let _article = <ReadContent title={_title} desc={_desc} />;

    if (this.state.mode === 'READ') {
      let _content = this.setReadMode();
      _article = <ReadContent title={_content.board_name} />;
    } else if (this.state.mode === 'CREATE') {
      _article = (
        <CreateContent onSubmit={(_title, _desc) => this.getCreateContent(_title, _desc)} />
      );
    } else if (this.state.mode === 'UPDATE') {
      let _content = this.setReadMode();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={(_id, _title, _desc) => this.getUpdateContent(_id, _title, _desc)}
        />
      );
    }
    return _article;
  }

  getRequestData() {
    let url = `http://27.1.60.24:9900/board/boardList`;
    const init = { method: 'GET' };

    fetch(url, init)
      .then(response => response.json())
      .then(jsonObj => {
        let boardList = Array.from(this.state.contents);
        boardList.push(jsonObj.boardList);
        this.setState({
          contents: boardList,
        });
        console.log(boardList, 'boardList');
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    // console.log('ComponetnDidMount 단계');
    this.getRequestData();
  }

  render() {
    console.log('Render 단계');
    this.getRequestData();
    return (
      <div className="App">
        <Header title={this.state.subject.title} sub={this.state.subject.sub} />
        <ItemList onChangePage={id => this.setChangePage(id)} data={this.state.contents} />
        <Control onChangeMode={_mode => this.onDelete(_mode)} />
        {this.componentWillMount()}
      </div>
    );
  }
}

export default App;
