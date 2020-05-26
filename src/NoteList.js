import React from 'react';
import NotesCard from './NotesCard';


class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            list: this.props.list
        };
      }
    
    render(){
        return(
            <div className = "noteslist">
                {this.state.list.map((card, index) => {
                    return (
                    <NotesCard title = {card.title} timestamp = {card.timestamp} body = {card.body}/>
                    )
                })}
              </div>
        );
    }
}

export default NoteList;