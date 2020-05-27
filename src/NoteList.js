import React from 'react';
import NotesCard from './NotesCard';

/*
Remove this.props.list from state. You can access this in the return by saying
this.props.list.map ...

A component's state represents the data that its functions will update and control
in the same file / component. Props is data that we pass around that the child will not
manipulate. Therefore, in this example, NoteList does not need to have any state because
we are simply receiving data, not manipulating its contents. (If you had to manipulate the data
you could use a callback function although this is not preferred.) You can remove the constructor props
to the end of the this.state statement.

The component as written is a class component that is designed to hold and control state.
Because NoteList does not need to control its own state, we can write this as a functional component.
Therefore you can write:

const NoteList = (props) => {
    return ();
   }
   
Note how in a class component you could just access props by saying this.props.XXX. 
For our functional component, we pass props in as an argument and then access props
in our return by saying this.props.XXX.
*/
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
