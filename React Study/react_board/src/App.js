import React, { Component } from 'react';
import ItemList from './components/ItemList';
// import TestCreateContent from './components/TestCreateContent';
// import TestUpdateContent from './components/TestUpdateContent';
import ReadContent from './components/ReadContent';

import Header from './components/Header';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'READ',
      selected_content_id: 1,
      subject: { title: 'Board', sub: '게시판 만들기' },
      postList: [],
      postDetailContents: [],
    };
  }

  // getCreateContent(_title, _desc) {
  //   console.log('getCreateContent 단계');
  //   this.max_content_id = this.max_content_id + 1;
  //   let shallowContent = Array.from(this.state.content);
  //   shallowContent.push({
  //     id: this.max_content_id,
  //     title: _title,
  //     desc: _desc,
  //   });
  //   this.setState({
  //     contents: shallowContent,
  //     mode: 'READ',
  //     selected_content_id: this.max_content_id,
  //   });
  // }

  // getUpdateContent(_id, _title, _desc) {
  //   console.log('getUpdateContent 단계');
  //   let contents = Array.from(this.state.content);

  //   for (let index in contents) {
  //     if (contents[index].id === _id) contents[index] = { id: _id, title: _title, desc: _desc };
  //   }
  //   this.setState({
  //     contents: contents,
  //     mode: 'READ',
  //   });
  // }

  // onDelete(_mode) {
  //   if (_mode === 'DELETE') {
  //     if (window.confirm('really?')) {
  //       let selected_id = this.state.selected_content_id;
  //       let _contents = Array.from(this.state.content);

  //       for (let index in _contents) {
  //         if (_contents[index].id === selected_id) _contents.splice(index, 1);
  //       }

  //       this.setState({
  //         mode: 'READ',
  //         selected_content_id: 1,
  //         contents: _contents,
  //       });
  //       alert('deleted!');
  //     }
  //   } else {
  //     this.setState({
  //       mode: _mode,
  //     });
  //   }
  // }

  //   setStatusMode() {
  //     console.log('setStatusMode 단계: ', this.state.contents);
  //     let _title = null;
  //     let _desc = null;
  //     let _article = <TestReadContent title={_title} desc={_desc} />;

  //     if (this.state.mode === 'READ') {
  //       console.log('setStatusMode READ 단계: ');
  //       let _content = this.getContentById();
  //       this.content = _content;
  //       _article = <TestReadContent data={_content} />;
  //     } else if (this.state.mode === 'CREATE') {
  //       console.log('setStatusMode CREATE 단계: ');
  //       _article = (
  //         <TestCreateContent onSubmit={(_title, _desc) => this.getCreateContent(_title, _desc)} />
  //       );
  //     } else if (this.state.mode === 'UPDATE') {
  //       console.log('setStatusMode UPDATE 단계: ');
  //       _article = (
  //         <TestUpdateContent
  //           data={this._content}
  //           onSubmit={(_id, _title, _desc) => this.getUpdateContent(_id, _title, _desc)}
  //         />
  //       );
  //     }
  //     return (this.article = _article);
  //   }

  getContentById() {
    console.log('getContentById 단계');
    const selected_id = this.state.selected_content_id;
    const data = this.state.postList;
    // const testData = this.state.testContent;

    for (let val of data) {
      if (val.id === selected_id) return val;
    }
  }

  setChangePage(id) {
    console.log('setChangePage 단계: ');
    this.setState({
      mode: 'READ',
      selected_content_id: Number(id),
    });
  }

  getRequestBoardData(boardData) {
    // console.log('getRequestData 단계');
    let boardID = boardData === undefined ? 1 : boardData;
    let boardListURL = `http://27.1.60.24:9900/board/postList/${boardID}`;
    const init = { method: 'GET' };

    fetch(boardListURL, init)
      .then(response => response.json())
      .then(jsonObj => {
        this.setState(
          {
            postList: jsonObj.postList,
          },
          // () => this.setStatusMode(),
        );
        // console.log('Fetch then Data 단계:', jsonObj);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getRequestDetailData(boardData) {
    let boardID = boardData === undefined ? 1 : boardData;
    let postDetailURL = `http://27.1.60.24:9900/board/post/${boardID}`;
    const init = { method: 'GET' };

    fetch(postDetailURL, init)
      .then(response => response.json())
      .then(jsonObj => {
        this.setState({
          postDetailContents: jsonObj.postDetail,
        });
        // console.log('Readcontent Fetch then Data 단계:', jsonObj);
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    console.log('ComponentDidMount 단계');
    this.getRequestBoardData();
    this.getRequestDetailData();
  }

  render() {
    console.log('Render 단계');
    return (
      <div className="App">
        <Header title={this.state.subject.title} sub={this.state.subject.sub} />
        {/* <ItemList onChangePage={id => this.setChangePage(id)} data={this.state.postList} /> */}
        <ItemList
          onChangePage={id => {
            this.setChangePage(id);
            this.getRequestDetailData(id);
          }}
          data={this.state.postList}
        />
        <Control onChangeMode={_mode => this.onDelete(_mode)} />
        <ReadContent data={this.state.postDetailContents} />
      </div>
    );
  }
}

export default App;
