import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import './App.css';
import { Control } from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }

  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    console.log('App render');
    let title = null;
    let desc = null;
    let article = null;
    if (this.state.mode === 'welcome') {
      let content = this.getReadContent();
      article = <ReadContent title={content.title} desc={content.desc} />;
    } else if (this.state.mode === 'read') {
      article = <ReadContent title={title} desc={desc} />;
    } else if (this.state.mode === 'create') {
      article = (
        <CreateContent
          onSubmit={function(title, desc) {
            let newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id + 1,
              title: title,
              desc: desc,
            });
            this.setState({
              contents: newContents,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === 'update') {
      let content = this.getReadContent();
      article = (
        <UpdateContent
          data={content}
          onSubmit={function(title, desc) {
            let newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id + 1,
              title: title,
              desc: desc,
            });
            this.setState({
              contents: newContents,
            });
          }.bind(this)}
        />
      );
    }
    return article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        />
        <TOC
          onChangePage={function(id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        />
        <Control
          onChangeMode={function(_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
