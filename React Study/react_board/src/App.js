import React, { Component } from 'react';
import ItemList from './components/ItemList';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

import Subject from './components/Subject';
import Control from './components/Control';
import { Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'read',
      selected_content_id: 1,
      subject: { title: 'Board', sub: '게시판 만들기' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
      testContent: [],
    };
  }

  setReadMode() {
    const selected_id = this.state.selected_content_id;
    const data = this.state.contents;

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
      mode: 'read',
      selected_content_id: this.max_content_id,
    });
  }

  getUpdateContent(_id, _title, _desc) {
    let shallowContent = Array.from(this.state.contents);
    let i = 0;
    while (i < shallowContent.length) {
      if (shallowContent[i].id === _id) {
        shallowContent[i] = { id: _id, title: _title, desc: _desc };
        break;
      }
      i = i + 1;
    }
    this.setState({
      contents: shallowContent,
      mode: 'read',
    });
  }

  onDelete(_mode) {
    if (_mode === 'delete') {
      if (window.confirm('really?')) {
        let selected_id = this.state.selected_content_id;
        let _contents = Array.from(this.state.contents);

        for (let index in _contents) {
          if (_contents[index].id === selected_id) _contents.splice(index, 1);
        }

        this.setState({
          mode: 'read',
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
      mode: 'read',
      selected_content_id: Number(id),
    });
  }

  componentWillMount() {
    console.log('ComponetnWillMount 단계');
    let _title = null;
    let _desc = null;
    let _article = <ReadContent title={_title} desc={_desc} />;

    if (this.state.mode === 'read') {
      let _content = this.setReadMode();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent onSubmit={(_title, _desc) => this.getCreateContent(_title, _desc)} />
      );
    } else if (this.state.mode === 'update') {
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

  componentDidMount(boardID) {
    console.log('ComponetnDidMount 단계');
    boardID = 1;
    const url = `http://27.1.60.24:9900/board/boardList`;
    const init = { method: 'GET' };
    fetch(url, init)
      .then(response => response.json())
      .then(jsonObj => {
        let boardList = Array.from(this.state.testContent);
        boardList.push(jsonObj.boardList);
        this.setState({
          testContent: boardList,
        });
        console.log(boardList, 'testcontent');
      });
  }

  // willmount단계 가공 => state (refactoring / Life사이클에 맞게)
  render() {
    console.log('App render');
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
        <ItemList onChangePage={id => this.setChangePage(id)} data={this.state.contents} />
        <Control onChangeMode={_mode => this.onDelete(_mode)} />
        {this.componentWillMount()}
      </div>
    );
  }
}

export default App;
