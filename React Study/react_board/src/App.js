import React, { Component } from 'react';
import ItemList from './components/ItemList';
import TestReadContent from './components/TestReadContent';
import TestCreateContent from './components/TestCreateContent';
import TestUpdateContent from './components/TestUpdateContent';
import ReadContent from './components/ReadContent';

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
    this.article = null;
    this.content = null;
  }

  getContentById() {
    console.log('getContentById 단계');
    const selected_id = this.state.selected_content_id;
    const data = this.state.contents;
    // const testData = this.state.testContent;

    for (let val of data) {
      if (val.id === selected_id) return val;
    }
  }

  getCreateContent(_title, _desc) {
    console.log('getCreateContent 단계');
    this.max_content_id = this.max_content_id + 1;
    let shallowContent = Array.from(this.state.content);
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
    console.log('getUpdateContent 단계');
    let contents = Array.from(this.state.content);

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
        let _contents = Array.from(this.state.content);

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
    console.log('setChangePage 단계: ');
    this.setState({
      mode: 'READ',
      selected_content_id: Number(id),
    });
  }

  setStatusMode() {
    console.log('setStatusMode 단계: ', this.state.contents);
    let _title = null;
    let _desc = null;
    let _article = <TestReadContent title={_title} desc={_desc} />;

    if (this.state.mode === 'READ') {
      console.log('setStatusMode READ 단계: ');
      let _content = this.getContentById();
      this.content = _content;
      _article = <TestReadContent data={_content} />;
    } else if (this.state.mode === 'CREATE') {
      console.log('setStatusMode CREATE 단계: ');
      _article = (
        <TestCreateContent onSubmit={(_title, _desc) => this.getCreateContent(_title, _desc)} />
      );
    } else if (this.state.mode === 'UPDATE') {
      console.log('setStatusMode UPDATE 단계: ');
      _article = (
        <TestUpdateContent
          data={this._content}
          onSubmit={(_id, _title, _desc) => this.getUpdateContent(_id, _title, _desc)}
        />
      );
    }
    return (this.article = _article);
  }

  getRequestData() {
    console.log('getRequestData 단계');
    let url = `http://27.1.60.24:9900/board/boardList`;
    const init = { method: 'GET' };

    fetch(url, init)
      .then(response => response.json())
      .then(jsonObj => {
        console.log('Fetch then Data 단계:', jsonObj);
        this.setState(
          {
            contents: jsonObj.boardList,
          },
          () => this.setStatusMode(),
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    console.log('ComponentDidMount 단계');
    this.getRequestData();
  }

  // componentDidUpdate() {
  //   console.log('ComponentDidUpdate 단계');
  //   this.getContentById();
  // }

  render() {
    console.log('Render 단계');
    console.log('article Data: ', this.article);
    return (
      <div className="App">
        <Header title={this.state.subject.title} sub={this.state.subject.sub} />
        {/* <ItemList onChangePage={id => this.setChangePage(id)} data={this.state.testContent} /> */}
        <ItemList onChangePage={id => this.setChangePage(id)} data={this.state.contents} />
        <Control onChangeMode={_mode => this.onDelete(_mode)} />
      </div>
    );
  }
}

export default App;
