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

  /*
  We generally prefer to use arrow functions. The arrow function syntax takes care of
  .bind(this) so you would be able to delete lines 19-21. You can write changeTitle as
  const changeTitle = (e) => {return (); }
  
  In some contexts, an argument could be made for using the traditional function syntax.
  However, in practice, arrow functions are almost always preferred. 
  */
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

/*
https://daveceddia.com/why-not-modify-react-state-directly/
Here is an article for reference on why we don't push to state directly even 
though it appears to work fine. 

We would prefer the following method for modifying state:
this.setState({list: [...this.state.list, note], etc.})
The ... syntax grabs all of the info from the existing this.state.list 
and with the comma you're adding on your new object to create an entirely
new array. 

Let me know if you want to further discuss the conceptual idea here / if that 
article / others leave you with any questions.
*/
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
