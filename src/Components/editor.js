import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';

export class Editor extends Component{
    render(){
        return (
            <div className="editor">
               <div className="main-editor">

                <form onSubmit={ this.props.createNote}>
                    <input type="text" placeholder="Title" autoComplete="off" name="title"></input>
                    <textarea rows="" column="" placeholder="Write a note..." name="content"></textarea>
                    <button className="note-btn" type="submit">
                      <AddIcon className="plus-sign"/>
                    </button>
                </form>

                </div>
            </div>
        );
    }
}