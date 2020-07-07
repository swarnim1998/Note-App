import React,{ Component } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
export class Note extends Component{
    render(){
        return(
            <div className="note">
            <div  onClick={e=>this.props.updateNote(this.props.tKey,this.props.title)}>
              <h1>{this.props.title}</h1>
              <br/>
               <p>{this.props.content}</p>
            </div>   
               
               <div>
              <button className="delete-btn" onClick={e=> this.props.deleteNote(this.props.tKey)}>
                <DeleteOutlineIcon className="delete-icon"/> 
              </button>
              </div>
            
            </div>
        );
    }
}