import React from 'react';
import './App.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './NotesCard.css';
import TextField from '@material-ui/core/TextField';
import NoteList from './NoteList';
import Timestamp from 'react-timestamp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
        title: '',
        timestamp: <Timestamp date={Date.now()/1000} />,
        text: '',
        list: []
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeTitle(e){
      this.setState({
          title: e.target.value
      });
  }

  changeText(e){
      this.setState({
          text: e.target.value
      });
  }

  handleSubmit(e){
    e.preventDefault();

    const note = {
      title: this.state.title, 
      timestamp: <Timestamp date={Date.now()/1000} />, 
      body: this.state.text
    };

    this.state.list.push(note);

    this.setState({
      list: this.state.list,
      title: '',
      text: ''
    });
  }

  render() {
      const inputProps = {
          step: 300,
        };
      return(
          <div>
              <h1>Enter a Note!</h1>
              <TextField name = "title" id="title" type="title" inputProps={inputProps} placeholder= "Title" onChange = {this.changeTitle} value = {this.state.title}/>
              <br /><br />
              <TextareaAutosize name = "body" className = "textbox" aria-label="minimum height" rowsMin={10} rowsMax = {10} placeholder="Write your note here" onChange = {this.changeText} value = {this.state.text}/>
              <br /><br />
              <button onClick = {this.handleSubmit}>Submit</button>
              <br /><br /><br />
              <h1>Past Notes: </h1>
              <NoteList list = {this.state.list} />
          </div>
      );
  }
}

export default App;
