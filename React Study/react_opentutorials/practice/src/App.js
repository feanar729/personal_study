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
      mode: 'welcome',
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
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
      article = <ReadContent title={title} desc={desc} />;
    } else if (this.state.mode === 'read') {
      let content = this.getReadContent();
      article = <ReadContent title={content.title} desc={content.desc} />;
    } else if (this.state.mode === 'create') {
      article = (
        <CreateContent
          onSubmit={function(_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            let newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: newContents,
              mode: 'read',
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === 'update') {
      let content = this.getReadContent();
      article = (
        <UpdateContent
          data={content}
          onSubmit={function(_id, _title, _desc) {
            let updateContents = Array.from(this.state.contents);
            let i = 0;
            while (i < updateContents.length) {
              if (updateContents[i].id === _id) {
                updateContents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: updateContents,
              mode: 'read',
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
            if (_mode === 'delete') {
              if (window.confirm('Really Delete?')) {
                let delContent = Array.from(this.state.contents);
                let i = 0;
                while (i < delContent.length) {
                  if (delContent[i].id === this.state.selected_content_id) {
                    delContent.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: 'welcome',
                  contents: delContent,
                });
                alert('Deleted!!!');
              }
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
