import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';

export class Update extends Component{
    constructor(props){
        super(props);
        this.state={
            title: props.title,
            content: props.content
        }
    }
    changeall=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render(){
        
        return (
               <div className="update">
               <div className="update-editor">
                    
                <form onSubmit={ this.props.updatedNote}>
                    <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.changeall}></input>
                    <textarea rows="" column="" placeholder="Write a note..."  value={this.state.content} name="content"
                     onChange={this.changeall}></textarea>
                    <button className="upd-btn" type="submit">
                      <AddIcon className="upd-plus-sign"/>
                    </button>
                </form>

                </div>
                </div>
            
        );
    }
}