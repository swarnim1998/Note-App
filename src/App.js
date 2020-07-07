import React, { Component } from 'react';
import './App.css';
import { Editor } from './Components/editor';
import { Note } from './Components/note';
import { Update } from './Components/updateNotes';
import { Navigation} from './Components/navigation';

class  App extends Component {

  constructor(){
    super();
    this.state={
      notes: [        
      ],
      showEditor: true,
      search: [],
      showNote: false
    }
   var index; 
  }
  
  updatedelNote=(element,index)=>{
    let uKey=index;
    let first=element.props.title;
    let sec=element.props.content;
    //console.log(first,sec);    
    const newNote=<Note title={first} content={ sec} 
    key={ uKey } tKey={ uKey} deleteNote={this.deleteNote} updateNote={ this.updateNote} />;
    return newNote;
   }
  
   
  deleteNote=(id)=>
  {
   const delList = this.state.notes.filter(elem=> elem.props.tKey!==id);
   const newNote= [...delList.map((value,index)=> this.updatedelNote(value,index))];
   this.setState({
     notes: newNote,
     search: newNote
   })    
  }
  
  updateNote=(key)=>{
    
    this.index=key;

    this.setState({
      notes: [...this.state.notes],
      showEditor: false
    })
  }
  createNote=(event)=>{
    let title=event.target.title.value;
    let content=event.target.content.value;
    let uKey=this.state.notes.length;
        
    this.setState({
      notes : [...this.state.notes , <Note title={title} content={ content} 
               key={ uKey } tKey={ uKey} deleteNote={this.deleteNote} updateNote={ this.updateNote} />,
              ],
      showNote: false        
    })  
    event.preventDefault();
  }

 updateState=(index,first,sec)=>{
  let uKey=index;
  const newNote=<Note title={first} content={ sec} 
  key={ uKey } tKey={ uKey} deleteNote={this.deleteNote} updateNote={ this.updateNote} />;
  return newNote;
 }

updatedNote=(event)=>{
  event.preventDefault();
  //console.log(event.target.title.value,event.target.content.value);
  let first=event.target.title.value;
  let sec=event.target.content.value;
  
  let ind=this.index;
  this.index=-1;
  this.setState({
    notes: this.state.notes.map((value,index)=>
           index===ind ? this.updateState(index,first,sec) : this.updatedelNote(value,index)),
    showEditor: true
  })
    
}
 
search=(event)=>{
  const word=event.target.value;
  this.setState({
  search: this.state.notes.filter((value)=>{
     return value.props.title.indexOf(word)!==-1;
    }),
    showNote: true   
  })
 }

  render()
  {
    let p=this.index;
    let title;
    let content;
    if(p>=0)
 {
  title=this.state.notes[p].props.title;
  content=this.state.notes[p].props.content;
  //console.log(title,content);
 } 
    let chooseEditor=this.state.showEditor ? <Editor createNote={this.createNote}/>:<Update updatedNote={this.updatedNote} title={title} content={content}/>; 
    let note= this.state.showNote ? this.state.search: this.state.notes;
  return (
    <div className="App">
     <Navigation search={this.search}/>
     { chooseEditor }
     { note }
    </div>
  );
  } 
 }
export default App;
