import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./NotesCard.css"

class NotesCard extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            timestamp: this.props.timestamp,
            body: this.props.body,
            isShowing: true
        }

        this.deleteCard = this.deleteCard.bind(this);
        this.editTitle = this.editTitle.bind(this);
        this.editBody = this.editBody.bind(this);
    }
    
    deleteCard(){
        this.setState({
            isShowing: false
        })
    }

    editTitle() {
        const newTitle = window.prompt("Enter new title: ")
        if(newTitle) {
            this.setState({
                title: newTitle
            })
        }
    }

    editBody() {
        const newBody = window.prompt("Enter new text: ")
        if(newBody) {
            this.setState({
                body: newBody
            })
        }
    }

    render() {
        if(this.state.isShowing) {
            return (
                <Card className="root" variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {this.state.title}
                    </Typography>
                    <Typography className="pos" color="textSecondary">
                      {this.state.timestamp}
                    </Typography><br />
                    <Typography variant="body2" component="p">
                      {this.state.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={this.editTitle}>Edit Title</Button>
                    <Button size="small" onClick={this.editBody}>Edit Body</Button>
                    <Button size="small" onClick = {this.deleteCard}>Delete</Button>
                  </CardActions>
                </Card>
              );
        } else {
            return <div></div>
        }
    }
}

export default NotesCard;